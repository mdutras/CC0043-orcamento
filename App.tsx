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
import { theme } from './styles/theme';
import { ListGraphics } from './components/List';

function App(): JSX.Element {
return (
  <PaperProvider theme={theme}>
    <Container>
      <ListGraphics />
    </Container>
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
