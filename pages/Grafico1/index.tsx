import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { StyleSheet, Dimensions, View } from "react-native";
import { Container } from "../../components/Container";
import { colors } from "../../styles/colors";
import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Card } from "../../components/Card"; 


const dados = [
	{
		id: 156286,
		ugr: 'AUDIN',
		planejado: 8850.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156279,
		ugr: 'CEAPE',
		planejado: 241718.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156294,
		ugr: 'DIARI',
		planejado: 432740.0,
		empenhado: 256704.24,
		aliquidar: 178030.91,
		liquidado: 78673.33
	},
	{
		id: 156278,
		ugr: 'DCOM',
		planejado: 152960.0,
		empenhado: 10620.0,
		aliquidar: 10620.0,
		liquidado: 0.0
	},
	{
		id: 156296,
		ugr: 'DINFRA',
		planejado: 6337206.0,
		empenhado: 2788352.8999999999,
		aliquidar: 2202953.2999999998,
		liquidado: 585399.6
	},
	{
		id: 156297,
		ugr: "DLA",
		planejado: 508251.0,
		empenhado: 529329.5800000001,
		aliquidar: 380071.52,
		liquidado: 149258.06
	},
	{
		id: 156295,
		ugr: "DTI",
		planejado: 1732082.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156298,
		ugr: "SIBI",
		planejado: 640031.0,
		empenhado: 9795.42,
		aliquidar: 9795.42,
		liquidado: 0.0
	},
	{
		id: 155114,
		ugr: "GR",
		planejado: 167550.0,
		empenhado: 351603.42,
		aliquidar: 75580.39,
		liquidado: 276023.03
	},
	{
		id: 156288,
		ugr: "OUVIDORIA",
		planejado: 0.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156287,
		ugr: "PROCURADORIA",
		planejado: 0.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156310,
		ugr: "PROAD",
		planejado: 4645755.0,
		empenhado: 4501931.4000000004,
		aliquidar: 3599579.5499999998,
		liquidado: 902351.85
	},
	{
		id: 156276,
		ugr: "PRAE",
		planejado: 7029129.0,
		empenhado: 5589201.0500000007,
		aliquidar: 4063528.4199999999,
		liquidado: 1525672.6299999999
	},
	{
		id: 155119,
		ugr: "PROCULT",
		planejado: 711699.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 155118,
		ugr: "PROEX",
		planejado: 717686.0,
		empenhado: 664200.0,
		aliquidar: 659400.0,
		liquidado: 4800.0
	},
	{
		id: 155135,
		ugr: "PROGEP",
		planejado: 760061.0,
		empenhado: 299200.0,
		aliquidar: 291726.04,
		liquidado: 7473.96
	},
	{
		id: 155116,
		ugr: "PROGRAD",
		planejado: 1014525.0,
		empenhado: 812004.0,
		aliquidar: 714004.0,
		liquidado: 98000.0
	},
	{
		id: 155120,
		ugr: "PRPI",
		planejado: 888578.0,
		empenhado: 243855.0,
		aliquidar: 90655.0,
		liquidado: 153200.0
	},
	{
		id: 156066,
		ugr: "PROPLAN",
		planejado: 81500.0,
		empenhado: 254.59,
		aliquidar: 0.0,
		liquidado: 254.59
	},
	{
		id: 156290,
		ugr: "SEACE",
		planejado: 320611.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156292,
		ugr: "SCI",
		planejado: 137091.0,
		empenhado: 111960.0,
		aliquidar: 74640.0,
		liquidado: 37320.0
	},
	{
		id: 156291,
		ugr: "SEDOP",
		planejado: 0.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156293,
		ugr: "SEPAD",
		planejado: 0.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156289,
		ugr: "SEODS",
		planejado: 0.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156334,
		ugr: "CCAB",
		planejado: 30829.0,
		empenhado: 15250.0,
		aliquidar: 6750.0,
		liquidado: 8500.0
	},
	{
		id: 156446,
		ugr: "CCSA",
		planejado: 2500.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156455,
		ugr: "CCT",
		planejado: 45268.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
        id: 156338,
        ugr: "FAMED",
        planejado: 941310.0,
        empenhado: 46158.99,
        aliquidar: 40436.37,
        liquidado: 5722.62
	},
	{
		id: 156445,
		ugr: "IISCA",
		planejado: 17950.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156456,
		ugr: "IFE",
		planejado: 18220.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	},
	{
		id: 156475,
		ugr: "CAMPUS ICO" ,
		planejado: 0.0,
		empenhado: 0.0,
		aliquidar: 0.0,
		liquidado: 0.0
	}
]
const id = 0

const data = [
	{ x: "Planejado", y: dados[id].planejado },
    { x: "Empenhado", y: dados[id].empenhado },
    { x: "A liquidar", y: dados[id].aliquidar },
    { x: "Liquidado", y: dados[id].liquidado },
]

const numberFormatter = Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2
});

export const Grafico1 = ({navigation}: NativeStackScreenProps<RootStackParamList, 'Grafico1'>) => {
	return (
	<Container>
		<View style={style.Content}>
			<Text style={style.Title}>{dados[0].ugr}</Text>
			<View style={style.Chart}>
				<VictoryChart 
					horizontal 
					width={Dimensions.get("screen").width*0.95}
					height={Dimensions.get("screen").height*0.30}
					theme={VictoryTheme.material}
					padding={{
						left: 87,
						bottom: 20,
						top: 15,
						right: 100
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
							}
						}}
						offsetX={84}
						domain={[0.6, 4.5]}
					/>
					<VictoryBar
						style={{
							data: {
								fill: colors.orange,
								width: 20
							}
						}}
						cornerRadius={{ top: 2 }}
						animate={{
							duration: 1000,
							onLoad: { duration: 1000 }
						}}
						labels={({ datum }) => {
							const value = 'R$ ' + numberFormatter.format(datum.y);
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
				<Card title="Valor Planejado" content={'R$ ' + numberFormatter.format(data[0].y)}/>
				<Card title="Valor executado" content={'R$ ' + numberFormatter.format(data[1].y)}/>
			</View>
			<View style={style.Cards}>
				<Card title="A executar" content={'R$ ' + numberFormatter.format(data[2].y)}/>
				<Card title="Executado" content={data[0].y != 0 ? ((data[1].y*100)/data[0].y).toFixed(2) + ' %' : "0.0 %"}/>
			</View>
		</View>
	</Container>
	)
}

const style = StyleSheet.create({
	Title:{
		fontSize: 18,
		color: colors.brown,
		fontWeight: "bold",
		paddingBottom: 15
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
	}
})
