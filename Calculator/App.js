import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";
import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather";


let flag = false
let sinal = ''
let numero = ''
let a
let total = ''
let cor1 = '#770637'
let cor2 = '#C40B30'
let cor3 = '#8A0543'
let corBranco = 'white'
let corBotao = 'white'
let corDark = [cor1, cor2, cor3]
let corLight = [corBranco, corBranco, corBranco]
let corFlag = false
export default function App() {


  const [cor, setCor] = useState(corDark)
  const [IconCor, setIconCor] = useState('sun')
  const [resultado, setResultado] = useState("")
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [op, setOp] = useState('')


  let vetorNumero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  function chama(sucedeu, operador, numeros, b) {
    console.log('Entrou na função')
    console.log(sucedeu, operador, numeros, b)
    if (sucedeu == true) {
      console.log('Fazendo operação')
      switch (operador) {
        case '+':

          setN1(b)
          setN2(numeros)
          total = Number(b) + Number(numeros)
          console.log(total)
          setResultado(total)
          break;
        case '-':
          total = Number(b) - Number(numeros)
          console.log(total)
          setResultado(total)
          break;
        case '*':
          total = Number(b) * Number(numeros)
          console.log(total)
          setResultado(total)
          break;
        case '/':
          total = Number(b) / Number(numeros)
          console.log(total)
          setResultado(total)
          break;
        case '^':
          total = Math.pow(Number(b), Number(numeros))
          console.log(total)
          setResultado(total)
          break;
        case '√':
          if (b == '') {

            total = Math.sqrt(Number(numeros))
          }
          else {
            total = Number(b) * Math.sqrt(Number(numeros))
          }

          console.log(total)
          setResultado(total)
          break;

        case '=':
          setResultado(total)
          break;
      }
    }
  }
  function operacao(userInput) {

    if ((vetorNumero.includes(userInput) == true) || (userInput == '.')) {
      numero = numero + userInput
      console.log(numero)
      chama(flag, sinal, numero, a)
    }
    else {
      sinal = userInput
      flag = true
      a = numero
      numero = ''
      if (total != '') {
        a = total
      }
    }
    if (sinal == '=') {
      setOp('')
      setN1('')
      setN2('')
      setResultado(total)
    } else {
      setN1(a)
      setN2(numero)
      setOp(sinal)
    }

  }

  function clean() {
    let i
    console.log("aaaa")
    let k = numero
    k.toString()
    if ((k.length >= 2) && (sinal != '')) {
      i = k.slice(0, k.length - 1)
      numero = i
      setN2(numero)
     
    }
    else if ((k.length > 0) && (sinal != '')) {
      i = 0
      console.log(i)
      numero = i
      setN2(numero)
    }
    else {
      sinal = ''
      flag = false
      setOp(sinal)
    }

     if (sinal == '') {
      console.log('ab')
      k = a || numero
      k.toString()
      if (k.length > 1){
        k.slice(0, k.length - 1)

      } else {
        k = 0
      }
      numero = k
      setN1(numero)
      console.log(a)
    }

    console.log(i)
    console.log(sinal)
    console.log(flag)

    chama(flag, sinal, numero, a)
  }
  function limpar() {
    flag = false
    sinal = ''
    numero = ''
    a = ''
    total = ''
    setN1(a)
    setN2(numero)
    setOp(sinal)
    setResultado(total)

  }

  function changeCor() {
    if (corFlag == false) {

      setCor(corDark)
      setIconCor('moon')
      corBotao = 'white'
      corFlag = true
    }
    else {
      setCor(corLight)
      setIconCor('sun')
      corBotao = 'black'
      corFlag = false
    }
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={cor}
        style={styles.containerTela}>
        <View style={styles.containerHeader}>
          <Text style={styles.textoCor}>Calculadora </Text>
          <Feather onPress={changeCor}
            name={IconCor}
            size={30}
            color='grey'
          />

        </View>

        <Text style={styles.textoOp}> {n1}{op}{n2} </Text>
        <Text style={styles.Resultext}> {resultado} </Text>
      </LinearGradient>



      <LinearGradient
        // Background Linear Gradient
        colors={cor}
        style={styles.containerCalc}>

        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={[styles.botaoTexto, styles.textoDif]}> AC </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => operacao("^")}>
          <Text style={styles.botaoTexto}> ^  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao("√")}>
          <Text style={styles.botaoTexto}> √  </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao("/")}>
          <Text style={styles.botaoTexto}> ÷ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(7)}>
          <Text style={styles.botaoTexto}> 7 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(8)}>
          <Text style={styles.botaoTexto}> 8 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(9)}>
          <Text style={styles.botaoTexto}> 9 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao("*")}>
          <Text style={styles.botaoTexto}> x </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(4)}>
          <Text style={styles.botaoTexto}> 4 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(5)}>
          <Text style={styles.botaoTexto}> 5 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(6)}>
          <Text style={styles.botaoTexto}> 6 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao("-")}>
          <Text style={styles.botaoTexto}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(1)}>
          <Text style={styles.botaoTexto}> 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(2)}>
          <Text style={styles.botaoTexto}> 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(3)}>
          <Text style={styles.botaoTexto}> 3 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao("+")}>
          <Text style={styles.botaoTexto}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(0)}>
          <Text style={styles.botaoTexto}> 0 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao(".")}>
          <Text style={styles.botaoTexto}> . </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={clean}>
          <Feather style={styles.botaoTexto}
            name='delete'
            size={45}
            color='#00FFFF'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => operacao("=")}>
          <Text style={[styles.botaoTexto, styles.textoDif]}> = </Text>
        </TouchableOpacity>
      </LinearGradient>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: '#ffc6c4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: 865.2,
    width: 432
  },
  containerCalc: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#ffc6c4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    height: '70%',
    width: 435
  },
  containerTela: {
    backgroundColor: "transparent",
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '30%',
    width: 435,
    borderRadius: 15,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    marginBottom: 0,
    marginTop: 30

  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    width: 435,
  },
  textoCor: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15
  },
  textoOp: {
    color: { corBotao },
    fontWeight: 'bold',
    fontSize: 40
  },
  textoDif: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 40
  },
  Ilhatext: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 50
    // padding: 20,
  },
  Resultext: {
    color: 'grey',
    fontWeight: '700',
    fontSize: 50,
    textAlign: 'right'
    // padding: 20,
  },
  botaoTexto: {
    color: { corBotao },
    fontWeight: 'bold',
    fontSize: 40
  },

  botao: {
    height: '20%',
    width: '25%',
    color: "#f194ff",
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    marginLeft: 0,
    marginBottom: 0,
    shadowColor: "grey",
    shadowOpacity: 0.6,
    shadowRadius: 1,
    shadowOffset: { width: -2, height: 4 },
  }

})
