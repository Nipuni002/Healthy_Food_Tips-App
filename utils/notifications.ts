import * as Notifications from 'expo-notifications';
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_ENABLED_KEY = '@healthy_food_tips:notifications_enabled';
const NOTIFICATION_TIME_KEY = '@healthy_food_tips:notification_time';

// Configure notification handler with error handling
try {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
} catch (error) {
  console.warn('Notification handler setup not available:', error);
}

export const requestNotificationPermissions = async (): Promise<boolean> => {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      return false;
    }

    if (Platform.OS === 'android') {
      try {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#4CAF50',
        });
      } catch (error) {
        console.warn('Could not set notification channel:', error);
      }
    }

    return true;
  } catch (error) {
    console.warn('Notification permissions not available:', error);
    return false;
  }
};

export const scheduleHealthyFoodReminder = async (hour: number, minute: number): Promise<string | null> => {
  try {
    // Save notification settings first (this always works)
    await AsyncStorage.setItem(NOTIFICATION_ENABLED_KEY, 'true');
    await AsyncStorage.setItem(NOTIFICATION_TIME_KEY, JSON.stringify({ hour, minute }));

    try {
      // Try to schedule notification (may fail in Expo Go)
      await Notifications.cancelAllScheduledNotificationsAsync();

      const trigger: Notifications.DailyTriggerInput = {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour,
        minute,
      };

      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: '🍎 Healthy Food Reminder',
          body: 'Time to eat some healthy food! Remember to stay hydrated too! 💧',
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
        },
        trigger,
      });

      return id;
    } catch (notificationError) {
      console.warn('Notification scheduling not available (this is normal in Expo Go):', notificationError);
      // Return a simulated ID so the UI can proceed
      return 'simulated-' + Date.now();
    }
  } catch (error) {
    console.warn('Error in scheduleHealthyFoodReminder:', error);
    return null;
  }
};

export const cancelAllNotifications = async (): Promise<void> => {
  try {
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch (notificationError) {
      console.warn('Could not cancel notifications:', notificationError);
    }
    
    await AsyncStorage.setItem(NOTIFICATION_ENABLED_KEY, 'false');
  } catch (error) {
    console.warn('Error canceling notifications:', error);
  }
};

export const getNotificationSettings = async (): Promise<{ enabled: boolean; time: { hour: number; minute: number } }> => {
  try {
    const enabled = await AsyncStorage.getItem(NOTIFICATION_ENABLED_KEY);
    const timeString = await AsyncStorage.getItem(NOTIFICATION_TIME_KEY);
    
    const time = timeString ? JSON.parse(timeString) : { hour: 9, minute: 0 };
    
    return {
      enabled: enabled === 'true',
      time,
    };
  } catch (error) {
    console.warn('Error getting notification settings:', error);
    return { enabled: false, time: { hour: 9, minute: 0 } };
  }
};

export const sendTestNotification = async () => {
  try {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '🍎 Test Notification',
          body: 'Notifications are working! You\'ll receive daily reminders at your chosen time.',
          sound: true,
        },
        trigger: { 
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, 
          seconds: 1 
        },
      });
    } catch (notificationError) {
      console.warn('Test notification not available in Expo Go:', notificationError);
      // Still inform the user but explain the limitation
      Alert.alert(
        'ℹ️ Notifications Limited in Expo Go',
        'Your reminder settings have been saved! For full push notification support, you\'ll need to build a development build or use a native app. Learn more at https://docs.expo.dev/develop/development-builds/',
        [{ text: 'OK' }]
      );
    }
  } catch (error) {
    console.warn('Error in sendTestNotification:', error);
  }
};
