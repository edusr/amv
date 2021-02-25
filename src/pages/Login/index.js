import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
  Alert,
} from 'react-native';
import Loader from '../../components/Loader';
import { styles } from './styles';

export default function Login({ navigation }) {

  const [offeset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 175, y: 150 }));

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 125,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 110,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start()
  }
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 175,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start()
  }

  function startInputAnimations() {
    Animated.parallel([
      Animated.spring(offeset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true
      })
    ]).start();
  }

  useEffect(() => {
    let keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    let keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    startInputAnimations();
  }, []);

  function doLogin() {
    //Efetuar requisição para login aqui...
    //Após sucesso do login, redirecionar para próxima rota. Ex: navigation.navigate('Home');
    //Caso aconteça erro no login, chamar a função mostrarMensagemErroLogin(mensagem) passando a mensagem de erro
    setIsLoading(true);
    setTimeout(() => {
      console.log(username, password)
      if (username == 'root' && password == 'root') {
        navigation.navigate('Home');
      } else {
        mostrarMensagemErroLogin('Usuário e/ou senha inválidos');
      }
      setIsLoading(false);
    }, 2000);
  }

  function mostrarMensagemErroLogin(mensagem) {
    Alert.alert('Aviso', mensagem);
  }

  if (isLoading) {
    return <Loader />
  } else {
    startInputAnimations();
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
            }}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              opacity: opacity,
              transform: [
                { translateY: offeset.y }
              ]
            }
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            autoCorrect={false}
            returnKeyType="next"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => doLogin()}
          >
            <Text style={styles.textButtonSubmit}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonForgot}>
            <Text style={styles.textButtonForgot}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }

}