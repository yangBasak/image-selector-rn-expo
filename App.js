import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
const initImage = require("./assets/init_nongdam.jpg");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer initImage={initImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="사진을 고르세용" />
        <Button label="이 사진 쓸래용" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
