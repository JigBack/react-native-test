import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePressed = () => console.log("Clicked");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePressed}>
        Open up App.js to start working on your app!
      </Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableHighlight>
      <Button
        title="Test"
        onPress={() =>
          Alert.alert("Title", "Button Pressed", [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
            },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
        color="orange"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(50, 100, 150, 1.0)",
    alignItems: "center",
    justifyContent: "center",
  },
});
