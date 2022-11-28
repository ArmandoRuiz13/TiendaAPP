import SelectDropdown from 'react-native-select-dropdown'
import { Text, View, Button,TextInput,Image } from 'react-native'
import React, { Component} from 'react'


//Seleccionar un registro para eliminar
export default class Bajas extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datosServer: "",
        id: this.props.route.params.id,
        nombre: this.props.route.params.nombre,
        edad:this.props.route.params.edad,
        imagen: this.props.route.params.imagen,
        Nnombre:"",
        Nedad:"",
        Nimagen:"",
    };
  }
    render() {
      const {navigate} = this.props.navigation;
        const PressedButtonRegresar = () => {
            navigate("VendedorRepartidores");
        }
        const PressedButtonDelete = () => {
            alert('Registro eliminado')
                let _this = this
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                    var result=(xhttp.responseText);
                    if(result=="1"){
                        alert("Repartidor eliminado");
                        navigate("VendedorRepartidores");
                    }
                    else{
                        alert("Error al eliminar");
                    }
                }
            };
            xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/EliminarRepartidor.php?id="+this.state.id, true);   
            xhttp.send();
    }
        const RestaurarValores = () => {  
            this.setState({Nnombre: ""});
            this.setState({Nedad: ""});
            this.setState({Nimagen: ""});
          }
        const MensajeError = () => {
            alert("Error al actualizar el registro");
        }
        const MensajeExito = () => {
            alert("Registro actualizado con exito");
            navigate('VendedorRepartidores');
        }  
        let _this = this
        const PressedButton = () => {
            if(this.state.Nnombre == "" || this.state.Nedad == "" || this.state.Nimagen == ""){
                alert("No hay nada que modificar");
            }if(this.state.Nedad == "" || this.state.Nimagen == ""){
              const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                  //console.log(xhttp.responseText);
                  if(xhttp.responseText != 0){
                    MensajeExito();
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
                };
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.Nnombre+"&edad="+this.state.edad+"&imagen="+this.state.imagen, true);   
                xhttp.send();
            }if(this.state.Nimagen == ""){
              const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                  //console.log(xhttp.responseText);
                  if(xhttp.responseText != 0){
                    MensajeExito();
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
                };
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.Nnombre+"&edad="+this.state.Nedad+"&imagen="+this.state.imagen, true);   
                xhttp.send();
            }if(this.state.Nedad == ""){
                const xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    //console.log(xhttp.responseText);
                    if(xhttp.responseText != 0){
                        MensajeExito();
                        RestaurarValores();           
                      }else{
                        MensajeError();
                      }
                    }
                  };
                  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.Nnombre+"&edad="+this.state.edad+"&imagen="+this.state.Nimagen, true);   
                  xhttp.send();
            //Aqui inicia para modificar edad y conjuntos
              }if(this.state.Nnombre == "" || this.state.imagen == ""){
                const xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    //console.log(xhttp.responseText);
                    if(xhttp.responseText != 0){
                        MensajeExito();
                        RestaurarValores();           
                      }else{
                        MensajeError();
                      }
                    }
                  };
                  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.nombre+"&edad="+this.state.Nedad+"&imagen="+this.state.imagen, true);   
                  xhttp.send();
              }if(this.state.Nnombre == ""){
              const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                  //console.log(xhttp.responseText);
                  if(xhttp.responseText != 0){
                    MensajeExito();
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
                };
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.nombre+"&edad="+this.state.Nedad+"&imagen="+this.state.Nimagen, true);   
                xhttp.send();
            }if(this.state.Nnombre == "" || this.state.Nedad == ""){
                const xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    //console.log(xhttp.responseText);
                    if(xhttp.responseText != 0){
                        MensajeExito();  
                        RestaurarValores();           
                      }else{
                        MensajeError();
                      }
                    }
                  };
                  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.nombre+"&edad="+this.state.edad+"&imagen="+this.state.Nimagen, true);   
                  xhttp.send();
              }
            if (this.state.Nnombre != "" || this.state.Nedad != "" || this.state.Nimagen != ""){
            const xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function(){
                  if(xhttp.readyState == 4 && xhttp.status == 200){
                    if(xhttp.responseText != 0){
                      MensajeExito();  
                      RestaurarValores();           
                    }else{
                      MensajeError();
                    }
                  }
              };
              xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarRepartidores.php?id="+this.state.id+"&nombre="+this.state.Nnombre+"&edad="+this.state.Nedad+"&imagen="+this.state.Nimagen, true);   
              xhttp.send();
            }
        }
        return (
            <View>
                <Text style={{fontSize:30,margin: 10}}>Registro a modificar:</Text>
                <Text style={{fontSize:20,margin: 10}}>ID: {this.state.id}</Text>
                <Text style={{fontSize:20,margin: 10}}>Nombre: {this.state.nombre}</Text>
                <Text style={{fontSize:20,margin: 10}}>Edad: {this.state.edad}</Text>
                <Image style={{width: 150,height:70}} source ={{uri:this.state.imagen ? this.state.imagenInfo:null}}></Image>
                <Text style={{textAlign:'center'}}>Nombre:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:5,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {Nnombre => this.setState({Nnombre})}  />
                </View>
                <Text style={{textAlign:'center'}}>Edad:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:5,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {Nedad => this.setState({Nedad})}  />
                </View>
                <Text style={{textAlign:'center'}}>Imagen:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:25,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {Nimagen => this.setState({Nimagen})}  />
                </View>
                <Button title = 'Actualizar' onPress={() => PressedButton()}>
                </Button>
                <View style={{marginTop:10}}>
                <Button title = 'Regresar' onPress={() => PressedButtonRegresar()}>
                </Button>
                </View>
                <View style={{marginTop:10, Color:'black'}}>
                <Button title = 'Eliminar' onPress={() => PressedButtonDelete()}>
                </Button>
                </View>
            
                </View>
            
        )
  }        
};