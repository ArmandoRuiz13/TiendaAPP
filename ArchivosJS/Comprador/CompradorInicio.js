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
      var datos= JSON.parse(result);
      _this.setState({datosServer:datos});
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarProductos.php", true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const {navigate} = this.props.navigation;
    const btnClick = () => {
        navigate("CarritoVerProductos");
      }
    const getItem=(ProductoID,ProductoNombre,ProductoPrecio,ProductoImagen)=>{
      //ir a la siguiente ventana con variables
      navigate("Items",{id:ProductoID,Producto:ProductoNombre,Precio:ProductoPrecio,Imagen:ProductoImagen})
    }
    const celda =({item})=>{
      return(
      <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
        <TouchableOpacity onPress={()=>getItem(item.id,item.Producto,item.Precio,item.Imagen)}>
          <Text style={styles.texts} >Producto: {item.Producto}</Text>
          <Text style={styles.texts}>Precio: {item.Precio}$</Text>
          <Text style={styles.texts}>Imagen: {item.Imagen}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>Selecciona un producto para agregar al carrito</Text>  
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
        <View>
          <Button title="Ver Carrito" style={{color:'yellow'}} onPress={btnClick}></Button>
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
  textst:{
    fontSize:30,
    color:"#b28e4d",
    textAlign:"center",
    backgroundColor:"black",
  },
  boton:{
    width:150,
    height:35.5,
    marginLeft:131,
    marginTop:10,
    marginBottom:20,
  },
});