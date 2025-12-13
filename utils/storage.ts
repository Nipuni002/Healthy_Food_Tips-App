import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@healthy_food_tips:favorites';
const WATER_INTAKE_KEY = '@healthy_food_tips:water_intake';
const WATER_DATE_KEY = '@healthy_food_tips:water_date';

// Favorites Management
export const getFavorites = async (): Promise<string[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const addFavorite = async (tipId: string): Promise<void> => {
  try {
    const favorites = await getFavorites();
    if (!favorites.includes(tipId)) {
      favorites.push(tipId);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding favorite:', error);
  }
};

export const removeFavorite = async (tipId: string): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updated = favorites.filter((id) => id !== tipId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

export const isFavorite = async (tipId: string): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    return favorites.includes(tipId);
  } catch (error) {
    console.error('Error checking favorite:', error);
    return false;
  }
};

// Water Intake Management
export const getWaterIntake = async (): Promise<number> => {
  try {
    const today = new Date().toDateString();
    const lastDate = await AsyncStorage.getItem(WATER_DATE_KEY);
    
    // Reset if it's a new day
    if (lastDate !== today) {
      await AsyncStorage.setItem(WATER_DATE_KEY, today);
      await AsyncStorage.setItem(WATER_INTAKE_KEY, '0');
      return 0;
    }
    
    const intake = await AsyncStorage.getItem(WATER_INTAKE_KEY);
    return intake ? parseInt(intake, 10) : 0;
  } catch (error) {
    console.error('Error getting water intake:', error);
    return 0;
  }
};

export const incrementWaterIntake = async (): Promise<number> => {
  try {
    const current = await getWaterIntake();
    const newIntake = current + 1;
    await AsyncStorage.setItem(WATER_INTAKE_KEY, newIntake.toString());
    await AsyncStorage.setItem(WATER_DATE_KEY, new Date().toDateString());
    return newIntake;
  } catch (error) {
    console.error('Error incrementing water intake:', error);
    return 0;
  }
};

export const resetWaterIntake = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(WATER_INTAKE_KEY, '0');
    await AsyncStorage.setItem(WATER_DATE_KEY, new Date().toDateString());
  } catch (error) {
    console.error('Error resetting water intake:', error);
  }
};
