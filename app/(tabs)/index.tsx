import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { dailyQuotes, foodTips } from '@/data/tips';
import { getWaterIntake, incrementWaterIntake } from '@/utils/storage';

export default function HomeScreen() {
  const router = useRouter();
  const [waterCount, setWaterCount] = useState(0);
  const dailyTip = foodTips[new Date().getDate() % foodTips.length];
  const dailyQuote = dailyQuotes[new Date().getDate() % dailyQuotes.length];

  useEffect(() => {
    loadWaterIntake();
  }, []);

  const loadWaterIntake = async () => {
    const intake = await getWaterIntake();
    setWaterCount(intake);
  };

  const handleAddWater = async () => {
    const newCount = await incrementWaterIntake();
    setWaterCount(newCount);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>🍎 Healthy Food Tips</ThemedText>
        <ThemedText style={styles.headerSubtitle}>Your daily nutrition companion</ThemedText>
      </ThemedView>

      {/* Banner Image */}
      <View style={styles.banner}>
        <View style={styles.bannerOverlay}>
          <ThemedText style={styles.bannerText}>🥗🥑🍎</ThemedText>
          <ThemedText style={styles.bannerSubtext}>Eat Healthy, Live Better</ThemedText>
        </View>
      </View>

      {/* Daily Quote */}
      <ThemedView style={styles.quoteCard}>
        <ThemedText style={styles.quoteIcon}>💭</ThemedText>
        <ThemedText style={styles.quoteText}>"{dailyQuote.quote}"</ThemedText>
        {dailyQuote.author && (
          <ThemedText style={styles.quoteAuthor}>— {dailyQuote.author}</ThemedText>
        )}
      </ThemedView>

      {/* Daily Tip */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>💡 Tip of the Day</ThemedText>
        <TouchableOpacity
          style={styles.tipCard}
          onPress={() => router.push(`/tip-details?id=${dailyTip.id}` as any)}
        >
          <ThemedText style={styles.tipIcon}>{dailyTip.icon}</ThemedText>
          <View style={styles.tipContent}>
            <ThemedText type="defaultSemiBold" style={styles.tipTitle}>{dailyTip.title}</ThemedText>
            <ThemedText style={styles.tipDescription}>{dailyTip.shortDescription}</ThemedText>
          </View>
        </TouchableOpacity>
      </ThemedView>

      {/* Quick Water Tracker */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>💧 Water Intake Today</ThemedText>
        <ThemedView style={styles.waterCard}>
          <View style={styles.waterInfo}>
            <ThemedText style={styles.waterCount}>{waterCount}</ThemedText>
            <ThemedText style={styles.waterLabel}>glasses</ThemedText>
            <ThemedText style={styles.waterGoal}>Goal: 8 glasses</ThemedText>
          </View>
          <TouchableOpacity style={styles.waterButton} onPress={handleAddWater}>
            <ThemedText style={styles.waterButtonText}>+ Add Glass</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      {/* Quick Access */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Quick Access</ThemedText>
        <View style={styles.quickAccess}>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => router.push('/(tabs)/categories')}
          >
            <ThemedText style={styles.quickIcon}>🥗</ThemedText>
            <ThemedText style={styles.quickLabel}>Categories</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => router.push('/(tabs)/meals')}
          >
            <ThemedText style={styles.quickIcon}>🍽️</ThemedText>
            <ThemedText style={styles.quickLabel}>Meals</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => router.push('/(tabs)/favorites')}
          >
            <ThemedText style={styles.quickIcon}>❤️</ThemedText>
            <ThemedText style={styles.quickLabel}>Favorites</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

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
  banner: {
    height: 150,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#4CAF50',
    marginBottom: 20,
  },
  bannerOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.9)',
  },
  bannerText: {
    fontSize: 40,
    marginBottom: 10,
  },
  bannerSubtext: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  quoteCard: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  quoteIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 24,
    marginBottom: 8,
  },
  quoteAuthor: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'right',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 20,
  },
  tipCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  waterCard: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
  },
  waterInfo: {
    alignItems: 'center',
    marginBottom: 15,
  },
  waterCount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  waterLabel: {
    fontSize: 16,
    color: '#2196F3',
    marginBottom: 5,
  },
  waterGoal: {
    fontSize: 14,
    opacity: 0.7,
  },
  waterButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  waterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  quickAccess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickButton: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  spacer: {
    height: 30,
  },
});
