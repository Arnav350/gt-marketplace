import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import MarketplaceScreen from '../screens/MarketplaceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import SearchItemsScreen from '../screens/SearchItemsScreen';
import AddItemScreen from '../screens/AddItemScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import ItemRequestsScreen from '../screens/ItemRequestsScreen';
import SavedItemsScreen from '../screens/SavedItemsScreen';
import NotificationsSettingsScreen from '../screens/NotificationsSettingsScreen';
import EditDeliveryAddressScreen from '../screens/EditDeliveryAddressScreen';
import ReportScreen from '../screens/ReportScreen';
import HelpScreen from '../screens/HelpScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SummaryScreen from '../screens/SummaryScreen';
import HistoryScreen from '../screens/HistoryScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ContactBuyerSellerScreen from '../screens/ContactBuyerSellerScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stacks
const MarketplaceStack = () => (
  <Stack.Navigator screenOptions={{animation: 'none', headerShown: false, detachPreviousScreen: true }}>
    <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
    <Stack.Screen name="SearchItems" component={SearchItemsScreen} />
    <Stack.Screen name="AddItem" component={AddItemScreen} />
    <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
    <Stack.Screen name="ItemRequests" component={ItemRequestsScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileHome" component={ProfileScreen} />
    <Stack.Screen name="SavedItems" component={SavedItemsScreen} />
    <Stack.Screen name="NotificationsSettings" component={NotificationsSettingsScreen} />
    <Stack.Screen name="EditDeliveryAddress" component={EditDeliveryAddressScreen} />
    <Stack.Screen name="Report" component={ReportScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
  </Stack.Navigator>
);


const MessagesStack = () => (
<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MessagesHome" component={MessagesScreen} />
    <Stack.Screen name="ContactBuyerSeller" component={ContactBuyerSellerScreen} />
  </Stack.Navigator>
);

const DeliveryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DeliveryHome" component={DeliveryScreen} />
    <Stack.Screen name="Summary" component={SummaryScreen} />
    <Stack.Screen name="History" component={HistoryScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Loading" component={LoadingScreen} />
  </Stack.Navigator>
);




const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Marketplace"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const routeToIconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
          Marketplace: 'storefront-outline',
          Profile: 'person-outline',
          Messages: 'chatbubbles-outline',
          Delivery: 'car-outline',
        };

        const iconName = routeToIconMap[route.name];
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Marketplace" component={MarketplaceStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
    <Tab.Screen name="Messages" component={MessagesStack} />
    <Tab.Screen name="Delivery" component={DeliveryStack} />
  </Tab.Navigator>
);

export default TabNavigator;