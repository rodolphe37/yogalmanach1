import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      {/*<Image
        style={styles.lotus}
        source={require("../../assets/images/blue-lotus.png")}
      />
      <Image
        style={styles.logo}
        source={require("../../assets/images/y.png")}
      />
      <Text style={styles.logoText1}>og</Text>
      <Image
        style={styles.logo2}
        source={require("../../assets/images/a.png")}
      />
      <Text style={styles.logoText2}>lmanach</Text>*/}
      <Image
        style={styles.menu}
        source={require("../../assets/images/menu.png")}
      />
    </View>
  );
};

export default Header;
