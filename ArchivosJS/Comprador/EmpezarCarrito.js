//importacion de los objetos
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.route.params.nombre,
    };
  }

  render() {
      //programacion en JS de los objetos
      const { navigate} = this.props.navigation;
      let _this=this;
      const btnClick = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          navigate("CompradorInicio",{nombre:_this.state.nombre});
       // Typical action to be performed when the document is ready: 
        }
};
xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/EliminarDatosCarrito.php", true);
xhttp.send();
      }
      const btnClick1 = () => {
        navigate("BusquedaPedido",{nombre:_this.state.nombre});
      }
      const btnClick2 = () => {
        navigate("LOGIN")
      }
    return (
      <View style={styles.screen}>
        <Image style={styles.logo} source={require("./../../Imagenes/logo.png")}/>
        <Text style={styles.text}>BIENVENIDO</Text>
        <Text style={styles.text}>{this.state.nombre.toUpperCase()}</Text>
        <View style={styles.boton}>
          <Button title="EMPEZAR COMPRA" style={{color:'yellow'}} onPress={btnClick}></Button>
        </View>
        <View style={styles.boton}>
          <Button title="Buscar pedido" style={{color:'yellow'}} onPress={btnClick1}></Button>
        </View>
        <View style={styles.boton}>
          <Button title="Salir" color='red' onPress={btnClick2}></Button>
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
marginBottom:10,
},
logo:{
width:200,
height:200,
resizeMode:"contain",
marginLeft:105,
marginTop:50,
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
  width:150,
  height:35.5,
  marginLeft:131,
  marginTop:10,
  marginBottom:20,
},
})