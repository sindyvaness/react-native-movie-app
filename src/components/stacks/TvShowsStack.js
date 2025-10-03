import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TvShowsScreen from "../screens/TvShowsScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const TvShowsStack = () => (
<Stack.Navigator>
        <Stack.Screen
            name='TV Shows'
            component={TvShowsScreen}
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

export default TvShowsStack;