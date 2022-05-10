import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import {AddRestauranScreen} from "../screens/Restaurants/AddRestauranScreen"
import {FavoritesScreen } from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export function FavoritesStack() {
  return (
    <Stack.Navigator>
     
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoritesScreen }
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}
