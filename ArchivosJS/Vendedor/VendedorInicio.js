//importacion de los objetos
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
    };
  }

  render() {
      //programacion en JS de los objetos
      const {navigate} = this.props.navigation;
      const btnClick1 = () => {
        navigate("VendedorProductos",{})
      }
      const btnClick2 = () => { 
        navigate("VendedorRepartidores")
      }
      const btnClick3 = () => {
        navigate("VendedorPedidos")
      }
    return (
      <View style={styles.screen}>
        <Text style={styles.titulo}>BIENVENIDO VENDEDOR</Text>
        <Text style={styles.titulo}>{this.props.route.params.nombre.toUpperCase()}</Text>
        <Image style={styles.logo} source={require("./../../Imagenes/logo.png")}/>
        <Text style={styles.text}>PRODUCTOS</Text>
        <View style={styles.boton}>
          <Button title="Continuar" style={{color:'yellow'}} onPress={btnClick1}></Button>
        </View>
        <Text style={styles.text}>REPARTIDOR</Text>
        <View style={styles.boton}>
          <Button title="Continuar" style={{color:'yellow'}} onPress={btnClick2}></Button>
        </View>
        <Text style={styles.text}>PEDIDOS</Text>
        <View style={styles.boton}>
          <Button title="Continuar" style={{color:'yellow'}} onPress={btnClick3}></Button>
        </View>
      </View>
      
    );
  }
}//declaracion de variables
const styles = StyleSheet.create({
screen:{
  backgroundColor: "#1f1f1f",
  flex: 1,
},
text:{
fontSize:25,
color:"#b28e4d",
textAlign:"center",
backgroundColor: "black",
},
titulo:{
  fontSize:30,
  color:"#b28e4d",
  textAlign:"center",
  backgroundColor: "black",
  },
logo:{
width:200,
height:200,
resizeMode:"contain",
marginLeft:105,
},
input:{
    borderWidth: 2,
    fontSize:25,
    marginTop:5,
    marginHorizontal:10,
    padding: 5,
    backgroundColor:"#b28e4d",
},
boton:{
  width:100,
  height:35.5,
  marginLeft:150,
  marginTop:10,
  marginBottom:20,
},
})