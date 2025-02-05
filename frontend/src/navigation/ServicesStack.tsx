import { createStackNavigator } from "@react-navigation/stack";
import ServicesScreen from "../screens/services/ServicesScreen";

const Stack = createStackNavigator();

const ServicesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Services" component={ServicesScreen} />
  </Stack.Navigator>
);

export default ServicesStack;
