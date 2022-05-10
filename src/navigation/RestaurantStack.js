import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import {AddRestauranScreen} from "../screens/Restaurants/AddRestauranScreen"
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name={screen.restaurant.AddRestaurant}
        component={AddRestauranScreen}
        options={{ title: "Nuevo Restaurante" }}
      />
    </Stack.Navigator>
  );
}
