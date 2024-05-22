import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from '../config/config'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Navegacao = createStackNavigator();

class Menu extends React.Component {
  render(){
    return(
      <View style= {estilos.fundo}> 
       
        <TouchableHighlight style={estilos.botao} onPress={()=>this.goToLogin()}>
          <Text style={estilos.txtBotao} >{"Logar"}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={estilos.botao} onPress={()=>this.goToCad()}>
          <Text style={estilos.txtBotao} >{"Cadastrar"}</Text>
        </TouchableHighlight>
        
        
      </View>
    )
    
  }

  goToCad(){
    this.props.navigation.navigate("Cad");

  }
  goToLogin(){
    this.props.navigation.navigate("Login");
  }
}


const estilos = StyleSheet.create({
  fundo:{
      backgroundColor: '#00CED1',
      flex: 10,
  },
  txtBotao: {
    color: "white",
    fontSize: 25,
    alignSelf: "center"
  },
  botao: {
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#FF8C00',
    margin: 10,
    borderRadius: 8,
    padding: 5,
  },
  
});

export default Menu;