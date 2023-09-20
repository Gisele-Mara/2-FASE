import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, TextInput, Vibration, ScrollView } from 'react-native';
import { Button } from 'react-native';
import { useState } from "react";
import reactDom from 'react-dom';

let produtos = [
  { nome: "Apple", preco: 22 },
  { nome: "Grapes", preco: 2 },
  { nome: "Watermelon", preco: 42 },
  { nome: "Orange", preco: 4 },
  { nome: "Pineapple", preco: 10}
]
export default function App() {

  const [cont, setCont] = useState(0)
  const [entradaNome, setEntradaNome] = useState("")
  const [entradaPreco, setEntradaPreco] = useState("")
  const [saida, setSaida] = useState('')

  function conversor() {

    let produto = {
      nome: entradaNome,
      preco: Number(entradaPreco),
    }
    produtos.push(produto)
    console.log(produtos)
    setEntradaNome('')
    setEntradaPreco('')

  }

  function pesquisar() {
    for (let i = 0; i < produtos.length; i++) {
      if (entradaNome == produtos[i].nome) {
        setEntradaPreco(produtos[i].preco)
        return produtos[i]
      }
    }
  }
  
  function edite() {
    let produto = pesquisar()
    produto.preco = Number(entradaPreco)
    setEntradaPreco(produto.preco)
    console.log(produto)

  }

  function deletar(){
    let produto = pesquisar()
    let a = produtos.indexOf(produto)
    console.log(a)
    produtos.splice(a, 1)
    console.log(produtos)

    setEntradaNome('')     //Basicamente atualiza a pagina
    setEntradaPreco('')    //Basicamente atualiza a pagina

  }
  function testar() {
    console.log(produtos)

    pesquisar().preco = 0
    console.log(produtos)
  }



  return (
    <View style={styles.container}>

      <Text style={styles.textoCor}>CRUD</Text>
      <ScrollView>
        <View style={styles.quadro}>
          <TextInput
            multiline
            numberOfLines={2}
            blurOnSubmit
            value={entradaNome}
            onChangeText={setEntradaNome}
            style={styles.input}
            placeholder="Digite o nome do produto"
            // keyboardType='numeric'
            onFocus={() => {
              console.log('Focused on input');

            }
            }
          />
        </View>
        <View style={styles.quadro}>
          <TextInput
            multiline
            numberOfLines={2}
            blurOnSubmit
            value={entradaPreco}
            onChangeText={setEntradaPreco}
            style={styles.input}
            placeholder="Digite o preço"
            keyboardType='numeric'
            onFocus={() => {
              console.log('Focused on input');

            }
            }
          />
        </View>
        <View style={styles.contBotao}>
          <TouchableOpacity style={styles.botao} onPress={conversor}>
            <Text style={styles.botaoTexto}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={pesquisar}>
            <Text style={styles.botaoTexto}>Pesquisa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={edite}>
            <Text style={styles.botaoTexto}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={deletar}>
            <Text style={styles.botaoTexto}>Apagar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={testar}>
            <Text style={styles.botaoTexto}>*Teste*</Text>
          </TouchableOpacity>
        </View>


        <View style={[styles.tela, styles.shadowProp ]}>
          {produtos.map((produto, index) => (
            <Text key={index} style={styles.Ilhatext} >{produto.nome} - R$ {produto.preco.toFixed(2)}</Text>
          ))}
          {/* <Text style={styles.Ilhatext}>{entradaNome}</Text>
          <Text style={styles.Ilhatext}>{entradaPreco}</Text> */}

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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 42, height: 84},
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 33
  },
  Ilhatext: {
    // fontFamily: 'Courier New',
    color: '#f8f8f8',
    fontWeight: 'bold',
    fontSize: 18,
    // padding: 20,

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
