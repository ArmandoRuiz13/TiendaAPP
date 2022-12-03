import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
      numero: props.route.params.numero,
      repartidor:"",
      estatus:"",
      cantidad:props.route.params.cantidad,
      nombre:props.route.params.nombre,
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
      //numero de productos
        var estatus=datos[0].Estatus;
        var repartidor=datos[0].Repartidor;
        _this.setState({estatus:estatus});
        _this.setState({repartidor:repartidor});
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/TotalPedidosBusqueda.php?id="+this.state.numero, true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const {navigate} = this.props.navigation;
    
    const btnClick = () => {
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
      xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarPedido.php?Npedido="+this.state.numero, true);
      xhttp.send();
    }
    const btnClick1 = () => {
        navigate("EmpezarCarrito",{nombre:this.state.nombre});
    }
    const celda =({item})=>{
      return(
        <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
          <Text style={styles.texts}>Producto: {item.Producto}</Text>
          <Text style={styles.texts}>Precio: {item.Precio}$</Text>
          <Text style={styles.texts}>Imagen: {item.Imagen}</Text>
      </View>
      )
    }
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>PEDIDO #{this.state.numero}</Text>
        <Text style={styles.textsl}>REPARTIDOR: {this.state.repartidor}</Text>
        <Text style={styles.textsl}>CANTIDAD PRODUCTOS: {this.state.cantidad}</Text>
        <Text style={styles.textsl}>ESTATUS: {this.state.estatus}</Text>  
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
         <Text style={styles.textsl}>MAPA: {this.state.repartidor}</Text>
         <View style={styles.boton}>
          <Button title="Ver Productos" style={{color:'yellow'}} onPress={btnClick}></Button>
        </View>
        <View style={styles.boton}>
          <Button title="Nuevo Pedido" style={{color:'yellow'}} onPress={btnClick1}></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  texts:{
    fontSize:20,
    color:"orange",
    backgroundColor:"gray",
    textAlign:"center",
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