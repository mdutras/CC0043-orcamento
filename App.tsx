import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Container } from './components/Container';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from './styles/theme';
import { ListGraphics } from './components/List';
import { Grafico1 } from './pages/Grafico1';
import { LoginPage } from './pages/login';
import { colors } from './styles/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
return (
  <PaperProvider theme={theme}>

  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Orçamentos"
      screenOptions={{
        headerStyle: { backgroundColor: colors.lightBrown },
        headerTitleStyle: {
          color: colors.cream,
          fontSize: 25,
        },
        headerTintColor: colors.cream,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Orçamentos" component={ListGraphics} />
      <Stack.Screen name="Grafico1" component={Grafico1} />
      <Stack.Screen name="loginPage" component={LoginPage}/>
    </Stack.Navigator>
  </NavigationContainer>
</PaperProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
