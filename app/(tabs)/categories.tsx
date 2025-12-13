import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { categories } from '@/data/tips';

export default function CategoriesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>Categories</ThemedText>
        <ThemedText style={styles.headerSubtitle}>Browse tips by health category</ThemedText>
      </ThemedView>

      <ThemedView style={styles.grid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.categoryCard, { borderLeftColor: category.color }]}
            onPress={() => router.push(`/tips-list?category=${category.id}` as any)}
          >
            <ThemedText style={styles.categoryIcon}>{category.icon}</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.categoryName}>
              {category.name}
            </ThemedText>
          </TouchableOpacity>
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
  headerTitle: {
    fontSize: 28,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  grid: {
    padding: 20,
    gap: 15,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 6,
  },
  categoryIcon: {
    fontSize: 40,
    marginRight: 20,
  },
  categoryName: {
    fontSize: 18,
  },
});
