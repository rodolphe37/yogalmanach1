import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").height,
    resizeMode: "cover",
    // position: "absolute",
  },
});

export default styles;
