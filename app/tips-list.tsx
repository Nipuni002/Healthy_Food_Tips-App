import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { foodTips, categories } from '@/data/tips';
import { getFavorites, addFavorite, removeFavorite } from '@/utils/storage';
import { Category } from '@/types';

export default function TipsListScreen() {
  const router = useRouter();
  const { category } = useLocalSearchParams();
  const [favorites, setFavorites] = useState<string[]>([]);

  const categoryInfo = categories.find((cat) => cat.id === category);
  const tips = foodTips.filter((tip) => tip.category === category);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  const toggleFavorite = async (tipId: string) => {
    if (favorites.includes(tipId)) {
      await removeFavorite(tipId);
      setFavorites(favorites.filter((id) => id !== tipId));
    } else {
      await addFavorite(tipId);
      setFavorites([...favorites, tipId]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ThemedText style={styles.backText}>← Back</ThemedText>
        </TouchableOpacity>
        <ThemedText type="title" style={styles.headerTitle}>
          {categoryInfo?.icon} {categoryInfo?.name}
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          {tips.length} tips available
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.tipsContainer}>
        {tips.map((tip) => (
          <View key={tip.id} style={styles.tipCard}>
            <TouchableOpacity
              style={styles.tipMain}
              onPress={() => router.push(`/tip-details?id=${tip.id}` as any)}
            >
              <ThemedText style={styles.tipIcon}>{tip.icon}</ThemedText>
              <View style={styles.tipContent}>
                <ThemedText type="defaultSemiBold" style={styles.tipTitle}>
                  {tip.title}
                </ThemedText>
                <ThemedText style={styles.tipDescription}>
                  {tip.shortDescription}
                </ThemedText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => toggleFavorite(tip.id)}
            >
              <ThemedText style={styles.favoriteIcon}>
                {favorites.includes(tip.id) ? '❤️' : '🤍'}
              </ThemedText>
            </TouchableOpacity>
          </View>
        ))}
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
  backButton: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: '#2196F3',
  },
  headerTitle: {
    fontSize: 26,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  tipsContainer: {
    padding: 20,
    gap: 15,
  },
  tipCard: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  tipMain: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
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
  favoriteButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 24,
  },
});
