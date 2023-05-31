import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { StyleSheet, Dimensions, View } from "react-native";
import { Container } from "../../components/Container";
import { colors } from "../../styles/colors";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";
import api from "../../services/api";
import { Card } from "../../components/Card";

const id = 2;

const numberFormatter = Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
});

const mock = { y: 0, x: "" };

export const Grafico1 = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Grafico1">) => {
  const [title, setTitle] = React.useState("");
  const [data, setData] = React.useState([mock, mock, mock, mock]);
  
  React.useEffect(() => {
    api
      .get("https://sci01-ter-jne.ufca.edu.br/webapi/por_ugr.json")
      .then((response) => {
        setTitle(response.data[id].ugr);
        setData([
          { x: "Planejado", y: response.data[id].planejado },
          { x: "Empenhado", y: response.data[id].empenhado },
          { x: "A liquidar", y: response.data[id].aliquidar },
          { x: "Liquidado", y: response.data[id].liquidado },
        ]);
      });
  }, []);
 
  return (
    <Container>
      <View style={style.Content}>
        <Text style={style.Title}>{title}</Text>
        <View style={style.Chart}>
          <VictoryChart
            horizontal
            width={Dimensions.get("screen").width * 0.95}
            height={Dimensions.get("screen").height * 0.3}
            theme={VictoryTheme.material}
            padding={{
              left: 87,
              bottom: 20,
              top: 15,
              right: 100,
            }}
          >
            <VictoryAxis
              crossAxis
              style={{
                axis: {
                  stroke: colors.brown,
                  strokeWidth: 2,
                },
                tickLabels: {
                  fontSize: 13,
                  fill: colors.brown,
                },
                ticks: {
                  stroke: colors.brown,
                  size: 5,
                  strokeWidth: 2,
                },
              }}
              offsetX={84}
              domain={[0.6, 4.5]}
            />
            <VictoryBar
              style={{
                data: {
                  fill: colors.orange,
                  width: 20,
                },
              }}
              cornerRadius={{ top: 2 }}
              animate={{
                duration: 1000,
                onLoad: { duration: 1000 },
              }}
              labels={({ datum }: any) => {
                const value = "R$ " + numberFormatter.format(datum.y);
                return value;
              }}
              data={data}
              x="x"
              y="y"
              sortKey="y"
            />
          </VictoryChart>
        </View>
        <View style={style.Cards}>
          <Card
            title="Valor Planejado"
            content={"R$ " + numberFormatter.format(data[0].y)}
          />
          <Card
            title="Valor executado"
            content={"R$ " + numberFormatter.format(data[1].y)}
          />
        </View>
        <View style={style.Cards}>
          <Card
            title="A executar"
            content={"R$ " + numberFormatter.format(data[2].y)}
          />
          <Card
            title="Executado"
            content={
              data[0].y != 0
                ? ((data[1].y * 100) / data[0].y).toFixed(2) + " %"
                : "0.0 %"
            }
          />
        </View>
      </View>
    </Container>
  );
};

const style = StyleSheet.create({
  Title: {
    fontSize: 18,
    color: colors.brown,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  Content: {
    flex: 1,
    paddingTop: 10,
    justifyContentFlex: "start",
    alignItems: "center",
  },
  Chart: {
    paddingBottom: 20,
  },
  Cards: {
    flexDirection: "row",
  },
});
