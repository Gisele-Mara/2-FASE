import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";

export default function App() {

  const [cont, setCont] = useState(0)
  const [biscoito, setBiscoito]= useState(require('./imagens/biscoito.png'))
  const [frase, setFrase] = useState(" ")

  function sortear() {
    setBiscoito(require('./imagens/biscoitoAberto.png'))
    setCont(Math.ceil(Math.random() * 6))

   switch (cont) {
      case 1:
        setFrase("A vida trará coisas boas se tiver paciência.")
        break;
      case 2:
        setFrase("O futuro depende de seus sonhos. Então, vá dormir.")
        break;
      case 3:
        setFrase("Aqueles que vivem pela espada levam um tiro por aqueles que não.")
        break;
      case 4:
        setFrase("Siga os bons e aprenda com eles.")
        break;
      case 5:
        setFrase("Aquele que se importa com o sentimento dos outros, não é um tolo.")
        break;
      case 6:
        setFrase("Sem o fogo do entusiasmo, não há o calor da vitória.")
        break;
      default:
        setFrase("A sorte favorece a mente bem preparada.")
     
    }
  }
  function reiniciar (){
    setBiscoito(require('./imagens/biscoito.png'))
    setFrase("  ")
  }

  return (
    <View style={styles.container}>
      <Image
      source={biscoito}
      style={{ width: 180, height: 180 }}
      />
        <Text style={styles.textoCor}>{frase} </Text>

        <TouchableOpacity style={styles.botao} onPress={sortear}>
          <Text style={styles.botaoTexto}>Quebrar biscoito</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.botao} onPress={reiniciar}>
          <Text style={styles.botaoTexto}> Reiniciar biscoito</Text>
        </TouchableOpacity>
  
       
     
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 14,
    marginBottom: 14,
    textAlign: 'center'
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
    fontSize: 14
  },
   botao: {
    height: 60,
    width: 170,
    color: "#f194ff",
    backgroundColor: "#e40078",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 7
  }
});
