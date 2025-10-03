import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/MoviesScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const SearchResultStack = () => (
<Stack.Navigator>
        <Stack.Screen
            name='Search'
            component={SearchResultScreen}
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

export default SearchResultStack;