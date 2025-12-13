import { StyleSheet, ScrollView, TouchableOpacity, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getWaterIntake, incrementWaterIntake, resetWaterIntake } from '@/utils/storage';

export default function MoreScreen() {
  const [waterCount, setWaterCount] = useState(0);
  const waterGoal = 8;
  const waterPercentage = Math.min((waterCount / waterGoal) * 100, 100);

  useFocusEffect(
    useCallback(() => {
      loadWaterIntake();
    }, [])
  );

  const loadWaterIntake = async () => {
    const intake = await getWaterIntake();
    setWaterCount(intake);
  };

  const handleAddWater = async () => {
    const newCount = await incrementWaterIntake();
    setWaterCount(newCount);
    if (newCount === waterGoal) {
      Alert.alert('🎉 Congratulations!', 'You\'ve reached your daily water goal!');
    }
  };

  const handleResetWater = async () => {
    Alert.alert(
      'Reset Water Intake',
      'Are you sure you want to reset today\'s water count?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          onPress: async () => {
            await resetWaterIntake();
            setWaterCount(0);
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>More</ThemedText>
        <ThemedText style={styles.headerSubtitle}>Settings & Information</ThemedText>
      </ThemedView>

      {/* Water Intake Tracker */}
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>💧 Water Intake Tracker</ThemedText>
        
        <ThemedView style={styles.waterCard}>
          <View style={styles.waterHeader}>
            <View>
              <ThemedText style={styles.waterCount}>{waterCount}</ThemedText>
              <ThemedText style={styles.waterLabel}>glasses today</ThemedText>
            </View>
            <View style={styles.goalBadge}>
              <ThemedText style={styles.goalText}>Goal: {waterGoal}</ThemedText>
            </View>
          </View>

          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: `${waterPercentage}%` }]} />
            </View>
            <ThemedText style={styles.progressText}>{Math.round(waterPercentage)}%</ThemedText>
          </View>

          <View style={styles.waterButtons}>
            <TouchableOpacity style={styles.addWaterButton} onPress={handleAddWater}>
              <ThemedText style={styles.addWaterButtonText}>+ Add Glass</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetButton} onPress={handleResetWater}>
              <ThemedText style={styles.resetButtonText}>Reset</ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.waterTips}>
            <ThemedText style={styles.tipsTitle}>💡 Hydration Tips:</ThemedText>
            <ThemedText style={styles.tipText}>• Drink a glass when you wake up</ThemedText>
            <ThemedText style={styles.tipText}>• Have water before each meal</ThemedText>
            <ThemedText style={styles.tipText}>• Set hourly reminders</ThemedText>
          </View>
        </ThemedView>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>ℹ️ About</ThemedText>
        
        <ThemedView style={styles.aboutCard}>
          <ThemedText style={styles.appIcon}>🍎</ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.appName}>
            Healthy Food Tips App
          </ThemedText>
          <ThemedText style={styles.version}>Version 1.0.0</ThemedText>

          <View style={styles.divider} />

          <ThemedText style={styles.aboutTitle}>Purpose</ThemedText>
          <ThemedText style={styles.aboutText}>
            This app is designed to help you make healthier food choices by providing
            evidence-based nutrition tips, meal suggestions, and tools to track your
            daily habits.
          </ThemedText>

          <View style={styles.divider} />

          <ThemedText style={styles.disclaimerTitle}>⚠️ Disclaimer</ThemedText>
          <ThemedText style={styles.disclaimerText}>
            This app provides general food and nutrition tips for informational purposes only.
            It is not intended as medical advice, diagnosis, or treatment. Always consult with
            a qualified healthcare provider or registered dietitian before making significant
            changes to your diet, especially if you have any medical conditions or concerns.
          </ThemedText>

          <View style={styles.divider} />

          <View style={styles.features}>
            <ThemedText style={styles.featuresTitle}>Features:</ThemedText>
            <ThemedText style={styles.featureItem}>✓ Daily nutrition tips</ThemedText>
            <ThemedText style={styles.featureItem}>✓ Health categories</ThemedText>
            <ThemedText style={styles.featureItem}>✓ Favorite tips</ThemedText>
            <ThemedText style={styles.featureItem}>✓ Meal suggestions</ThemedText>
            <ThemedText style={styles.featureItem}>✓ Water intake tracker</ThemedText>
          </View>
        </ThemedView>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  section: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 15,
  },
  waterCard: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#E3F2FD',
  },
  waterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  waterCount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  waterLabel: {
    fontSize: 14,
    color: '#2196F3',
  },
  goalBadge: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  goalText: {
    color: '#fff',
    fontWeight: '600',
  },
  progressBarContainer: {
    marginBottom: 20,
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: '#BBDEFB',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 5,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  progressText: {
    fontSize: 12,
    textAlign: 'right',
    color: '#2196F3',
    fontWeight: '600',
  },
  waterButtons: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  addWaterButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addWaterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },
  waterTips: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 13,
    opacity: 0.7,
    marginBottom: 4,
  },
  aboutCard: {
    padding: 25,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  appIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  appName: {
    fontSize: 20,
    marginBottom: 5,
  },
  version: {
    fontSize: 14,
    opacity: 0.5,
    marginBottom: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.7,
    textAlign: 'left',
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#FF9800',
  },
  disclaimerText: {
    fontSize: 13,
    lineHeight: 20,
    opacity: 0.7,
    textAlign: 'left',
    fontStyle: 'italic',
  },
  features: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 14,
    marginBottom: 6,
    opacity: 0.7,
  },
  spacer: {
    height: 30,
  },
});
