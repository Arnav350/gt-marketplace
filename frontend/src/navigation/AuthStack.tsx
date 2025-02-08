import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/auth/RegisterScreen";
import RegisterProfileScreen from "../screens/auth/RegisterProfileScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import { TAuthStackParamsList } from "../constants/types";

const Stack = createStackNavigator<TAuthStackParamsList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="RegisterProfile" component={RegisterProfileScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </Stack.Navigator>
);

export default AuthStack;
