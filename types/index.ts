export type Category = 
  | 'weight-loss'
  | 'muscle-gain'
  | 'heart-health'
  | 'brain-health'
  | 'general-nutrition'
  | 'kids-nutrition';

export interface FoodTip {
  id: string;
  category: Category;
  title: string;
  shortDescription: string;
  fullExplanation: string;
  benefits: string[];
  whenToEat: string;
  quantityRecommendation: string;
  icon: string;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: string;
  color: string;
}

export interface MealSuggestion {
  id: string;
  mealType: 'breakfast' | 'lunch' | 'dinner';
  title: string;
  foods: string[];
  description: string;
}

export interface DailyQuote {
  id: string;
  quote: string;
  author?: string;
}
