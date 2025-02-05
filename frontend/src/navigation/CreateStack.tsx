import { createStackNavigator } from "@react-navigation/stack";
import CreateScreen from "../screens/create/CreateScreen";

const Stack = createStackNavigator();

const CreateStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Create" component={CreateScreen} />
  </Stack.Navigator>
);

export default CreateStack;
