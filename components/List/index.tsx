import { StyleSheet, Text, View } from "react-native";
import { Button, List, MD3Colors } from "react-native-paper";
import { colors } from "../../styles/colors";

export const ListGraphics = () => (
  <List.Section style={styles.section}>
    <Button
      style={styles.item}
      icon="camera"
      mode="outlined"
      onPress={() => console.log("Pressed")}
    >
      Press me
    </Button>
    <List.Item
      title="Second Item"
      left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
    />
  </List.Section>
);

const styles = StyleSheet.create({
  section: {
    padding: 10,
  },
  item: {
    // borderRadius: 10,
    borderColor: colors.green,
    // borderWidth: 1
  },
});
