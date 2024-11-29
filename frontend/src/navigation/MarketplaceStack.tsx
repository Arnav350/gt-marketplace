import { createStackNavigator } from "@react-navigation/stack";
import MarketplaceScreen from "../screens/marketplace/MarketplaceScreen";
import ItemBuyScreen from "../screens/marketplace/ItemBuyScreen";
import ItemSellScreen from "../screens/marketplace/ItemSellScreen";
import SavedItemsScreen from "../screens/marketplace/SavedItemsScreen";

const Stack = createStackNavigator();

const MarketplaceStack = () => (
  <Stack.Navigator screenOptions={{ animation: "none", headerShown: false, detachPreviousScreen: true }}>
    <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
    <Stack.Screen name="ItemBuy" component={ItemBuyScreen} />
    <Stack.Screen name="ItemSell" component={ItemSellScreen} />
    <Stack.Screen name="SavedItems" component={SavedItemsScreen} />
  </Stack.Navigator>
);

export default MarketplaceStack;
