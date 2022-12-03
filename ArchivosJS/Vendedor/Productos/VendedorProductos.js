import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
    };
  }
  componentDidMount(){
    let _this = this
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
      var result=(xhttp.responseText);   
      console.log(result);
      var datos= JSON.parse(result);
      _this.setState({datosServer:datos});
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarProductos.php", true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const PressedButton = () => {
        this.props.navigation.navigate('VendedorProductoNuevo');
    }
    var pasar=this.props;
    const getItem=(numeroCelda,ProductoMono,PrecioMono,imagenMono)=>{
      console.log(numeroCelda);
      //ir a la siguiente ventana con variables
      pasar=pasar.navigation.navigate("VendedorEditarProducto",{id:numeroCelda,producto:ProductoMono,precio:PrecioMono,imagen:imagenMono})
    }
    let recibir= this.props.route.params
    const celda =({item})=>{
      return(
      <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
        <TouchableOpacity onPress={()=>getItem(item.id,item.Producto,item.Precio,item.Imagen)}>
            <Text style={styles.texts} >ID: {item.id}</Text>
          <Text style={styles.texts} >Producto: {item.Producto}</Text>
          <Text style={styles.texts}>Precio: {item.Precio}$</Text>
          <Text style={styles.texts}>Imagen: {item.Imagen}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    return (
      <View> 
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
        <View style={{marginTop:10, Color:'black'}}>
        <Button title = 'Agregar Producto' onPress={() => PressedButton()}>
        </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    texts:{
      fontSize:11,
      color:"orange",
      backgroundColor:"#1f1f1f",
    },
    textst:{
      fontSize:30,
      color:"#b28e4d",
      textAlign:"center",
      backgroundColor:"black",
    }
  });