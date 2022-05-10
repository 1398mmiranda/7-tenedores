import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen } from "../utils";
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { AccountStack } from "./AccountStack";
import { SearchStack } from "./SearchStack";

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tapBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name="screen.restaurant.tab"
        component={RestaurantStack}
        options={{ title: "Restuarantes" }}
      />

      <Tab.Screen
        name="screen.favorites.tab"
        component={FavoritesStack}
        options={{ title: " Favorites" }}
      />
      <Tab.Screen
        name="screen.ranking.tab"
        component={RankingStack}
        options={{ title: " Ranking" }}
      />
      <Tab.Screen
        name="screen.account.tab"
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name="screen.search.tab"
        component={SearchStack}
        options={{ title: " Buscar" }}
      />
    </Tab.Navigator>
  );
}
function screenOptions(route, color, size) {
  let iconName;

  if (route.name === "screen.restaurant.tab") {
    iconName = "compass-outline";
  }
  if (route.name === "screen.favorites.tab") {
    iconName = "heart-outline";
  }
  if (route.name === "screen.ranking.tab") {
    iconName = "star-outline";
  }
  if (route.name === "screen.account.tab") {
    iconName = "home-outline";
  }
  if (route.name === "screen.search.tab") {
    iconName = "magnify";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
