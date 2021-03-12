import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    // backgroundColor: "rgba(255,255,255,0.5)",
    paddingVertical: 15,
  },
  logo: {
    width: 100,
    height: 55,
    resizeMode: "contain",
    marginLeft: 39,
  },
  logoText1: {
    fontSize: 28,
    marginTop: 10,
    marginLeft: -125,
  },
  logo2: {
    width: 100,
    height: 55,
    resizeMode: "contain",
    marginLeft: -110,
  },
  logoText2: {
    fontSize: 28,
    marginTop: 10,
    marginLeft: -110,
  },
  lotus: {
    width: 100,
    height: 95,
    resizeMode: "contain",
    position: "absolute",
    left: 0,
    top: -5,
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginTop: -22,
  },
});

export default styles;
