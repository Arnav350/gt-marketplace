import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/profile/ProfileScreen";
import SettingsScreen from "../screens/profile/SettingsScreen";
import ReportScreen from "../screens/profile/ReportScreen";
import HistoryScreen from "../screens/profile/HistoryScreen";
import TransactionScreen from "../screens/profile/TransactionScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";
import EditPaymentScreen from "../screens/profile/EditPaymentScreen";
import EditDeliveryScreen from "../screens/profile/EditDeliveryScreen";
import NotificationsScreen from "../screens/profile/NotificationsScreen";
import HelpScreen from "../screens/profile/HelpScreen";
import FaqScreen from "../screens/profile/FaqScreen";
import TermsScreen from "../screens/profile/TermsScreen";
import PrivacyScreen from "../screens/profile/PrivacyScreen";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Report" component={ReportScreen} />
    <Stack.Screen name="History" component={HistoryScreen} />
    <Stack.Screen name="Transaction" component={TransactionScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="EditPayment" component={EditPaymentScreen} />
    <Stack.Screen name="EditDelivery" component={EditDeliveryScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="Faq" component={FaqScreen} />
    <Stack.Screen name="Terms" component={TermsScreen} />
    <Stack.Screen name="Privacy" component={PrivacyScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
