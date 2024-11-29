import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import SellingListScreen from "../screens/home/SellingListScreen";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SellingList" component={SellingListScreen} />
  </Stack.Navigator>
);

export default HomeStack;
