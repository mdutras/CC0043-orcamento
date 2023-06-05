import React, { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Dimensions, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';

import { Container } from "../../components/Container";

export function LoginPage(): JSX.Element {
    const [login, setLogin] = useState(false);
const [pass, setPass] = useState(false);
return (
    <Container>
        <View style={styles.container}>
        
        <TextInput
            style={styles.input}
            placeholder='Insira o login'
            onChangeText={t => setLogin(!!t)}
        />
        <TextInput
            style={styles.input}
            placeholder='Insira a senha'
            onChange={t => setPass(!!t)}
        />
        <Pressable style={[styles.button,{backgroundColor: (login && pass)?'violet':'#CCCCCC'}]} disabled={!login || !pass}>
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