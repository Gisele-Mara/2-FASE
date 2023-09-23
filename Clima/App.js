import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useState, useEffect, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';

const image = { uri: 'https://p1.pxfuel.com/preview/800/496/927/clouds-sky-blue-cloudy-skies.jpg' };
const URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'

export default function App() {
  

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={{ width: '100%', height: '100%' }}>

        <Header />
        <Dia />
        <Semana />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: '5%',
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  simbolo: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cidade: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cidadeTexto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 400
  },
  menu: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerDia: {
    height: '30%',
    width: '100%',
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  diaTexto: {
    fontSize: 90,
    fontWeight: 600,
    color: 'white'
  },
  tempoTexto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 500,
    padding: 20
  },
  IQA: {

    fontWeight: 200,
    borderRadius: 10,
    width: 80,
    backgroundColor: '#9BBDE9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iqaTexto: {
    fontSize: 12,
    color: 'white',
    fontWeight: 600
  },
  containerSemana: {
    height: '35%',
    marginTop: '20%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10%',
    marginLeft: '10%',
    backgroundColor: '#6698DA',
    opacity: 0.7,
    borderRadius: 10
  },
  semanaPrevisao: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: '18%',
    paddingRight: 15,
    paddingLeft: 15
  },
  semanaTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    
  },
  textoPrevisao: {
    color: '#C8DAF0',
    fontSize: 18,
    fontWeight: 600
  },
  botaoPrevisao: {
    borderRadius: 20,
    backgroundColor: '#9BBDE9',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',

  }
});

function Header() {
  const [results, setResults] = useState([])
  function oi (){

    fetch(URL)
    .then((res) => {

      console.log(res.json())
    })
  }

// // useEffect(() =>{
// //   async function getData(){
// //     const response = await fetch(URL)
// //     const data = await response.json()
// //     setResults(data)
// //   }
// //   getData()
// //   console.log('Resultados', results)
// })
  
  
  return (
    <View style={styles.header}>
      <View style={styles.simbolo}>
        <TouchableOpacity onPress={oi} >
          <Feather
            name='plus'
            size={30}
            color='white'
          />

        </TouchableOpacity>


      </View>
      <View style={styles.cidade}>
        <Text style={styles.cidadeTexto}>Cidade</Text>
        <View style={{ flexDirection: 'row' }}>

          <Feather
            name='navigation'
            size={10}
            color='white'
          />
          <Feather
            name='circle'
            size={10}
            color='grey'
          />
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity >
          <Feather
            name='more-vertical'
            size={30}
            color='white'
          />

        </TouchableOpacity>

      </View>

    </View>

  )
}
function Dia() {
  return (
    <View style={styles.containerDia}>

      <Text style={styles.diaTexto}> 17ºᶜ</Text>
      <Text style={styles.tempoTexto}>Nublado 22º/ 16º</Text>
      <View style={styles.IQA}>
        <Feather
          name='feather'
          size={12}
          color='white'
        />
        <Text style={styles.iqaTexto}> IQA 28 </Text>
      </View>

    </View>

  )
}
function Semana() {
  return (
    <View style={styles.containerSemana}>
      <View style={styles.semanaPrevisao}>
        <Text style={styles.textoPrevisao}> Previsão para 5 dias  </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.textoPrevisao, {fontSize:15, alignItems: 'baseline'}]}>Mais detalhes</Text>
        <Feather
            name='play'
            size={18}
            color='#C8DAF0'
          />
        </View>
      </View>
      <View style={styles.semanaPrevisao}>
        <View style={{flexDirection: 'row'}}>
        <Feather
            name='cloud'
            size={20}
            color='yellow'
          />
        <Text style={styles.semanaTexto}> Hoje Nublado </Text>
        </View>
        <Text style={styles.semanaTexto} > 22º/16º</Text>
      </View>
      <View style={styles.semanaPrevisao}>
      <View style={{flexDirection: 'row'}}>
        <Feather
            name='cloud'
            size={20}
            color='yellow'
          />
        <Text style={styles.semanaTexto}> Amanhã Nublado </Text>
          </View>
        <Text style={styles.semanaTexto}> 23º/17º</Text>
      </View>
      <View style={styles.semanaPrevisao}>
      <View style={{flexDirection: 'row'}}>
        <Feather
            name='cloud-rain'
            size={20}
            color='white'
          />
        <Text style={styles.semanaTexto}> Sáb. Chuva</Text>
        </View>
        <Text style={styles.semanaTexto}> 21º/19º</Text>
      </View>
      <TouchableOpacity style={styles.botaoPrevisao}>
        <Text style={styles.semanaTexto}> Previsão para 5 dias </Text>

      </TouchableOpacity>

    </View>

  )
}
