import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function RestaurantsScreen(props) {
  const { navigation } = props;

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.AddRestaurant);
    // navigation.navigate(screen.account.tab, { screen: Account.Account });
  };
  return (
    <View>
      <Text>estamos en RestaurantsScreen</Text>

      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
}
