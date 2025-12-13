import { StyleSheet, ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { mealSuggestions } from '@/data/tips';

export default function MealsScreen() {
  const breakfastMeals = mealSuggestions.filter((meal) => meal.mealType === 'breakfast');
  const lunchMeals = mealSuggestions.filter((meal) => meal.mealType === 'lunch');
  const dinnerMeals = mealSuggestions.filter((meal) => meal.mealType === 'dinner');

  const renderMealSection = (title: string, icon: string, meals: typeof mealSuggestions) => (
    <View style={styles.section}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        {icon} {title}
      </ThemedText>
      {meals.map((meal) => (
        <ThemedView key={meal.id} style={styles.mealCard}>
          <ThemedText type="defaultSemiBold" style={styles.mealTitle}>
            {meal.title}
          </ThemedText>
          <ThemedText style={styles.mealDescription}>{meal.description}</ThemedText>
          <View style={styles.foodsContainer}>
            {meal.foods.map((food, index) => (
              <View key={index} style={styles.foodTag}>
                <ThemedText style={styles.foodText}>{food}</ThemedText>
              </View>
            ))}
          </View>
        </ThemedView>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>🍽️ Meal Suggestions</ThemedText>
        <ThemedText style={styles.headerSubtitle}>Healthy meal ideas for every time of day</ThemedText>
      </ThemedView>

      {renderMealSection('Breakfast', '🌅', breakfastMeals)}
      {renderMealSection('Lunch', '☀️', lunchMeals)}
      {renderMealSection('Dinner', '🌙', dinnerMeals)}

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
  mealCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mealTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  mealDescription: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 15,
    lineHeight: 20,
  },
  foodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  foodTag: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  foodText: {
    fontSize: 13,
    color: '#4CAF50',
    fontWeight: '500',
  },
  spacer: {
    height: 30,
  },
});
