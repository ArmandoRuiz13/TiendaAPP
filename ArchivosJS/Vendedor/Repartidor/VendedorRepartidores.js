import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer:"",
      reapartidores:"",
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
      _this.setState({reapartidores:result});
     }else{
      var datos= JSON.parse(result);
      _this.setState({reapartidores:datos.length});
      _this.setState({datosServer:datos});
     }
    }
  }
  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarRepartidores.php", true);
  xhttp.send();
}
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const {navigate} = this.props.navigation;
    const PressedButton = () => {
        navigate('VendedorRepartidorNuevo');
    }
    var pasar=this.props;
    const getItem=(numeroCelda,ProductoMono,PrecioMono,imagenMono)=>{
      console.log(numeroCelda);
      //ir a la siguiente ventana con variables
      navigate("VendedorEditarRepartidor",{id:numeroCelda,nombre:ProductoMono,edad:PrecioMono,imagen:imagenMono})
    }
    const celda =({item})=>{
      return(
      <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
        <TouchableOpacity onPress={()=>getItem(item.id,item.Nombre,item.Edad,item.Imagen)}>
            <Text style={styles.texts} >ID: {item.id}</Text>
          <Text style={styles.texts} >Nombre: {item.Nombre}</Text>
          <Text style={styles.texts}>Edad: {item.Edad}</Text>
          <Text style={styles.texts}>Imagen: {item.Imagen}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>REPARTIDORES: {this.state.reapartidores}</Text> 
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
        <View style={{marginTop:10, Color:'black'}}>
        <Button title = 'Agregar repartidor' onPress={() => PressedButton()}>
        </Button>
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