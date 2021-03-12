import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "./styles";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/couverture-face-tome1-debutants.png")}
        style={styles.image}
      />
    </View>
  );
};

export default HomePage;
