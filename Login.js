//importacion de los objetos
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
        codigo:"",
        nip:"",
        nip2:"",
        codigo2:"",
        textousuario:"Usuario",
        textopassword:"Password"
    };
  }

  render() {
    const { navigate} = this.props.navigation;
    let _this=this;
      //programacion en JS de los objetos
      const btnClick = () => {
        //pasar para otra ventana
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
          var result=(xhttp.responseText);   
          if (result== '0[]') {
            alert("Datos Incorrectos");
          }
          else{
            let recibe = xhttp.responseText
            let datos= recibe.split(',')
            //obtener el nombre del vendedor
            let nombre = datos[3].split('"')
            console.log(nombre[3])
            _this.setState({textousuario: "Usuario"})
            _this.setState({textopassword: "Password"})
            navigate("EmpezarCarrito",{nombre:nombre[3]})
          }
        }
    };
    xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/CuentasUsuarioMostrar.php?usuario="+this.state.codigo+"&password="+this.state.nip, true);
    xhttp.send();
          }
      const btnClick2 = () => {
        //pasar para otra ventana
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
          var result=(xhttp.responseText);   
          if (result== '0[]') {
            alert("Datos Incorrectos");
          }
          else{
            let recibe = xhttp.responseText
            let datos= recibe.split(',')
            //obtener el nombre del vendedor
            let nombre = datos[3].split('"')
            console.log(nombre[3])
            _this.setState({textousuario: "Usuario"})
            _this.setState({textopassword: "Password"})
            navigate("VendedorInicio",{nombre:nombre[3]})
          }
        }
};
xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/CuentasAdminMostrar.php?usuario="+this.state.codigo2+"&password="+this.state.nip2, true);
xhttp.send();
      }
      const btnClick3 = () => {
        navigate("REGISTRO")
      }
    return (
      <View style={styles.screen}>
        <Image style={styles.logo} source={require("./Imagenes/logo.png")}/>
        <Text style={styles.text}>COMPRADOR</Text>
        <TextInput style={styles.input} placeholder={this.state.textousuario}  onChangeText={codigo => this.setState({codigo})}/>
        <TextInput style={styles.input} placeholder={this.state.textopassword} secureTextEntry={true} onChangeText={nip => this.setState({nip})}/>
          <View style={styles.boton1}>
            <Button title="Ingresar"  onPress={btnClick}></Button>
            <Button title="Registrarse" color="red"  onPress={btnClick3}></Button>
          </View>
        <Text style={styles.text}>TIENDA</Text>
        <TextInput style={styles.input} placeholder={this.state.textousuario} onChangeText={codigo2 => this.setState({codigo2})}/>
        <TextInput style={styles.input} placeholder={this.state.textopassword} secureTextEntry={true} onChangeText={nip2 => this.setState({nip2})}/>
        <View style={styles.boton}>
          <Button title="Ingresar" onPress={btnClick2}></Button>
        </View>
      </View>
      
    );
  }
}//declaracion de variables
const styles = StyleSheet.create({
screen:{
  backgroundColor: "#1f1f1f",
  flex: 1,
},
text:{
fontSize:25,
color:"#b28e4d",
textAlign:"center",
},
logo:{
marginTop:5,
width:200,
height:200,
resizeMode:"contain",
marginLeft:105,
},
input:{
    borderWidth: 2,
    fontSize:25,
    marginTop:5,
    marginHorizontal:10,
    padding: 5,
    backgroundColor:"#b28e4d",
},
boton1:{
  width:200,
  height:35.5,
  marginTop:10,
  marginBottom:14,
  marginLeft:115,
  flexDirection:"row",
  justifyContent:"space-between",
},
boton:{
  width:100,
  height:35.5,
  marginLeft:150,
  marginTop:10,
  marginBottom:14,
},
})