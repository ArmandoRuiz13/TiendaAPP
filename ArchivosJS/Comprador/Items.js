import React, { Component } from 'react';
import { View, Text,Image,Button,StyleSheet } from 'react-native';

export default class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigate} = this.props.navigation;
    let recibir= this.props.route.params
    const btnClick = () => {
        alert("Se agrego un producto al carrito");
      let _this = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var result=(xhttp.responseText);   
          console.log(result);
          var datos= JSON.parse(result);
          _this.setState({datosServer:datos});
        }
      }
    xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ProductoCarrito.php?producto="+recibir.Producto+"&precio="+recibir.Precio+"&imagen="+recibir.Imagen, true);
    xhttp.send();
    }
    const btnClick1 = () => {
            navigate("CompradorInicio");
        }
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>Pedidos: {this.state.pedidos}</Text>
        <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
        <Text style={styles.texts}> Producto:{recibir.Producto} </Text>
        <Text style={styles.texts}> Precio: ${recibir.Precio} </Text>
        <Image style={{width: 100,height:100}} source ={{uri:recibir.Imagen}}></Image>
        </View> 
        <View style={styles.boton}>
          <Button title="AGREGAR al carrito" style={{color:'yellow'}} onPress={btnClick}></Button>
        </View>
        <View style={styles.boton}>
          <Button title="Regresar" style={{color:'yellow'}} onPress={btnClick1}></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  texts:{
    fontSize:15,
    color:"orange",
    backgroundColor:"gray",
  },texts1:{
    fontSize:15,
    color:"green",
    backgroundColor:"#2E2E2E",
  },
  texts2:{
    fontSize:15,
    color:"red",
    backgroundColor:"#2E2E2E",
  },
  
  
  textsl:{
    fontSize:20,
    color:"orange",
    backgroundColor:"#2E2E2E",
    textAlign:"center",
  },
  textst:{
    fontSize:30,
    color:"#b28e4d",
    textAlign:"center",
    backgroundColor:"black",
  },
  boton:{
    width:200,
    height:40,
    marginTop:10,
    marginBottom:20,
    alignContent:"center",
    alignSelf:"center",

  },
});