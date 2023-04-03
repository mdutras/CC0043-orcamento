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
  // Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <View
        style={[
          styles.sectionDescription,
          isDarkMode ? Colors.light : Colors.dark,
        ]}>
        {children}
      </View>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Login">
            <Text style={styles.highlight}>Username:</Text>
            <TextInput
              value={username}
              onChangeText={(usernameCurrent: string) => {
                setUsername(usernameCurrent);
              }}
            />
            <Text style={styles.highlight}>Password:</Text>
            <TextInput
              placeholder="******"
              secureTextEntry={true}
              value={password}
              onChangeText={(passwordCurrent: string) => {
                setPassword(passwordCurrent);
              }}
            />
            <Button
              title="Autenticar"
              disabled={!username || !password}
              onPress={() => {
                username === 'abc' && password === '123'
                  ? Alert.alert('Bem vindo, ' + username + '!', 'Tudo joia?')
                  : Alert.alert('Erro', 'Algo de errado não esta certo.');
              }}
            />
            <ReloadInstructions />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
