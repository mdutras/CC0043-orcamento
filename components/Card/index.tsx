import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button, List, MD3Colors } from "react-native-paper";
import { colors } from "../../styles/colors";
import { Container } from "../Container";

export const Card = ({...props}) => {
  return (
    <View style={styles.Container}>
      {/* CARDZINHO */}
      <Text style={styles.Title}>
        {props.title}
      </Text>
      <Text style={styles.content}>
        {props.content}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  Container: {
    width: Dimensions.get("screen").width * 0.40,
    height: Dimensions.get("screen").height*0.12,
    borderRadius: 10,
    backgroundColor: colors.yellow,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.brown,
  },
  content: {
    fontSize: 15,
    fontWeight: "400",
    color: colors.brown,
  }
});
