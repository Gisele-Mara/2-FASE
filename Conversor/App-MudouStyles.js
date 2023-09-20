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
  input: {

    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderColor: 'red',
    color: 'black',
    width: 100,
    padding: 6,
    textAlign: 'center'
  },
  containerConversor: {
    backgroundColor: '#0066CC',
    flexDirection: 'row',
    height: 62,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#0066CC',
    borderRadius: 16,
    width: '75%',
    marginBottom: '1.5%',
   
  },
  inputTexto: {
    width: '70%',
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
    width: '30%',
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
    <View style={stylesHeader.containerHeader}>
      <View style={stylesHeader.containerHeaderCima}>
        <Text style={stylesHeader.tituloH1}>  Convesor de Base </Text>
        <TouchableOpacity style={stylesHeader.reset}>
          <Text style={styles.textos}> RESET </Text>

        </TouchableOpacity>
        <TouchableOpacity style={stylesHeader.botaoMenu}>
          <Feather
            name='more-vertical'
            size={20}
            color='white'
          />

        </TouchableOpacity>

      </View>
      <View style={stylesHeader.containerTags}>
        <LadoUm />
        <LadoDois />
      </View>
    </View>
  )
}

const stylesHeader = StyleSheet.create({
  containerHeader: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066CC',
    paddingTop: 20
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
})


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

let a = ''
let b = ''

const stylesBody = StyleSheet.create ({
  containerBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 24
  }

})







function Body() {
  const [binario, setBinario] = useState('')
  const [decimal, setDecimal] = useState('')
  const [hexadecimal, setHexadecimal] = useState('')
  const [octal, setOctal] = useState('')
  let resto

  console.log(binario)
  function bin2dec(numero) {
    let bits 
    let binInpt = numero.toString()
    let soma = 0
    let expoente = binInpt.length

    for (let i = 0; i < binInpt.length; i++) {
      bits = binInpt.slice(i, i + 1)
      console.log(bits)
      // if (bits !== "1" && bits !== "0") {
      //   alert('Numeros não binários digitados')
      //   return;
      // }
      expoente = expoente - 1
      soma = soma + (Number(bits) * (2 ** (expoente)))
      setBinario(b)
      setDecimal(soma)

    }
  }
 
  function dec2bin(quociente) {
    let binNumber =''
    let oi = quociente
    quociente = Number(quociente)
    console.log(`Quociente: ${quociente}`)
    
    for (let i = 0; quociente >= 2; i++) {
      resto = quociente - 2 * (Math.floor(quociente / 2))
      console.log(`Resto: ${resto}`)
      binNumber = binNumber.toString() + resto
      quociente = Math.floor(quociente / 2)
      console.log(`Quociente: ${quociente}`)
    }
    console.log(binNumber)
    setBinario(binNumber)
   
  }

  function dec2oct(quociente){
    let octNumber = ''
    Number(quociente)
    console.log(`Quociente Hex: ${quociente}`)
    
    for (let i = 0; quociente >= 8; i++) {
      resto = quociente - 8 * (Math.floor(quociente / 8))
      console.log(`Resto hex: ${resto}`)
      octNumber = octNumber.toString() + resto
      quociente = Math.floor(quociente / 8)
      console.log(`Quociente: ${quociente}`)
    }
    octNumber = octNumber + quociente.toString()
    octNumber = (octNumber.split('').reverse().join(''))
    setOctal(octNumber)
  }

  function dec2hex(quociente){
    let hexNumber = ''
    Number(quociente)
    console.log(`Quociente oct: ${quociente}`)
    
    for (let i = 0; quociente >= 16; i++) {
      resto = quociente - 16 * (Math.floor(quociente / 16))
      console.log(`Resto: ${resto}`)
      hexNumber = hexNumber.toString() + resto
      quociente = Math.floor(quociente / 16)
      console.log(`Quociente: ${quociente}`)
    }
    hexNumber = hexNumber + quociente.toString()
    hexNumber = (hexNumber.split('').reverse().join(''))
    setHexadecimal(hexNumber)
  }


  function calc(numero, ope) {
   
    b = b + numero
   
    console.log(`bbbbbbbb : ${b}`)
    switch (ope) {
      case 'Bin':
        bin2dec(b)
        break;
      case 'Oct':
        oct2dec(b)
        break;
      case 'Dec':
        dec2bin(b)
        dec2oct(b)
        dec2hex(b)
        break;
      case 'Hex':
        hex2dec(b)
        break;

    }


  }
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
          // onChangeText={binario}
          onChangeText={(userInput) => calc(userInput, 'Bin')}
           value={binario}
           
           
           />
           <Text> Resposta : {binario}  </Text> 

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
          value={octal}
          onChangeText={(userInput) => calc(userInput, 'OCT')}

        />

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
          // onChangeText={setDecimal}
          onChangeText={(userInput) => calc(userInput, 'Dec')}
          value={decimal}

        />

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
          onChangeText={(userInput) => calc(userInput, 'Hex')}
          value={hexadecimal}

        />

      </View>

    )
  }
  return (

    <View style={stylesBody.containerBody}>

      <BIN />
      <OCT />
      <DEC />
      <HEX />
    </View>


  )
}


