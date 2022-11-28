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
        producto: this.props.route.params.producto,
        precio:this.props.route.params.precio,
        imagen: this.props.route.params.imagen,
        nproducto:null,
        nprecio:null,
        nimagen:null,
    };
  }
    render() {
        const PressedButtonRegresar = () => {
            this.props.navigation.navigate("VendedorProductos")
        }
        const PressedButtonDelete = () => {
            alert('Registro eliminado')
                let _this = this
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                    var result=(xhttp.responseText);
                    console.log(result);
                    if(result=="1"){
                        alert("Producto eliminado");
                        _this.props.navigation.navigate("VendedorInicio");
                    }
                    else{
                        alert("Error al eliminar");
                    }
                }
            };
            xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/EliminarProducto.php?id="+this.state.id, true);   
            xhttp.send();
    }
        const RestaurarValores = () => {  
            this.setState({nproducto: null});
            this.setState({nprecio: null});
            this.setState({nimagen: null});
          }
        const MensajeError = () => {
            alert("Error al actualizar el registro");
        }
        const MensajeExito = () => {
            alert("Registro actualizado con exito");
            this.props.navigation.navigate('VendedorProductos',{});
        }  
        let _this = this
        const PressedButton = () => {
            if(this.state.nproducto == null || this.state.nprecio == null || this.state.nimagen == null){
                alert("No hay nada que modificar");
            }if(this.state.nprecio == "" || this.state.nimagen == ""){
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
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.nproducto+"&precio="+this.state.precio+"&imagen="+this.state.imagen, true);   
                xhttp.send();
            }if(this.state.nimagen == null){
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
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.nproducto+"&precio="+this.state.nprecio+"&imagen="+this.state.imagen, true);   
                xhttp.send();
            }if(this.state.nprecio == null){
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
                  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.nproducto+"&precio="+this.state.precio+"&imagen="+this.state.nimagen, true);   
                  xhttp.send();
            //Aqui inicia para modificar precio y conjuntos
              }if(this.state.nproducto == null || this.state.imagen == null){
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
                  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.producto+"&precio="+this.state.nprecio+"&imagen="+this.state.imagen, true);   
                  xhttp.send();
              }if(this.state.nproducto == null){
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
                xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.producto+"&precio="+this.state.nprecio+"&imagen="+this.state.nimagen, true);   
                xhttp.send();
            }if(this.state.nproducto == null || this.state.nprecio == null){
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
                  xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.producto+"&precio="+this.state.precio+"&imagen="+this.state.nimagen, true);   
                  xhttp.send();
              }
            if (this.state.nproducto != null && this.state.nprecio != null && this.state.nimagen != null){
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
              xhttp.open("GET", "https://pinternet13.000webhostapp.com/Tienda/ModificarProducto.php?id="+this.state.id+"&producto="+this.state.nproducto+"&precio="+this.state.nprecio+"&imagen="+this.state.nimagen, true);   
              xhttp.send();
            }
        }
        console.log(this.state.nprecio);
        return (
            <View>
                <Text style={{fontSize:30,margin: 10}}>Registro a modificar:</Text>
                <Text style={{fontSize:20,margin: 10}}>ID: {this.state.id}</Text>
                <Text style={{fontSize:20,margin: 10}}>Producto: {this.state.producto}</Text>
                <Text style={{fontSize:20,margin: 10}}>Precio: {this.state.precio}</Text>
                <Image style={{width: 150,height:70}} source ={{uri:this.state.imagen ? this.state.imagenInfo:null}}></Image>
                <Text style={{textAlign:'center'}}>Nombre:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:5,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {nproducto => this.setState({nproducto})}  />
                </View>
                <Text style={{textAlign:'center'}}>Precio:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:5,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {nprecio => this.setState({nprecio})}  />
                </View>
                <Text style={{textAlign:'center'}}>Imagen:</Text>
                <View style={{marginLeft:85, borderWidth:2, borderColor:"#460089",
                textAlign:'center', heigh:60, maxWidth:240, fontSize: 20, marginBottom:25,}}>
                <TextInput
                placeholderTextColor="#000"
                placeholder="" 
                onChangeText = {nimagen => this.setState({nimagen})}  />
                </View>
                <Button title = 'Actualizar' onPress={() => PressedButton()}></Button>
                <View style={{marginTop:10}}>
                <Button title = 'Regresar' onPress={() => PressedButtonRegresar()}></Button>
                </View>
                <View style={{marginTop:10, Color:'black'}}>
                <Button title = 'Eliminar' onPress={() => PressedButtonDelete()}></Button>
                </View>
            
                </View>
            
        )
  }        
};