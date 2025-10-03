import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/MoviesScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name='Movies'
            component={MoviesScreen}
            options={{
                title: 'Movies',
                headerStyle: { backgroundColor: '#2c3e50' },
                headerTitleStyle: { color: '#fff' }
            }}
        />

        <Stack.Screen
            name='Search'
            component={SearchResultScreen}
            options={{
                title: 'Search',
                headerStyle: { backgroundColor: '#2c3e50' },
                headerTitleStyle: { color: '#fff' }
            }}
        />
    </Stack.Navigator>

</NavigationContainer>
);

export default AppStack;