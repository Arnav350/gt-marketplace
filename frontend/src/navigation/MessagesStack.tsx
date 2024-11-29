import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/messages/MessagesScreen";
import ChatScreen from "../screens/messages/ChatScreen";
import PaymentScreen from "../screens/messages/PaymentScreen";
import SquareScreen from "../screens/messages/SquareScreen";
import DeliveryScreen from "../screens/messages/DeliveryScreen";
import SummaryScreen from "../screens/messages/SummaryScreen";

const Stack = createStackNavigator();

const MessagesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Square" component={SquareScreen} />
    <Stack.Screen name="Delivery" component={DeliveryScreen} />
    <Stack.Screen name="Summary" component={SummaryScreen} />
  </Stack.Navigator>
);

export default MessagesStack;
