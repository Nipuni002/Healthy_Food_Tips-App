import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { foodTips } from '@/data/tips';
import { getFavorites, removeFavorite } from '@/utils/storage';

export default function FavoritesScreen() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  const handleRemoveFavorite = async (tipId: string) => {
    await removeFavorite(tipId);
    setFavorites(favorites.filter((id) => id !== tipId));
  };

  const favoriteTips = foodTips.filter((tip) => favorites.includes(tip.id));

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>❤️ Favorites</ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          {favoriteTips.length} saved {favoriteTips.length === 1 ? 'tip' : 'tips'}
        </ThemedText>
      </ThemedView>

      {favoriteTips.length === 0 ? (
        <ThemedView style={styles.emptyContainer}>
          <ThemedText style={styles.emptyIcon}>💔</ThemedText>
          <ThemedText style={styles.emptyText}>No favorites yet</ThemedText>
          <ThemedText style={styles.emptySubtext}>
            Start adding tips to your favorites!
          </ThemedText>
          <TouchableOpacity
            style={styles.browseButton}
            onPress={() => router.push('/(tabs)/categories')}
          >
            <ThemedText style={styles.browseButtonText}>Browse Categories</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      ) : (
        <ThemedView style={styles.tipsContainer}>
          {favoriteTips.map((tip) => (
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
                style={styles.removeButton}
                onPress={() => handleRemoveFavorite(tip.id)}
              >
                <ThemedText style={styles.removeIcon}>🗑️</ThemedText>
              </TouchableOpacity>
            </View>
          ))}
        </ThemedView>
      )}
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
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginTop: 100,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 30,
  },
  browseButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  browseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
  removeButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIcon: {
    fontSize: 24,
  },
});
