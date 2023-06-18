import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Button, List, MD3Colors } from "react-native-paper";
import { colors } from "../../styles/colors";
import React from "react";
import api from "../../services/api";
import { Container } from "../../components/Container";

export const Menu = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Orçamentos">) => {
  const [loading, setLoading] = React.useState(true);
  const [values_units, setValuesUnit] = React.useState<
    {
      aliquidar: number;
      empenhado: number;
      planejado: number;
      liquidado: number;
      saldo: number;
      ugr: string;
    }[]
  >([]);

  React.useEffect(() => {
    setLoading(true);
    (async function () {
      await api
        .get("https://sci01-ter-jne.ufca.edu.br/webapi/por_ugr.json")
        .then((response) => {
          setValuesUnit(response.data);
          setLoading(false);
        });
    })();
  }, []);
  return (
    <Container>
        <List.Section style={styles.section}>
            <Button
              style={styles.item}
              // icon="chart-line"
              mode="outlined"
              onPress={() => {
                navigation.navigate("OrçamentoUnidades");
              }}
            >
                Unidades
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Objetivo Estratégico de PDI 2025
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Diretriz Orçamentária
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Programa
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Geral
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Específicas
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Programa do PPA
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Ação Orçamentária
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Plano Orçamentário
            </Button>
            <Button
              style={styles.itemDisabled}
              mode="outlined"
              disabled
            >
                Grupo de Despesas
            </Button>
        </List.Section>

    </Container>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingTop: 20,
    paddingBottom:0,
    minHeight: Dimensions.get("screen").height * 0.55,
    display: "flex",
    justifyContent: "center",
  },
  item: {
    marginVertical: 10,
    // borderRadius: 10,
    borderColor: colors.lightBrown,
    // borderWidth: 1
  },
  itemDisabled: {
    marginVertical: 10,
  },
  loading: {
    display: "flex",
    paddingTop: Dimensions.get("screen").height * 0.15,
    alignItems: "center",
    justifyContent: "center",
  },
});
