import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ initImage }) {
  return <Image source={initImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
