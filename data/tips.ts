import { FoodTip, CategoryInfo, MealSuggestion, DailyQuote } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    icon: '🥗',
    color: '#4CAF50',
  },
  {
    id: 'muscle-gain',
    name: 'Muscle Gain',
    icon: '💪',
    color: '#FF9800',
  },
  {
    id: 'heart-health',
    name: 'Heart Health',
    icon: '🫀',
    color: '#F44336',
  },
  {
    id: 'brain-health',
    name: 'Brain Health',
    icon: '🧠',
    color: '#9C27B0',
  },
  {
    id: 'general-nutrition',
    name: 'General Nutrition',
    icon: '🍎',
    color: '#2196F3',
  },
  {
    id: 'kids-nutrition',
    name: 'Kids Nutrition',
    icon: '🧒',
    color: '#FF5722',
  },
];

export const foodTips: FoodTip[] = [
  // Weight Loss
  {
    id: 'wl-1',
    category: 'weight-loss',
    title: 'Drink Water Before Meals',
    shortDescription: 'Drinking water 30 minutes before meals can boost weight loss',
    fullExplanation: 'Studies show that drinking water before meals can increase feelings of fullness and reduce calorie intake. This simple habit can lead to consuming fewer calories during meals and support your weight loss goals.',
    benefits: [
      'Increases feelings of fullness',
      'Reduces calorie intake during meals',
      'Boosts metabolism temporarily',
      'Helps prevent overeating'
    ],
    whenToEat: '30 minutes before each meal',
    quantityRecommendation: '1-2 glasses (250-500ml)',
    icon: '💧',
  },
  {
    id: 'wl-2',
    category: 'weight-loss',
    title: 'Eat More Leafy Vegetables',
    shortDescription: 'Low in calories but high in nutrients and fiber',
    fullExplanation: 'Leafy greens like spinach, kale, and lettuce are incredibly nutrient-dense and low in calories. They are high in fiber which helps you feel full longer and supports healthy digestion.',
    benefits: [
      'Very low in calories',
      'High in fiber for satiety',
      'Rich in vitamins and minerals',
      'Supports digestive health'
    ],
    whenToEat: 'Lunch and dinner',
    quantityRecommendation: 'At least 2-3 cups daily',
    icon: '🥬',
  },
  {
    id: 'wl-3',
    category: 'weight-loss',
    title: 'Avoid Sugary Drinks',
    shortDescription: 'Cut out liquid calories for faster weight loss',
    fullExplanation: 'Sugary drinks like soda, sweetened tea, and fruit juices are loaded with empty calories. They don\'t make you feel full but add significant calories to your daily intake. Eliminating them is one of the easiest ways to reduce calorie consumption.',
    benefits: [
      'Reduces empty calorie intake',
      'Prevents blood sugar spikes',
      'Better hydration',
      'Improved dental health'
    ],
    whenToEat: 'Replace with water throughout the day',
    quantityRecommendation: 'Zero sugary drinks, drink water instead',
    icon: '🚫',
  },
  
  // Muscle Gain
  {
    id: 'mg-1',
    category: 'muscle-gain',
    title: 'Eat Protein with Every Meal',
    shortDescription: 'Protein is essential for muscle growth and repair',
    fullExplanation: 'Consuming adequate protein throughout the day helps maximize muscle protein synthesis. Distribute your protein intake across all meals to maintain a positive protein balance for muscle growth.',
    benefits: [
      'Supports muscle growth and repair',
      'Increases satiety',
      'Maintains lean muscle mass',
      'Boosts metabolism'
    ],
    whenToEat: 'With every meal (breakfast, lunch, dinner) and snacks',
    quantityRecommendation: '20-40g per meal, depending on body weight',
    icon: '🍗',
  },
  {
    id: 'mg-2',
    category: 'muscle-gain',
    title: 'Post-Workout Nutrition',
    shortDescription: 'Refuel muscles within 30-60 minutes after training',
    fullExplanation: 'The post-workout window is crucial for muscle recovery. Consuming protein and carbohydrates after exercise helps replenish glycogen stores and provides amino acids for muscle repair.',
    benefits: [
      'Accelerates muscle recovery',
      'Replenishes energy stores',
      'Reduces muscle soreness',
      'Maximizes training adaptations'
    ],
    whenToEat: 'Within 30-60 minutes post-workout',
    quantityRecommendation: '20-30g protein + 30-50g carbohydrates',
    icon: '🏋️',
  },
  
  // Heart Health
  {
    id: 'hh-1',
    category: 'heart-health',
    title: 'Eat Omega-3 Rich Fish',
    shortDescription: 'Fatty fish protect your heart and reduce inflammation',
    fullExplanation: 'Fatty fish like salmon, mackerel, and sardines are rich in omega-3 fatty acids, which have been shown to reduce the risk of heart disease, lower blood pressure, and decrease inflammation.',
    benefits: [
      'Reduces risk of heart disease',
      'Lowers blood pressure',
      'Decreases inflammation',
      'Improves cholesterol levels'
    ],
    whenToEat: 'Lunch or dinner',
    quantityRecommendation: '2-3 servings (100-150g each) per week',
    icon: '🐟',
  },
  {
    id: 'hh-2',
    category: 'heart-health',
    title: 'Reduce Sodium Intake',
    shortDescription: 'Less salt means better blood pressure control',
    fullExplanation: 'High sodium intake is linked to elevated blood pressure and increased risk of heart disease. Reducing salt in your diet can significantly improve cardiovascular health.',
    benefits: [
      'Lowers blood pressure',
      'Reduces heart disease risk',
      'Decreases water retention',
      'Protects kidney function'
    ],
    whenToEat: 'All meals',
    quantityRecommendation: 'Less than 2,300mg sodium per day (about 1 teaspoon salt)',
    icon: '🧂',
  },
  
  // Brain Health
  {
    id: 'bh-1',
    category: 'brain-health',
    title: 'Eat Blueberries Daily',
    shortDescription: 'Antioxidant powerhouses that boost brain function',
    fullExplanation: 'Blueberries are packed with antioxidants that may delay brain aging and improve memory. They contain flavonoids that have been shown to enhance cognitive function.',
    benefits: [
      'Improves memory and cognition',
      'Protects brain from oxidative stress',
      'May delay brain aging',
      'Supports learning and focus'
    ],
    whenToEat: 'Breakfast or as a snack',
    quantityRecommendation: '1/2 to 1 cup daily',
    icon: '🫐',
  },
  {
    id: 'bh-2',
    category: 'brain-health',
    title: 'Include Nuts in Your Diet',
    shortDescription: 'Healthy fats and vitamin E for brain health',
    fullExplanation: 'Nuts, especially walnuts and almonds, are rich in omega-3 fatty acids, vitamin E, and antioxidants that support brain health and may improve cognitive function.',
    benefits: [
      'Supports cognitive function',
      'Rich in brain-healthy fats',
      'Provides vitamin E for brain protection',
      'May reduce cognitive decline'
    ],
    whenToEat: 'As a snack or with breakfast',
    quantityRecommendation: 'A small handful (28g) daily',
    icon: '🥜',
  },
  
  // General Nutrition
  {
    id: 'gn-1',
    category: 'general-nutrition',
    title: 'Drink 8 Glasses of Water Daily',
    shortDescription: 'Proper hydration is essential for overall health',
    fullExplanation: 'Water is crucial for nearly every bodily function. Staying properly hydrated supports digestion, nutrient absorption, temperature regulation, and overall health.',
    benefits: [
      'Supports all bodily functions',
      'Aids digestion and nutrient absorption',
      'Regulates body temperature',
      'Improves skin health and energy levels'
    ],
    whenToEat: 'Throughout the day',
    quantityRecommendation: '8 glasses (2 liters) minimum daily',
    icon: '💧',
  },
  {
    id: 'gn-2',
    category: 'general-nutrition',
    title: 'Eat a Rainbow of Fruits',
    shortDescription: 'Different colors provide different nutrients',
    fullExplanation: 'Eating fruits of various colors ensures you get a wide range of vitamins, minerals, and antioxidants. Each color represents different beneficial compounds.',
    benefits: [
      'Provides diverse nutrients',
      'Rich in antioxidants',
      'Supports immune system',
      'Reduces disease risk'
    ],
    whenToEat: 'Throughout the day, especially with breakfast and snacks',
    quantityRecommendation: '2-3 servings of varied fruits daily',
    icon: '🍎',
  },
  
  // Kids Nutrition
  {
    id: 'kn-1',
    category: 'kids-nutrition',
    title: 'Make Vegetables Fun',
    shortDescription: 'Creative presentation encourages kids to eat veggies',
    fullExplanation: 'Children are more likely to eat vegetables when they\'re presented in fun, creative ways. Cut them into shapes, create colorful plates, or let kids help prepare them.',
    benefits: [
      'Increases vegetable consumption',
      'Provides essential nutrients for growth',
      'Establishes healthy eating habits',
      'Supports immune system'
    ],
    whenToEat: 'Lunch and dinner',
    quantityRecommendation: '3-5 child-sized servings daily',
    icon: '🥕',
  },
  {
    id: 'kn-2',
    category: 'kids-nutrition',
    title: 'Healthy Snacks for Kids',
    shortDescription: 'Choose nutritious snacks over processed foods',
    fullExplanation: 'Replace chips and cookies with healthier options like fruit, yogurt, cheese, or whole-grain crackers. These provide sustained energy and important nutrients for growing children.',
    benefits: [
      'Provides sustained energy',
      'Supports growth and development',
      'Prevents unhealthy weight gain',
      'Establishes good eating habits'
    ],
    whenToEat: 'Between meals as snacks',
    quantityRecommendation: '1-2 healthy snacks per day',
    icon: '🍌',
  },
];

export const dailyQuotes: DailyQuote[] = [
  { id: '1', quote: 'Your body is a temple, but only if you treat it as one.', author: 'Astrid Alauda' },
  { id: '2', quote: 'Take care of your body. It\'s the only place you have to live.', author: 'Jim Rohn' },
  { id: '3', quote: 'Let food be thy medicine and medicine be thy food.', author: 'Hippocrates' },
  { id: '4', quote: 'The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.', author: 'Ann Wigmore' },
  { id: '5', quote: 'A healthy outside starts from the inside.' },
  { id: '6', quote: 'You don\'t have to eat less, you just have to eat right.' },
  { id: '7', quote: 'Health is not about the weight you lose, but about the life you gain.' },
  { id: '8', quote: 'The greatest wealth is health.', author: 'Virgil' },
];

export const mealSuggestions: MealSuggestion[] = [
  {
    id: 'b-1',
    mealType: 'breakfast',
    title: 'Energizing Oatmeal Bowl',
    foods: ['Oats', 'Banana', 'Berries', 'Nuts', 'Honey'],
    description: 'A fiber-rich breakfast that provides sustained energy throughout the morning.',
  },
  {
    id: 'b-2',
    mealType: 'breakfast',
    title: 'Protein-Packed Eggs',
    foods: ['Eggs', 'Whole Grain Toast', 'Avocado', 'Cherry Tomatoes'],
    description: 'High-protein breakfast to keep you full and build muscle.',
  },
  {
    id: 'b-3',
    mealType: 'breakfast',
    title: 'Greek Yogurt Parfait',
    foods: ['Greek Yogurt', 'Granola', 'Mixed Berries', 'Honey'],
    description: 'Rich in protein and probiotics for gut health.',
  },
  {
    id: 'l-1',
    mealType: 'lunch',
    title: 'Balanced Power Bowl',
    foods: ['Brown Rice', 'Grilled Chicken', 'Mixed Vegetables', 'Olive Oil'],
    description: 'A complete meal with protein, complex carbs, and nutrients.',
  },
  {
    id: 'l-2',
    mealType: 'lunch',
    title: 'Hearty Salad',
    foods: ['Leafy Greens', 'Quinoa', 'Chickpeas', 'Vegetables', 'Olive Oil Dressing'],
    description: 'Light yet filling with plant-based protein and fiber.',
  },
  {
    id: 'l-3',
    mealType: 'lunch',
    title: 'Fish & Veggies',
    foods: ['Grilled Salmon', 'Sweet Potato', 'Steamed Broccoli', 'Lemon'],
    description: 'Omega-3 rich meal great for heart and brain health.',
  },
  {
    id: 'd-1',
    mealType: 'dinner',
    title: 'Lean Protein Dinner',
    foods: ['Grilled Chicken/Fish', 'Quinoa', 'Roasted Vegetables', 'Side Salad'],
    description: 'Light dinner that won\'t disrupt sleep but provides nutrients.',
  },
  {
    id: 'd-2',
    mealType: 'dinner',
    title: 'Vegetarian Delight',
    foods: ['Lentil Curry', 'Brown Rice', 'Spinach', 'Yogurt'],
    description: 'Plant-based dinner rich in protein and fiber.',
  },
  {
    id: 'd-3',
    mealType: 'dinner',
    title: 'Mediterranean Bowl',
    foods: ['Whole Grain Pasta', 'Tomato Sauce', 'Vegetables', 'Lean Meat/Tofu'],
    description: 'Heart-healthy dinner inspired by Mediterranean diet.',
  },
];
