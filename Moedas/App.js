import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";
import reactDom from 'react-dom';

export default function App() {

  const [cont, setCont] = useState(0)
  const [entrada, setEntrada] = useState("")
  const [saida, setSaida] = useState('')
  function conversor(a) {
    // alert(entrada)
    switch (a) {
      case 'dolar':
        let dolar = (Number(entrada) / 4.87).toFixed(2)
        setSaida(`${entrada} BRL = ${dolar} USD `)
        break;
      case 'euro':
        let euro = ((Number(entrada)) / 5.36).toFixed(2)
        setSaida(`${entrada} BRL = ${euro} EUR `)
        break;
      case 'libra':
        let libra = ((Number(entrada)) / 6.19).toFixed(2)
        setSaida(`${entrada} BRL = ${libra} GBP `)
        break;
      case 'ars':
        let ars = ((Number(entrada)) / 58.82).toFixed(3)
        setSaida(`${entrada} BRL = ${ars} ARS `)
        break;
    }
  }
  return (
    <View style={styles.container}>

      <Text style={styles.textoCor}>Conversão Moedas </Text>
      <ScrollView>
    <View style={styles.quadro}> 
      <TextInput
        multiline
        numberOfLines={2}
        blurOnSubmit
        value={entrada}
        onChangeText={setEntrada}
        style={styles.input}
        placeholder="Digita o valor em reais!"
        keyboardType='numeric'
        onFocus={() => {
          console.log('Focused on input');

        }}
      />
      </View>

      <View style={styles.quadro}>

      <TouchableOpacity style={styles.botao} onPress={() => conversor("dolar")}>
        <Text style={styles.botaoTexto}> DÓLAR </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.quadro}>
      <TouchableOpacity style={styles.botao} onPress={() => conversor("euro")}>
        <Text style={styles.botaoTexto}> EURO </Text>
      </TouchableOpacity>

      </View>
      <View style={styles.quadro}>

      <TouchableOpacity style={styles.botao} onPress={() => conversor("libra")}>
        <Text style={styles.botaoTexto}> LIBRA </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.quadro}>
      <TouchableOpacity style={styles.botao} onPress={() => conversor("ars")}>
        <Text style={styles.botaoTexto}> PESO ARGENTINO </Text>
      </TouchableOpacity>

      </View>
      <View style={styles.quadro}>

      <TouchableOpacity style={styles.botao} onPress={() => conversor("dolar")}>
        <Text style={styles.botaoTexto}> DÓLAR </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.quadro}>
      <TouchableOpacity style={styles.botao} onPress={() => conversor("euro")}>
        <Text style={styles.botaoTexto}> EURO </Text>
      </TouchableOpacity>

      </View>
      <View style={styles.quadro}>
    
      <Text style={styles.Ilhatext}>{saida}</Text>

      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#e40078',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: 911,
    width: 435
  },
  input: {
    borderWidth: 2,
    borderColor: "purple",
    color: 'black',
    width: 200,
    padding: 6
  },
  textoCor: {
    // fontFamily: 'Courier New',
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 30
  },
  Ilhatext: {
    // fontFamily: 'Courier New',
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 18
    // padding: 20,

  },
  botaoTexto: {
    // fontFamily: 'Courier New',
    color: '#ffc6c4',
    fontWeight: 'bold',
    fontSize: 10
  },
  botao: {
    height: 30,
    width: 60,
    color: "#f194ff",
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
  quadro: {
    backgroundColor: 'lightgreen',
    height: 150,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
