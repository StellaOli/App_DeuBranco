import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import firebase from '../config/config';

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      entrada: [],
      correspondenciaMaiorQue90: false
    };
  }

  componentDidMount() {
    firebase.database().ref("banco_de_dados").on('value', snapshot => {
      let data = snapshot.val();
      if (data) {
        this.setState({ dados: data });
        const correspondenciaMaiorQue90 = this.verificarCorrespondencia(data);
        this.setState({ correspondenciaMaiorQue90 });
      }
    });

    firebase.database().ref("caracteristicas").on('value', snapshot => {
      let confere = snapshot.val();
      if (confere) {
        this.setState({ entrada: confere });
      }
    });
  }

  verificarCorrespondencia = (data) => {
    let contagem = 0;

    Object.entries(this.state.entrada).forEach(([_, subItemBD]) => {
      Object.entries(subItemBD).forEach(([keyBD, valueBD]) => {
        if (data.hasOwnProperty(keyBD)) {
          const valorCaracteristica = data[keyBD];
          if (valorCaracteristica.toString() === valueBD.toString()) {
            contagem++;
          }
        }
      });
    });

    const porcentagem = (contagem / Object.keys(data).length) * 100;
    return porcentagem > 90;
  }

  render() {
    return (
      <View style={estilos.fundo}>

        <FlatList
          data={Object.entries(this.state.dados)}
          renderItem={({ item }) => (
            <View>
              <Text style={estilos.txtColuna}>{item[0]}</Text> 
              <FlatList
                data={Object.entries(item[1])}
                renderItem={({ item: subItem }) => (
                  <View>
                    <Text style={estilos.txtBotao}>{subItem[0]}</Text> 
                  </View>
                )}
                keyExtractor={(subItem, index) => index.toString()}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={estilos.txtBotao}>Entrada</Text>
        <FlatList
          data={Object.entries(this.state.entrada)}
          renderItem={({ item }) => (
            <View>
              
              <FlatList
                data={Object.entries(item[1])}
                renderItem={({ item: subItem }) => (
                  <View>
                    <Text style={estilos.txtColuna}>{subItem[0]}: {subItem[1]}</Text> 
                  </View>
                )}
                keyExtractor={(subItem, index) => index.toString()}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: '#00CED1',
    flex: 1,
  },
  txtColuna:{
    color: "black",
    fontSize: 20,
    alignSelf: "left",
    fontWeight: "bold",

  },
  txtBotao: {
    color: "white",
    fontSize: 18,
    alignSelf: "left",
    fontWeight: "bold",
  },
});

export default Listar;
