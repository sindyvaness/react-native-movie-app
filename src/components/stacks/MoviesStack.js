import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/MoviesScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const MoviesStack = () => (
<Stack.Navigator>
        <Stack.Screen
            name='Movies'
            component={MoviesScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
        name='Show'
        component={ShowScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: "Back to List"
        })}
      />
    </Stack.Navigator>
);

export default MoviesStack;