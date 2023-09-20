import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';




export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 435,
    height: 865,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020'
  },
  containerHeader: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066CC'
  },
  containerHeaderCima: {
    flexDirection: 'row',
    height: '60%',
    width: '100%',
    paddingTop: '4%'
  },
  reset: {
    width: '42%',
    alignItems: 'flex-end',


  },
  botaoMenu: {
    width: '8%',
    alignItems: 'flex-end',
    marginRight: '2%'

  },
  containerTags: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#0066CC',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '40%'
  },
  containerLados: {
    width: '50%',
    alignItems: 'center'

  },
  containerBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 24
  },
  input: {

    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderColor: 'red',
    color: 'black',
    width: 200,
    padding: 6,
    textAlign: 'center'
  },
  containerConversor: {
    backgroundColor: '#0066CC',
    borderColor: '#202020',
    borderRadius: 10,
    flexDirection: 'row',
    height: 62,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#0066CC',
    borderRadius: 16,
    width: '70%',
    marginBottom: '1.5%'

  },
  tituloH1: {
    fontSize: 22,
    fontWeight: '600',
    height: '100%',
    width: '50%',
    backgroundColor: '#0066CC',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  inputTexto: {
    width: '90%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
    color: '#808080',
    fontWeight: '400',
    fontSize: 20,
    textAlignVertical: 'center'

  },
  textos: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontWeight: '500',
    fontSize: 15
  },
  textosConv: {
    width: '20%',
    color: 'white',
    backgroundColor: '#0066CC',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15


  },
  footer: {
    height: 65,
    width: '100%',
    backgroundColor: 'white'
  }
});


function Header() {

  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerHeaderCima}>
        <Text style={styles.tituloH1}>  Convesor de Base </Text>
        <TouchableOpacity style={styles.reset}>
          <Text style={styles.textos}> RESET </Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoMenu}>
          <Feather
            name='more-vertical'
            size={20}
            color='white'
          />

        </TouchableOpacity>

      </View>
      <View style={styles.containerTags}>
        <LadoUm />
        <LadoDois />
      </View>
    </View>
  )

}

function LadoUm() {

  return (
    <View style={styles.containerLados}>

      <TouchableOpacity>

        <Text style={styles.textos}>  BASES COMUNS </Text>

      </TouchableOpacity>
    </View>
  )
}
function LadoDois() {

  return (
    <View style={styles.containerLados}>
      <TouchableOpacity>

        <Text style={styles.textos}>  TODAS AS BASES </Text>

      </TouchableOpacity>

    </View>
  )
}


function Body() {
  const [binario, setBinario] = useState('')
  const [InputUser, setInputUser] = useState('')
  const [decimal, setDecimal] = useState('')
  const [hexadecimal, setHexadecimal] = useState('')
  const [octal, setOctal] = useState('')
  

  console.log(InputUser)

  // const conversor = (valor, tipo) => {
  //   console.log(valor, tipo)
  //   setInputUser(valor)
  //   calc(tipo)
  // }

  // function calc(ope) {
      
   
  //   switch(ope){
  //     case 'BIT':
  //     let bits = 0
  //     let binInpt = InputUser.toString()
  //     console.log(binInpt)
  //     let soma = 0
  //     let expoente = 0

  //     expoente = binInpt.length
  //     console.log(binInpt.length)

  //     for (let i = 0; i < binInpt.length; i++) {
  //       bits = binInpt.slice(i, i + 1)
  //       console.log(bits)
  //        if (bits !== "1" && bits !== "0") {
  //         alert('Numeros não binários digitados')
  //          return;
  //       }
  //       expoente = expoente - 1
  //       soma = soma + (Number(bits) * (2 ** (expoente)))
     
  //       setDecimal(soma)
  //       break;

  //   }
      
  //   }


  // }
  function BIN() {


    return (
      <View style={styles.containerConversor}>

        <Text style={styles.textosConv}> BIN </Text>


        <TextInput
          style={[styles.input, styles.inputTexto]}
          multiline
          numberOfLines={2}
          placeholder="BASE 2"
          keyboardType='numeric'
          onChangeText={setInputUser}

        />

        {/* <Text> Resposta :  </Text> */}
      </View>

    )
  }
  function OCT() {


    return (
      <View style={styles.containerConversor}>
        <Text style={styles.textosConv}> OCT </Text>
        <TextInput
          style={[styles.input, styles.inputTexto]}
          multiline
          numberOfLines={2}
          placeholder="BASE 8"
          keyboardType='numeric'
          value={binario}
          onChangeText={valorInpt => conversor(valorInpt, 'OCT')}

        />

        {/* <Text> Resposta :  </Text> */}
      </View>

    )
  }
  function DEC() {
    return (
      <View style={styles.containerConversor}>
        <Text style={styles.textosConv}> DEC </Text>
        <TextInput
          style={[styles.input, styles.inputTexto]}
          multiline
          numberOfLines={2}
          placeholder="BASE 10"
          keyboardType='numeric'
          value = {decimal}
          onChangeText={valorInpt => conversor(valorInpt, 'DEC')}

        />

        {/* <Text> Resposta :  </Text> */}
      </View>

    )
  }
  function HEX() {

    return (
      <View style={styles.containerConversor}>
        <Text style={styles.textosConv}> HEX </Text>
        <TextInput
          style={[styles.input, styles.inputTexto]}
          multiline
          numberOfLines={2}
          placeholder="BASE 16"
          keyboardType='numeric'
          onChangeText={valorInpt => conversor(valorInpt, 'HEX')}

        />

        {/* <Text> Resposta :  </Text> */}
      </View>

    )
  }
  return (

    <View style={styles.containerBody}>

      <BIN />
      <OCT />
      <DEC />
      <HEX />
    </View>


  )
}


