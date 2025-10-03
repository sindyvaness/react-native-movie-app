import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MoviesStack from "../stacks/MoviesStack";
import SearchResultStack from "../stacks/SearchResultStack";
import TvShowsStack from "../stacks/TvShowsStack";

const Tab = createMaterialTopTabNavigator();

const AppTopTabs = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle: { backgroundColor: "#2c3e50" },
        tabBarIndicatorStyle: { backgroundColor: "#fff" },
        safeAreaInsets: { top: 0, bottom: 0 }
      }}
    >
      <Tab.Screen name="Movies" component={MoviesStack} />
      <Tab.Screen name="Search Result" component={SearchResultStack} />
      <Tab.Screen name="TV Shows" component={TvShowsStack} />
      
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppTopTabs;
