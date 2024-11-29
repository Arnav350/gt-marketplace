import { createStackNavigator } from "@react-navigation/stack";
import CreateItemScreen from "../screens/create/CreateItemScreen";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Create" component={CreateItemScreen} />
  </Stack.Navigator>
);

export default HomeStack;
