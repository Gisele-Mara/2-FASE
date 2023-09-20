import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";

export default function App() {
  const [cont, setCont] = useState(0)
  const [nome, setNome] = useState('numeros')
  const [hora, setHora] = useState('Nao sei')
  const [imagem, setImagem] = useState('')
  function clicado() {
    setCont(cont + 1)
    var dia = new Date().getDate()
    var mes = new Date().getMonth()
    var ano = new Date().getFullYear()
    setHora("MIAU!\nHoje é: " + dia + "/" + mes + "/"+  ano)
    setImage ()
  }
  function cachorro() {
    setCont(cont + 1)
    var dia = new Date().getDate()
    var mes = new Date().getMonth()
    var ano = new Date().getFullYear()
    setHora("AUAU!\nHoje é: " + dia + "/" + mes + "/"+  ano)
  }
  function zerar() {
    setCont(0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.esquerda}>
        <Text style={styles.textoCor}>PetFind</Text>
        {/* <Text style={styles.textoCor}>Cadastrar</Text> */}
        <TouchableOpacity style={styles.botao}  onPress={clicado}>
          <Text style={styles.botaoTexto}> CAT </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}  onPress={cachorro}>
          <Text style={styles.botaoTexto}> DOG</Text>
        </TouchableOpacity>



      </View>
      <View style={styles.direita}>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
            <Text style={styles.Ilhatext}>{hora} </Text>
          <Button color="#f194ff" title="Zerar" onPress={zerar} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: 1000
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
    color: 'green',
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
});
