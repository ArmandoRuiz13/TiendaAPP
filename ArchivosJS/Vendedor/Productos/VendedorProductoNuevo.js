import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      producto: "",
      precio: "",
      imagen: "",      
      textoproducto: "Ingrese el producto..",
      textoprecio: "Ingrese el precio..",
      textoImagen: "Ingrese URL de la imagen..",
    };
  }

  render() {    
    const PressedButtonRegresar = () => {
        this.props.navigation.navigate("VendedorProductos");
    }
    const _this = this;    

    const RestaurarValores = () => {  
      this.setState({textoproducto: "Ingrese el producto.."});
      this.setState({textoprecio: "Ingrese el código.."});
      this.setState({textoImagen: "Ingrese URL de la imagen.."});
      this.setState({producto: ""});
      this.setState({precio: ""});
      this.setState({imagen: ""});
    }

    const Exito = () => {
      alert("El registro se ha dado de alta :D");
    }

    const MensajeError = () => {
      alert("No se pudo dar de alta el registro");
    }

    const PressedButton = () => {

      if(this.state.producto == "" || this.state.precio == "" || this.state.imagen == ""){
        MensajeError();
      }else{

        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(xhttp.readyState == 4 && xhttp.status == 200){
              console.log(xhttp.responseText);
              if(xhttp.responseText != 0){
                Exito();   
                RestaurarValores();           
              }else{
                MensajeError();
              }
            }
        };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ProductoAlta.php?producto="+_this.state.producto+"&precio="+_this.state.precio+"&imagen="+_this.state.imagen, true);      
        xhttp.send();          
      }      
    }

    return (
      <ImageBackground  source={require("./../../../Imagenes/fondo.jpg")} style ={{flex:1}}>
        <Text style = {styles.estPrincipal}> Realizar alta de producto </Text>
        <TextInput 
          style = {styles.estInput} 
          placeholder = {this.state.textoproducto}
          onChangeText = {producto => this.setState({producto})}          
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textoprecio}
          keyboardType='numeric'
          onChangeText={precio => this.setState({precio})}             
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textoImagen}
          onChangeText={imagen => this.setState({imagen})}
        />
        <View style = {styles.estBoton}>
          <Button
            title = 'registrar'
            onPress={() => PressedButton()}            
            >
          </Button>
        </View>
        <View style = {styles.estBoton}>
          <Button
            title = 'Regresar'
            onPress={() => PressedButtonRegresar()}            
            >
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  estPrincipal:{
    alignSelf:"center",
    fontSize:22,
    color:"black",
    marginTop:25,
    marginBottom: 15
  },

  estBoton:{
    marginTop:30,
    alignSelf: "center",
    width:120,
    height:100    
  },

  estInput:{
    marginTop:20,
    marginLeft: 25,
    marginRight: 30,
    borderWidth:2,
    fontSize: 18
  }

});