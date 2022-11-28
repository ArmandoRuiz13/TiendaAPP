import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
      pedidos:"",
    };
  }
  componentDidMount(){
    let _this = this
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var result=(xhttp.responseText);   
     if(result=="0"){
      _this.setState({pedidos:result});
     }else{
      var datos= JSON.parse(result);
      _this.setState({pedidos:datos.length});
      _this.setState({datosServer:datos});
     }
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/TotalPedidos.php", true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const {navigate} = this.props.navigation;
    const PressedButton = () => {
        navigate('VendedorRepartidorNuevo');
    }
    const getItem=(numeroCelda,ProductoMono,PrecioMono,imagenMono)=>{
      console.log(numeroCelda);
      navigate("VendedorAceptarPedidos",{id:numeroCelda,Repartidor:ProductoMono,Productos:PrecioMono,estatus:imagenMono})
    }
    const getItem1=(numeroCelda,ProductoMono,PrecioMono,imagenMono)=>{
      console.log(numeroCelda);
      navigate("VendedorPedidosAceptados",{id:numeroCelda,Repartidor:ProductoMono,Productos:PrecioMono,estatus:imagenMono})
    }
    const celda =({item})=>{
        if (item.Estatus=="Pendiente"){
            return(
                <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
                <TouchableOpacity onPress={()=>getItem(item.id,item.Repartidor,item.NumProductos,item.Estatus)}>
                    <Text style={styles.texts} >Pedido : #{item.id}</Text>
                    <Text style={styles.texts} >Repartidor: {item.Repartidor}</Text>
                    <Text style={styles.texts}>Productos: {item.NumProductos}</Text>
                    <Text style={styles.texts2}>Estatus: {item.Estatus}</Text>
                </TouchableOpacity>
              </View>
              )
        }else{
        return(
        <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
            <TouchableOpacity onPress={()=>getItem1(item.id,item.Repartidor,item.NumProductos,item.Estatus)}>
                <Text style={styles.texts} >Pedido : #{item.id}</Text>
                <Text style={styles.texts} >Repartidor: {item.Repartidor}</Text>
                <Text style={styles.texts}>Productos: {item.NumProductos}</Text>
                <Text style={styles.texts1}>Estatus: {item.Estatus}</Text>
            </TouchableOpacity>
        </View>
      )
    }
}
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>Pedidos: {this.state.pedidos}</Text> 
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
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