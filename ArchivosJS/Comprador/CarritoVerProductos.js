import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
      //numero aleatorio
      numero: Math.floor(Math.random() * 10000),
      Carritostatus:"",
    };
  }
  componentDidMount(){
    let _this = this
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
      var result=(xhttp.responseText);   
      if (result=="Carrito Vacio"){
        _this.setState({Carritostatus:result});
      }
      else{
      var datos= JSON.parse(result);
      _this.setState({Carritostatus:'Elementos del carrito: '+datos.length});
      _this.setState({datosServer:datos});
      }
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarCarritoP.php", true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const { navigate} = this.props.navigation;
    const btnClick = () => {
        navigate("CompradorInicio");
      }
    const btnClick1 = () => {
      let _this = this
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var result=(xhttp.responseText);   
        console.log(result);
        navigate("CompradorPedido",{numero:_this.state.numero});
      }
    }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/CrearPedido.php?Npedido="+this.state.numero, true);
  xhttp.send();
      }
    const getItem=(IDProducto)=>{
      alert("Se quito del carrito ");
      let _this = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var result=(xhttp.responseText);   
          console.log(result);
          var datos= JSON.parse(result);
          console.log(IDProducto);
          _this.setState({datosServer:datos});
        }
      }
    xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/EliminarProductoCarrito.php?id="+IDProducto, true);
    xhttp.send();
    }
    const celda =({item})=>{
      return(
        <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
        <TouchableOpacity onPress={()=>getItem(item.id) }>
          <Text style={styles.texts}>ID: {item.id}</Text>
          <Text style={styles.texts}>Producto: {item.Producto}</Text>
          <Text style={styles.texts}>Precio: {item.Precio}$</Text>
          <Text style={styles.texts}>Imagen: {item.Imagen}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>Selecciona un producto para quitar del carrito</Text>
        <Text style={styles.textsll}>{this.state.Carritostatus}</Text>  
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
        <Text style={styles.textsll}>{}</Text> 
        <View style={styles.boton}>
          <Button title="Agregar mas Producto" style={{color:'yellow'}} onPress={btnClick}></Button>
        </View>
        <View style={styles.boton}>
          <Button title="Crear Pedido" style={{color:'yellow'}} onPress={btnClick1}></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  texts:{
    fontSize:12,
    color:"orange",
    backgroundColor:"gray",
  },
  textsl:{
    fontSize:20,
    color:"orange",
    backgroundColor:"gray",
    textAlign:"center",
  },
  textsll:{
    fontSize:30,
    color:"Gray",
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