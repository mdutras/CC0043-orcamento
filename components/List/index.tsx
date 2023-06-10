import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button, List, MD3Colors } from "react-native-paper";
import { colors } from "../../styles/colors";
import { Container } from "../Container";

export const ListGraphics = ({navigation}: NativeStackScreenProps<RootStackParamList, 'Orçamentos'>) => (
  <Container>
  <List.Section style={styles.section}>
    <Button
      style={styles.item}
      icon="chart-line"
      mode="outlined"
      onPress={() => navigation.navigate('Grafico1')}
    >
      Press me
    </Button>

    <Button
      style={styles.item}
      icon="chart-areaspline"
      mode="outlined"
      onPress={() => navigation.navigate('Grafico1')}
    >
      Press me2
    </Button>

    <Button
      style={styles.item}
      icon="chart-arc"
      mode="outlined"
      onPress={() => navigation.navigate('loginPage')}
    >
      Press me3
    </Button>
  </List.Section>
  </Container>
);

const styles = StyleSheet.create({
  section: {
    padding: 10,
    height: Dimensions.get("screen").height * 0.55,
    display: "flex",
    justifyContent: 'center',
  },
  item: {
    marginVertical: 10,
    // borderRadius: 10,
    borderColor: colors.lightBrown,
    // borderWidth: 1
  },
});
