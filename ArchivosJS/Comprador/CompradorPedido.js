import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
      numero: props.route.params.numero,
      cantidad: "",
      repartidor:"Pendiente",
      estatus:"Pendiente",
      nombre: props.route.params.nombre,
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
      //cantidad de productos
      var cantidad=datos.length;
      _this.setState({cantidad:cantidad});
      _this.setState({datosServer:datos});
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarPedido.php?Npedido="+this.state.numero, true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const {navigate} = this.props.navigation;
    
    btnClick = () => {
    let _this = this
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
      var result=(xhttp.responseText);
      console.log(result);
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/TotalPedidoAdd.php?id="+this.state.numero+"&repartidor="+this.state.repartidor+"&nproductos="+this.state.cantidad+"&estatus="+this.state.estatus, true);
  xhttp.send();
      navigate("CompradorPedidoFinal",{numero:_this.state.numero,cantidad:_this.state.cantidad,nombre:_this.state.nombre});
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
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
         <Text style={styles.textsl}>MAPA: {this.state.repartidor}</Text>
         <Button title="Completar Pedido" style={{color:'yellow'}} onPress={btnClick}></Button>
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