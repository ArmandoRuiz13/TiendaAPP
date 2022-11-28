import SelectDropdown from 'react-native-select-dropdown'
import React, { Component } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';


//Seleccionar un registro para eliminar
export default class Bajas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosServer: "",
            numero: props.route.params.id,
            repartidor: props.route.params.Repartidor,
            cantidad: props.route.params.Productos,
            estatus: props.route.params.estatus,
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
          //crear arreglo con los nombres de los registros
            var arreglo=[];
            for (let i = 0; i < datos.length; i++) {
                arreglo.push(datos[i].Nombre);
            }
          _this.setState({datosServer:arreglo});
        }
      }
      xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/MostrarRepartidores.php", true);
      xhttp.send();
    }
    render() {
        const { navigate} = this.props.navigation;
          const Exito = () => {
            alert("El pedido se actualizo correctamente");
          }
      
          const MensajeError = () => {
            alert("Ese repartidor ya esta asignado");
          }
        let _this = this
        const btnClick = () => {
            if(this.state.repartidor == this.props.route.params.Repartidor){
                MensajeError();
            }else{
            const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    console.log(xhttp.responseText);
                    if(xhttp.responseText != 0){
                      Exito();
                      navigate("VendedorPedidos");             
                    }else{
                      MensajeError();
                    }
                  }
              };
              xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/TotalPedidosAceptar.php?id="+this.state.numero+"&repartidor="+this.state.repartidor+"&estatus=Aceptado", true);      
              xhttp.send();
            }
        }
        const btnClick1 = () => {
            navigate('VendedorProductosPedido',{numero:this.state.numero,repartidor:this.state.repartidor,cantidad:this.state.cantidad,estatus:this.state.estatus});
        }
        const btnClick2 = () => {
            navigate("VendedorPedidos");
        }
        const btnClick3 = () => {
            let _this = this
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var result=(xhttp.responseText);   
                console.log(result);
                navigate("VendedorPedidos");
            }
            }
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/EliminarPedido.php?id="+this.state.numero, true);
        xhttp.send();
        }
        const btnClick4 = () => {
            const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    console.log(xhttp.responseText);
                    if(xhttp.responseText != 0){
                      Exito();
                      navigate("VendedorPedidos");              
                    }else{
                      alert("No se pudo cancelar el pedido");
                    }
                  }
              };
              xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/TotalPedidosAceptar.php?id="+this.state.numero+"&repartidor=Pendiente&estatus=Pendiente", true);      
              xhttp.send();
        }

        const informacion = this.state.datosServer;
        return (
            <View>
                <Text style={styles.textst}>FLORACTIVE</Text>
                <Text style={styles.textsl}>PEDIDO #{this.state.numero}</Text>
                <Text style={styles.textsl}>REPARTIDOR: {this.state.repartidor}</Text>
                <Text style={styles.textsl}>CANTIDAD PRODUCTOS: {this.state.cantidad}</Text>
                <Text style={styles.textsl}>ESTATUS: {this.state.estatus}</Text> 
                <View style ={{margin:10,borderWidth:1,borderBottomColor:"black",marginBottom:10}}>
                    <Text >Selecciona un repartidor si deseas cambiarlo:</Text>
                    <SelectDropdown style={{margin: 10, backgroundColor: '#fff', borderRadius: 5, borderWidth: 1, borderColor: '#ccc', padding: 10, width: 300, height: 50}}
                        data={informacion}
                        onSelect={(selectedItem, index) => {
                            this.setState({repartidor: selectedItem});
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                </View> 
                <View style={styles.boton}>
                <Button title = 'Ver Productos & Mapa' onPress={btnClick1}></Button>
                </View>
                <View style={styles.boton}>
                <Button title = 'Cambiar Repartidor' onPress={btnClick}></Button>
                </View>
                <View style={styles.boton}>
                <Button title = 'Cancelar Pedido' onPress={btnClick4}></Button>
                </View>
                <View style={styles.boton}>
                <Button title = 'Eliminar Pedido' onPress={btnClick3}></Button>
                </View>
                <View style={styles.boton}>
                <Button title = 'Regresar' onPress={btnClick2}></Button>
                </View>
            </View>
            
        )
  }        
};
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