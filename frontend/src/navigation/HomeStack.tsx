import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import MarketplaceScreen from "../screens/home/ExploreScreen";
import ItemScreen from "../screens/home/ItemScreen";
import SellingListScreen from "../screens/home/SellingListScreen";
import WishlistScreen from "../screens/home/WishlistScreen";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
    <Stack.Screen name="Item" component={ItemScreen} />
    <Stack.Screen name="SellingList" component={SellingListScreen} />
    <Stack.Screen name="Wishlist" component={WishlistScreen} />
  </Stack.Navigator>
);

export default HomeStack;
