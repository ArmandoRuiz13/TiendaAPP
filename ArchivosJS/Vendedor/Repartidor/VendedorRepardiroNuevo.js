import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      nombre: "",
      edad: "",
      imagen: "",      
      textonombre: "Ingrese el nombre..",
      textoedad: "Ingrese la edad..",
      textoImagen: "Ingrese URL de la imagen..",
    };
  }

  render() {
    const {navigate} = this.props.navigation;    
    const PressedButtonRegresar = () => {
        navigate("VendedorRepartidores");
    }
    const _this = this;    

    const RestaurarValores = () => {  
      this.setState({textonombre: "Ingrese el nombre.."});
      this.setState({textoedad: "Ingrese la edad.."});
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

      if(this.state.nombre == "" || this.state.edad == "" || this.state.imagen == ""){
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
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/RepartidorAlta.php?nombre="+_this.state.nombre+"&edad="+_this.state.edad+"&imagen="+_this.state.imagen, true);      
        xhttp.send();          
      }      
    }

    return (
      <ImageBackground  source={require("./../../../Imagenes/fondo.jpg")} style ={{flex:1}}>
        <Text style = {styles.estPrincipal}> Realizar alta del repartidor </Text>
        <TextInput 
          style = {styles.estInput} 
          placeholder = {this.state.textonombre}
          onChangeText = {nombre => this.setState({nombre})}          
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textoedad}
          keyboardType='numeric'
          onChangeText={edad => this.setState({edad})}             
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