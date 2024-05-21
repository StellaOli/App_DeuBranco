import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableHighlight } from 'react-native';
import firebase from '../config/config'

class Login extends React.Component{
    constructor(props){
    super(props);
    this.usuario = ""
    this.senha = ""
    this.state = {
      users: []
    }
  }

buscar(){
     firebase.database().ref("users").orderByChild("usuario").equalTo(this.usuario).once('value', snapshot =>{
      let data  = snapshot.val();
      if(data == null){
        alert("Não encontrado!")
      }
      else{
        
        firebase.database().ref("users").orderByChild("senha").equalTo(this.senha).once('value', snapshot =>{
          let senha = snapshot.val();
          if(senha == null){
            alert("Senha incorreta");

          }else{
              this.props.navigation.navigate('Ideia');
          }
        })
        
      }
    })
  }

  render(){
    return(
      <View> 
        <TextInput style={estilos.input} 
          placeholder="Usuário"
          onChangeText={(texto)=>{this.usuario = texto}}
        />
        <TextInput style={estilos.input} 
          placeholder="Senha"
          onChangeText={(texto)=>{this.senha = texto}}
        />
        <TouchableHighlight style={estilos.botao} onPress={()=>this.buscar()}>
          <Text style={estilos.txtBotao} >{"Logar"}</Text>
        </TouchableHighlight>

        {this.state.users.length > 0 ? 
          this.state.users.map( objeto => (
            <Text>{objeto.usuario} {objeto.senha}</Text>)) : 
            null}
      </View>
    )
    
  }


}

const estilos = StyleSheet.create({
  txtBotao: {
    color: "black",
    fontSize: 25,
    alignSelf: "center"
  },
  botao: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: "cyan",
    margin: 10,
    borderRadius: 8,
    padding: 5,
  },
  input: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8
  }
});

export default Login;