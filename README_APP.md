# 🍎 Healthy Food Tips App

A comprehensive React Native mobile application built with Expo that helps users make healthier food choices through evidence-based nutrition tips, meal suggestions, and health tracking tools.

## ✨ Features

### 1️⃣ Home Screen
- **Daily Healthy Food Tip**: Get a new nutrition tip every day
- **Motivational Health Quote**: Daily inspiration for healthy living
- **Beautiful Banner**: Visual appeal with fruit and vegetable emojis
- **Quick Water Tracker**: Log water intake directly from home
- **Quick Access**: Navigate to favorite sections easily

### 2️⃣ Categories Screen
Browse tips by health category:
- 🥗 **Weight Loss**: Tips for healthy weight management
- 💪 **Muscle Gain**: Protein and nutrition for muscle building
- 🫀 **Heart Health**: Cardiovascular health tips
- 🧠 **Brain Health**: Foods that support cognitive function
- 🍎 **General Nutrition**: Overall healthy eating guidance
- 🧒 **Kids Nutrition**: Nutrition tips for children

### 3️⃣ Tips List Screen
- View all tips within a selected category
- Short description preview for each tip
- One-tap favorite marking (❤️)
- Visual icons for easy identification

### 4️⃣ Tip Details Screen
Comprehensive information for each tip:
- Full detailed explanation
- List of health benefits
- When to consume (timing recommendations)
- Quantity recommendations
- Add/remove from favorites

### 5️⃣ Daily Reminders
- Enable/disable push notifications
- Choose reminder time (multiple presets available)
- Test notification feature
- Receive daily healthy eating reminders

### 6️⃣ Favorite Tips
- Save your favorite tips for quick access
- View all favorites in one place
- Easy removal with single tap
- Persistent storage using AsyncStorage

### 7️⃣ Meal Suggestions
Organized by meal type:
- 🌅 **Breakfast**: Energizing morning meal ideas
- ☀️ **Lunch**: Balanced midday meals
- 🌙 **Dinner**: Light evening meal suggestions

Each suggestion includes:
- Meal title and description
- List of food items
- Nutritional benefits

### 8️⃣ Water Intake Tracker
- Track daily water consumption
- Visual progress bar
- Daily goal tracking (8 glasses)
- Add glasses with one tap
- Reset functionality
- Hydration tips
- Automatic daily reset

### 9️⃣ About / Info Screen
- App purpose and mission
- Important medical disclaimer
- Feature list
- Version information

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository:
\`\`\`bash
cd HealthyFoodTipsApp
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npx expo start
\`\`\`

4. Run on your device:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## 📱 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **State Management**: React Hooks (useState, useEffect)
- **Local Storage**: @react-native-async-storage/async-storage
- **Notifications**: expo-notifications
- **Language**: TypeScript
- **Styling**: StyleSheet API

## 📁 Project Structure

\`\`\`
HealthyFoodTipsApp/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Tab navigation layout
│   │   ├── index.tsx             # Home screen
│   │   ├── categories.tsx        # Categories screen
│   │   ├── favorites.tsx         # Favorites screen
│   │   ├── meals.tsx             # Meal suggestions screen
│   │   └── more.tsx              # More/settings screen
│   ├── tip-details.tsx           # Tip details screen
│   └── tips-list.tsx             # Category tips list
├── components/
│   ├── themed-text.tsx           # Themed text component
│   ├── themed-view.tsx           # Themed view component
│   └── ui/                       # UI components
├── constants/
│   └── theme.ts                  # App theme constants
├── data/
│   └── tips.ts                   # Food tips data
├── types/
│   └── index.ts                  # TypeScript types
├── utils/
│   ├── storage.ts                # AsyncStorage utilities
│   └── notifications.ts          # Notification utilities
└── app.json                      # Expo configuration
\`\`\`

## 🎨 Design Features

- Clean and modern UI
- Intuitive navigation with bottom tabs
- Emoji-based visual design
- Color-coded categories
- Responsive layouts
- Light/dark theme support
- Smooth animations and transitions

## 📊 Data Storage

The app uses AsyncStorage to persist:
- Favorite tips
- Water intake count and date
- Notification preferences
- Notification timing

## 🔔 Notifications

The app includes a comprehensive notification system:
- Daily reminders at customizable times
- Multiple preset time options (8 AM, 9 AM, 12 PM, 2 PM, 6 PM, 8 PM)
- Test notification feature
- Proper permission handling for iOS and Android

## ⚠️ Disclaimer

This app provides general food and nutrition tips for informational purposes only. It is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider or registered dietitian before making significant changes to your diet, especially if you have any medical conditions or concerns.

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Development

To add more tips:
1. Open \`data/tips.ts\`
2. Add new entries to the \`foodTips\` array following the existing format
3. Ensure proper category assignment

To add new categories:
1. Update the \`Category\` type in \`types/index.ts\`
2. Add category info to \`categories\` array in \`data/tips.ts\`
3. Add tips with the new category

## 📱 Screenshots

The app features:
- Beautiful home screen with daily tips
- Category browsing with color-coded cards
- Detailed tip information
- Meal planning suggestions
- Water tracking with progress visualization
- Notification settings with time selection

## 🔮 Future Enhancements

Potential features for future versions:
- Recipe database
- Calorie tracking
- Meal planning calendar
- Shopping list generator
- Integration with fitness apps
- Social sharing features
- Multiple language support
- Custom meal creation

## 📞 Support

For issues or questions, please create an issue in the repository.

---

Made with ❤️ for healthier living
