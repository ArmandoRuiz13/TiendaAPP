import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';

export default class Altas extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      usuario: "",
      password: "",
      repetido: "",
      nombre: "",      
      textousuario: "Ingrese el usuario..",
      textopassword: "Ingrese el password.",
      textonombre: "Ingrese el nombre.",
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const ComprobarUsuario = () => {
        let _this = this
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var result=(xhttp.responseText);
          console.log(result)
          if(_this.state.usuario == ""){
            alert('El campo esta vacio')
          }
          else if (result == 1) {
            alert("Usuario ya existe");
            _this.setState({textousuario: "Intenta otro usuario"});
          }
            else {
                alert("Usuario disponible");
            }
        }
      }
      xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/CuentaAdminUsuarioRepetido.php?usuario="+this.state.usuario, true);
      xhttp.send();
    }
    const PressedButtonRegresar = () => {
        navigate("LOGIN");
    }
    const _this = this;    

    const RestaurarValores = () => {  
      this.setState({textousuario: "Ingrese el usuario.."});
      this.setState({textopassword: "Ingrese el código.."});
      this.setState({textonombre: "Ingrese URL de la nombre.."});
      this.setState({usuario: ""});
      this.setState({password: ""});
      this.setState({nombre: ""});
    }

    const Exito = () => {
      alert("El registro se ha dado de alta :D");
    }

    const MensajeError = () => {
      alert("No se pudo dar de alta el registro, rellena todos los campos");
    }

    const PressedButton = () => {
      if(this.state.usuario == "" || this.state.password == "" || this.state.nombre == ""){
        MensajeError();
      }
      //password mayor a 6 caracteres
      else if(this.state.password.length < 6){
        alert("La contraseña debe ser mayor a 6 caracteres");
      }
      else if(this.state.repetido == 1){
        alert("Ese usuario ya fue ocupado elije uno diferente");
      }else{

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState == 4 && xhttp.status == 200){
              console.log(xhttp.responseText);
              if(xhttp.responseText != 0){
                Exito();   
                navigate("EmpezarCarrito",{nombre: _this.state.nombre});          
              }else{
                MensajeError();
              }
            }
        };
        xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/CuentasUsuarioAlta.php?usuario="+_this.state.usuario+"&password="+_this.state.password+"&nombre="+_this.state.nombre, true);      
        xhttp.send();          
      }      
    }

    return (
      <ImageBackground  source={require("./Imagenes/fondo.jpg")} style ={{flex:1}}>
        <Text style = {styles.estPrincipal}> Realizar alta de usuario </Text>
        <TextInput 
          style = {styles.estInput} 
          placeholder = {this.state.textousuario}
          onChangeText = {usuario => this.setState({usuario})}          
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textopassword}
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}             
        />
        <TextInput 
          style = {styles.estInput}
          placeholder = {this.state.textonombre}
          onChangeText={nombre => this.setState({nombre})}
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
            title = 'Comprobar usuario'
            onPress={() => ComprobarUsuario()} 
            color="#841584"           
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
    height:60,    
  },

  estInput:{
    marginTop:20,
    marginLeft: 25,
    marginRight: 30,
    borderWidth:2,
    fontSize: 18
  }

});