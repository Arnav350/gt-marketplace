import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketplaceScreen from '../screens/MarketplaceScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import AddItemScreen from '../screens/AddItemScreen';
import HelpScreen from '../screens/HelpScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import SummaryScreen from '../screens/SummaryScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ItemRequestsScreen from '../screens/ItemRequestsScreen';
import SavedItemsScreen from '../screens/SavedItemsScreen';
import ReportScreen from '../screens/ReportScreen';
import NotificationsSettingsScreen from '../screens/NotificationsSettingsScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import SearchItemsScreen from '../screens/SearchItemsScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import EditDeliveryAddressScreen from '../screens/EditDeliveryAddressScreen';
import PaymentScreen from '../screens/PaymentScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ContactBuyerSellerScreen from '../screens/ContactBuyerSellerScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Marketplace">
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="ItemRequests" component={ItemRequestsScreen} />
        <Stack.Screen name="SavedItems" component={SavedItemsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="NotificationsSettings" component={NotificationsSettingsScreen} />
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="SearchItems" component={SearchItemsScreen} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
        <Stack.Screen name="EditDeliveryAddress" component={EditDeliveryAddressScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="ContactBuyerSeller" component={ContactBuyerSellerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
