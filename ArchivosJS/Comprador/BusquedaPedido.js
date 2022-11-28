import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity,Button,TextInput} from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datosServer:"",
        numero:"0",
        estatus:"",
        repartidor:"",
    };
  }
// {this.props.route.params.nombre} parametro para recibir
  render() {
    const { navigate} = this.props.navigation;
    const btnClick = () => {
        let _this = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var result=(xhttp.responseText);
        if (result=="0"){
            alert("No se encontro el pedido");
        }
        else{   
            var datos= JSON.parse(result);
            var estatus=datos[0].Estatus;
            var repartidor=datos[0].Repartidor;
            _this.setState({estatus:estatus});
            _this.setState({repartidor:repartidor});
            _this.setState({datosServer:datos});
        }
        }
        else{
            console.log("Aun no ingresa datos");
        }
    }
    xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/TotalPedidosBusqueda.php?id="+this.state.numero, true);
    xhttp.send();
    }
    const btnClick1 = () => {
        navigate("EmpezarCarrito");
    }
    const celda =({item})=>{
      return(
        <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
            <Text style={styles.textsl}>Pedido: #{item.id}</Text>
            <Text style={styles.textsl}>REPARTIDOR: {this.state.repartidor}</Text>
            <Text style={styles.textsl}>ESTATUS: {this.state.estatus}</Text>

      </View>
      )
    }
    console.log(this.state.numero)
    return (
      <View>
        <Text style={styles.textst}>FLORACTIVE</Text>
        <Text style={styles.textsl}>Ingresa numero del pedido</Text>
        <TextInput style={styles.input} placeholder="PEDIDO #" keyboardType='numeric' onChangeText={numero => this.setState({numero})}/>
        <Text style={styles.textsll}>{this.state.Carritostatus}</Text>  
        <FlatList
        data={this.state.datosServer}
        renderItem={celda}
        keyExtractor={(item,index)=>index.toString()}
        />
        <Text style={styles.textsll}>{}</Text> 
        <View style={styles.boton}>
          <Button title="Buscar" style={{color:'yellow'}} onPress={btnClick}></Button>
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
  input:{
    borderWidth: 2,
    fontSize:25,
    marginTop:5,
    marginHorizontal:10,
    padding: 5,
    backgroundColor:"#b28e4d",
},
});