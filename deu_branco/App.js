import * as React from 'react';
import { TextInput, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Paragraph, Title } from 'react-native-paper';
import Salvar from './components/Salvar'
import Login from './components/Login'
import Menu from './components/menu'
import Cad from './components/Cad'



const Tab = createBottomTabNavigator();
const Navegacao = createStackNavigator();



class Ideia extends React.Component{
    render(){
      return(
         <View style = {styles.container}>
         <TouchableOpacity style={styles.button} onPress={()=>this.goToCadastro()}>
        <Text>Vasculhar minha mente</Text>
      </TouchableOpacity>
      
    </View>
      );
    }

}



class MegaMente extends React.Component {
  render() {
    return (
        <Navegacao.Navigator>
          <Navegacao.Screen name="Mente Compartilhada" component={Salvar} />
          <Navegacao.Screen name="Menu" component={Menu}/>
          <Navegacao.Screen name="Ideia" component={Ideia}/>
          <Navegacao.Screen name="Cad" component={Cad}/>
          <Navegacao.Screen name="Login" component={Login}/>

          
       </Navegacao.Navigator>
    );
  }
}


class App extends React.Component {

  render() {
    return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mente Compartilhada" component={MegaMente} 
          options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home-account" color={color} size={size}/>),
            headerShown: false
            
          }}
        />
        <Tab.Screen name="Minha Mente" component={Menu}
          options={{
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account-details" color={color} size={size}/>)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    marginBottom: '10px',
    alignItems: 'center',
    backgroundColor: "light-orange",
    padding: 10,
    borderWidth: 2,
    borderColor: "darkblue",
  },
  
  
});


export default App;