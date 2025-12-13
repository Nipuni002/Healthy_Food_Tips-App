import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { foodTips } from '@/data/tips';
import { getFavorites, addFavorite, removeFavorite } from '@/utils/storage';

export default function TipDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [isFav, setIsFav] = useState(false);

  const tip = foodTips.find((t) => t.id === id);

  useEffect(() => {
    checkFavorite();
  }, []);

  const checkFavorite = async () => {
    const favorites = await getFavorites();
    setIsFav(favorites.includes(id as string));
  };

  const toggleFavorite = async () => {
    if (isFav) {
      await removeFavorite(id as string);
      setIsFav(false);
    } else {
      await addFavorite(id as string);
      setIsFav(true);
    }
  };

  if (!tip) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Tip not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <ThemedText style={styles.backText}>← Back</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
            <ThemedText style={styles.favoriteIcon}>
              {isFav ? '❤️' : '🤍'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      <ThemedView style={styles.content}>
        <View style={styles.iconContainer}>
          <ThemedText style={styles.icon}>{tip.icon}</ThemedText>
        </View>

        <ThemedText type="title" style={styles.title}>{tip.title}</ThemedText>
        <ThemedText style={styles.shortDescription}>{tip.shortDescription}</ThemedText>

        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>📖 Full Explanation</ThemedText>
          <ThemedText style={styles.explanation}>{tip.fullExplanation}</ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>✨ Benefits</ThemedText>
          {tip.benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <ThemedText style={styles.bullet}>•</ThemedText>
              <ThemedText style={styles.benefitText}>{benefit}</ThemedText>
            </View>
          ))}
        </View>

        <View style={styles.infoCards}>
          <ThemedView style={styles.infoCard}>
            <ThemedText style={styles.infoIcon}>⏰</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.infoTitle}>When to Eat</ThemedText>
            <ThemedText style={styles.infoText}>{tip.whenToEat}</ThemedText>
          </ThemedView>

          <ThemedView style={styles.infoCard}>
            <ThemedText style={styles.infoIcon}>📊</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.infoTitle}>Quantity</ThemedText>
            <ThemedText style={styles.infoText}>{tip.quantityRecommendation}</ThemedText>
          </ThemedView>
        </View>

        <View style={styles.spacer} />
      </ThemedView>
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
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  backText: {
    fontSize: 16,
    color: '#2196F3',
  },
  favoriteButton: {
    padding: 5,
  },
  favoriteIcon: {
    fontSize: 32,
  },
  content: {
    padding: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
  },
  shortDescription: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    marginRight: 10,
    color: '#4CAF50',
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  infoCards: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  infoCard: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  infoTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
  spacer: {
    height: 30,
  },
});
