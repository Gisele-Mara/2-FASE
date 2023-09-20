import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";

export default function App() {

  const [cont, setCont] = useState(0)

  const [imagem, setImagem] = useState(require("./dados/dd.gif"))

  function mudarImagem() {
    setCont(Math.ceil(Math.random() * 6))

   switch (cont) {
      case 1:
        setImagem(require('./dados/d1.svg'))
        break;
      case 2:
        setImagem(require('./dados/d2.png'))
        break;
      case 3:
        setImagem(require('./dados/d3.png'))
        break;
      case 4:
        setImagem(require('./dados/d4.png'))
        break;
      case 5:
        setImagem(require('./dados/d5.png'))
        break;
      case 6:
        setImagem(require('./dados/d6.png'))
        break;
      default:
        setCont(Math.ceil(Math.random() * 6))
        mudarImagem()
    }
  }


  return (
    <View style={styles.container}>
 
        <Text style={styles.textoCor}>D A D O</Text>
        <Image
          source={imagem}
          style={{ width: 180, height: 180 }}
        />
        <TouchableOpacity style={styles.botao} onPress={mudarImagem}>
          <Text style={styles.botaoTexto}> SORTEAR {cont}</Text>
        </TouchableOpacity>

        {/* <Text style={styles.Ilhatext}> {cont} </Text> */}
        {/* <Button color="#f194ff" title="Zerar" onPress={zerar} /> */}
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    backgroundColor: '#ffc6c4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: 500,
    width: 500
  },
  textoCor: {
    fontFamily: 'Courier New',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
  Ilhatext: {
    fontFamily: 'Courier New',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 50
    // padding: 20,

  },
  botaoTexto: {
    fontFamily: 'Courier New',
    color: '#ffc6c4',
    fontWeight: 'bold',
    fontSize: 10
  },
  esquerda: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 1000,
    padding: 0

  },
  direita: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    height: 500,
    width: 1000,
    padding: 0,

  },
  botao: {
    height: 60,
    width: 120,
    color: "#f194ff",
    backgroundColor: "#e40078",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
});
