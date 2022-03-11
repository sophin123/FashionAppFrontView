import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  });
