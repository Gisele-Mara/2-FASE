import React from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Abas from "./src/pages/Abas";
import { View, Text, StyleSheet, TextInput} from "react-native";
import { Button } from "react-native";

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen('Home', 'Testando')}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Abas" component={Abas} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Testando"
            component={Teste('Home', 'Testando2')}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Testando2" component={Teste2('Home', 'Testando3')} />
          <Stack.Screen name="Testando3" component={Teste3('Home', 'Testando3')} />
        </Stack.Group>
      </Stack.Navigator>

    </NavigationContainer>

  )
}

function HomeScreen(screenName, navigateTo) {
  return function ({ navigation }) {


    return (
      <View>


        <Text>`{screenName} Screen`</Text>
        {navigateTo && (
          <Button
            title={`Go to ${navigateTo}`}
            onPress={() => navigation.navigate(navigateTo)}
          />
        )}
        <Button
          title="Mais sobre"
          onPress={() =>
            navigation.navigate('Sobre')
          }
        />
      </View>
    );
  }
};


function Teste(screenName, navigateTo) {
  return function ({ navigation }) {
    return (
      <View style={styles.container}>
        <Text> Hello, stranger! </Text>
        <TextInput
          multiline
          numberOfLines={2}
          blurOnSubmit
          style={styles.input}
          placeholder="Teste"
          // keyboardType='numeric'
          onFocus={() => {
            console.log('Focused on input');

          }
          }
        />
        {navigateTo && (
          <Button
            title={`Go to ${navigateTo}`}
            onPress={() => navigation.navigate(navigateTo)}
          />
        )}
      </View>
    )
  }
}
function Teste2(screenName, navigateTo) {
  return function ({ navigation }) {

    return (
      <View style={styles.container}>
        <Text> Hello, stranger twoo! </Text>
        <TextInput
          multiline
          numberOfLines={2}
          blurOnSubmit
          style={styles.input}
          placeholder="Teste 2"
          // keyboardType='numeric'
          onFocus={() => {
            console.log('Focused on input');

          }
          }
        />
        {navigateTo && (
          <Button
            title={`Go to ${navigateTo}`}
            onPress={() => navigation.navigate(navigateTo)}
          />
        )}
      </View>
    )
  }
}
function Teste3(screenName, navigateTo) {
  return function ({ navigation }) {


    return (
      <View style={styles.container}>
        <Text> Hello, stranger three! </Text>
        <TextInput
          multiline
          numberOfLines={2}
          blurOnSubmit
          style={styles.input}
          placeholder="Teste 3"
          // keyboardType='numeric'
          onFocus={() => {
            console.log('Focused on input');

          }
          }
        />
        {navigateTo && (
          <Button
            title={`Go to ${navigateTo}`}
            onPress={() => navigation.navigate(navigateTo)}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#CDE4AD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: 911,
    width: 430,
    gap: 5
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 16,
    color: 'black',
    width: 200,
    padding: 6,
    textAlign: 'center'
  },
  textoCor: {
    // fontFamily: 'Courier New',
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 30
  },
  botaoTexto: {
    // fontFamily: 'Courier New',
    color: '#ffc6c4',
    fontWeight: 'bold',
    fontSize: 15
  },
  botao: {
    height: 60,
    width: 90,
    color: "#f194ff",
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
  contBotao: {
    flexDirection: 'row',
    gap: 2
  },
  quadro: {
    backgroundColor: '#fed9b7',
    height: 100,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tela: {
    backgroundColor: '#8B0D67',
    height: 250,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
});

