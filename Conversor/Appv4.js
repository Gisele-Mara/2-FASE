import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useEffect, useState, useContext, useRef, createContext } from "react";
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

let a = ''
let b = ''
let resto

function Body(props) {
  // const [binario, setBinario] = useState('')
  // const [decimal, setDecimal] = useState('')
  // const [hexadecimal, setHexadecimal] = useState('')
  // const [octal, setOctal] = useState('')

 let dec = 20
  

  // useEffect(() => {
  //   calc
  // }, [binario])

  return (

    <View style={styles.containerBody}>
     
      <BIN binario ={dec}/>
      <OCT octal ={dec}/>
      <DEC decimal = {dec}/>
      <HEX hexadecimal = {dec}/>
     
    </View>


  )
}
function Bin2dec(numero) {
 
 
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
    // setBinario(b)
    // setDecimal(soma)
    const myElement = <Body oi = {10} />;
       
     
   
  }
}

function Dec2bin(quociente) {
  let binNumber =''
  
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
  // setBinario(binNumber)
  return(
    <BIN binario={binNumber}/>
  )
}

function Dec2oct(quociente){
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
  // setOctal(octNumber)
  return(
    <OCT octal={octNumber}/>
  )
}

function Dec2hex(quociente){
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
  // setHexadecimal(hexNumber)
  return(
    <HEX hexadecimal={hexNumber}/>
  )
}


function calc(numero, ope) {

  b = b + numero
 
  console.log(`bbbbbbbb : ${b}`)
  switch (ope) {
    case 'Bin':
      Bin2dec(b)
      break;
    case 'Oct':
      Oct2dec(b)
      break;
    case 'Dec':
      Dec2bin(b)
      Dec2oct(b)
      Dec2hex(b)
      break;
    case 'Hex':
      Hex2dec(b)
      break;

  }


}

function BIN(props) {
  // const [binario, setBinario] = useState('')
  // const [decimal, setDecimal] = useState('')
  // const [hexadecimal, setHexadecimal] = useState('')
  // const [octal, setOctal] = useState('')
  

  return (
    <View style={styles.containerConversor}>

      <Text style={styles.textosConv}> BIN </Text>


      <TextInput
        style={[styles.input, styles.inputTexto]}
        multiline
        numberOfLines={2}
        placeholder="BASE 2"
        keyboardType='numeric'
        // onChangeText={(userInput) => setBinario([userInput, 'Bin'])}
        onChangeText={(userInput) => calc(userInput, 'Bin')}
        // onChangeText={setBinario}
        value={props.binario}
        

      />

    </View>

  )
}
function OCT(props) {
  // const [binario, setBinario] = useState('')
  // const [decimal, setDecimal] = useState('')
  // const [hexadecimal, setHexadecimal] = useState('')
  // const [octal, setOctal] = useState('')

  return (
    <View style={styles.containerConversor}>
      <Text style={styles.textosConv}> OCT </Text>
      <TextInput
        style={[styles.input, styles.inputTexto]}
        multiline
        numberOfLines={2}
        placeholder="BASE 8"
        keyboardType='numeric'
        value={props.octal}
        onChangeText={(userInput) => calc(userInput, 'OCT')}

      />

    </View>

  )
}
function DEC(props) {
  
  console.log((props.decimal))
  return (
    <View style={styles.containerConversor}>
      <Text style={styles.textosConv}> DEC </Text>
      <TextInput
        style={[styles.input, styles.inputTexto]}
        multiline
        numberOfLines={2}
        placeholder="BASE 10"
        keyboardType='numeric'
        onChangeText={(userInput) => calc(userInput, 'Dec')}
        value={props.decimal}

      />

    </View>

  )
}
function HEX(props) {

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
        value={props.hexadecimal}

      />

    </View>

  )
}


