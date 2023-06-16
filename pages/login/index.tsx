import React, { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Dimensions, Pressable, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { Container } from "../../components/Container";
import { colors } from '../../styles/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export function LoginPage({
    navigation,
  }: NativeStackScreenProps<RootStackParamList, "loginPage">): JSX.Element {
    const [login, setLogin] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const handleLogin = () => {
        auth().signInWithEmailAndPassword(login, pass).then(() => {
            navigation.navigate("Orçamentos")
        })
    }
    
return (
    <Container>
        <View style={styles.container}>
            <Image
              style={{
                width: Dimensions.get("screen").width*0.4,
                height: Dimensions.get("screen").height*0.3,
                resizeMode: "center",
              }}
              source={require("../../img/logo2.png")}
            />
        <TextInput
            style={styles.input}
            placeholder='Insira o login'
            onChangeText={t => setLogin(t)}
            value={login}
        />
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder='Insira a senha'
            onChangeText={t => setPass(t)}
            value={pass}
        />
        <Pressable style={styles.button} onPress={handleLogin}>
            <Text>Entrar</Text>
        </Pressable>
        </View>
    </Container>
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    input : {
        height: 40,
        width: Dimensions.get('window').width*0.8,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        marginBottom:10
    },
    button : {
        height: 40,
        width: Dimensions.get('window').width*0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop:20,
        elevation: 5,
    }
  });