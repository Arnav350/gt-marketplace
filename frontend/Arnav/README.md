# React Native Todo App

A todo list app built with React Native and Expo, created to keep track of tasks with CRUD operations.

## Features

- **Create** new todos with titles
- **Mark** todos as complete/incomplete
- **Edit** todo titles by tapping on them
- **Delete** todos easily
- **Persistent storage**: Saves tasks to device storage automatically
- **Error handling**: Prevents empty inputs

## Todo Structure
- Unique ID (auto-generated)
- Title (required)
- Completion Status (boolean)
- Timestamp (auto-generated)

Data is stored on the device using AsyncStorage, so tasks persist between sessions.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-native-todo-app.git
   cd react-native-todo-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Expo CLI** (if you haven't already):
   ```bash
   npm install -g expo-cli
   ```

4. **Install AsyncStorage** for data persistence:
   ```bash
   npm install @react-native-async-storage/async-storage
   ```

5. **Run the app**:
   ```bash
   npm run start
   ```