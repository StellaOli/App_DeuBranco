import * as React from 'react';
import { TextInput, Text, View, FlatList } from 'react-native';
import firebase from '../config/config'

class Listar extends React.Component {
  constructor(props){
    super(props);
    this.marca = ""
    this.quantidade = 0
    this.state = {
      notebooks: []
    }
  }
//Listar todos os componentes do banco de dados mas ao inves de printar, comparar com a array de caracteristicas e baseado na porcentagem retornar o nome da coluna ou retornar que não possui a informação
  componentDidMount(){
      firebase.database().ref("notebooks").on('value', snapshot =>{
          let data = snapshot.val();
          let dados = Object.values(data)
          this.setState({notebooks: dados})
      })
  }
  
  
  render(){
    return(
      <View>
      {this.state.notebooks.length > 0 ? 
      <FlatList
        data = {this.state.notebooks}
        renderItem= {( {item} ) => 
        <View>
          <Text>{item.marca} {item.quantidade}</Text>
        </View>} /> : null }
      </View>
    )
  }
}

export default Listar;