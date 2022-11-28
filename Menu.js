// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import REGISTRO from "./Registro";
import COMPRADORINIT from './ArchivosJS/Comprador/CompradorInicio';
import EMPEZARCARRITO from './ArchivosJS/Comprador/EmpezarCarrito';
import BUSQUEDAPEDIDO from  './ArchivosJS/Comprador/BusquedaPedido';
import CARRITOVERPRODUCTOS from './ArchivosJS/Comprador/CarritoVerProductos';
import ITEMS from './ArchivosJS/Comprador/Items';
import COMPRADORPEDIDO from './ArchivosJS/Comprador/CompradorPedido';
import COMPRADORPEDIDOFINAL from './ArchivosJS/Comprador/CompradorPedidoFinal';
import VENDEDORINIT from './ArchivosJS/Vendedor/VendedorInicio';
import VENDEDORPRODUCTOS from './ArchivosJS/Vendedor/Productos/VendedorProductos';
import VENDEDOREDITARPRODUCTO from './ArchivosJS/Vendedor/Productos/VendedorEditarProducto';
import VENDEDORPRODUCTONUEVO from './ArchivosJS/Vendedor/Productos/VendedorProductoNuevo';
import VENDEDORREPARTIDORES from './ArchivosJS/Vendedor/Repartidor/VendedorRepartidores';
import VENDEDOREDITARREPARTIDOR from './ArchivosJS/Vendedor/Repartidor/VendedorEditarRepartidor';
import VENDEDORREPARTIDORNUEVO from './ArchivosJS/Vendedor/Repartidor/VendedorRepardiroNuevo';
import VENDEDORPEDIDOS from './ArchivosJS/Vendedor/Pedidos/VendedorPedidos';
import VENDEDORACEPTARPEDIDOS from './ArchivosJS/Vendedor/Pedidos/VendedorAceptarPedidos';
import VENDEDORPPRODUCTOSPEDIDO from './ArchivosJS/Vendedor/Pedidos/VendedorProductosPedido';
import VENDEDORPEDIDOSACEPTADOS from './ArchivosJS/Vendedor/Pedidos/VendedorPedidosAceptados';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Login */}
        <Stack.Screen name="LOGIN" component={LOGIN} options={{headerShown: false}}/>
        {/* Registro */}
        <Stack.Screen name="REGISTRO" component={REGISTRO} options={{headerShown: false}}/>
        {/* Comprador  PENDIENTE MEJOR DISENO ITEMS, CARRITO MAPA Y MOSTRAR*/}
        <Stack.Screen name="EmpezarCarrito" component={EMPEZARCARRITO} options={{headerShown: false}}/>
        <Stack.Screen name="BusquedaPedido" component={BUSQUEDAPEDIDO} options={{headerShown: false}}/>
        <Stack.Screen name="CompradorInicio" component={COMPRADORINIT} options={{headerShown: false}}/>
        <Stack.Screen name="CarritoVerProductos" component={CARRITOVERPRODUCTOS} options={{headerShown: false}} />
        <Stack.Screen name="Items" component={ITEMS} options={{headerShown: false}}/>
        <Stack.Screen name="CompradorPedido" component={COMPRADORPEDIDO} options={{headerShown: false}}/>
        <Stack.Screen name="CompradorPedidoFinal" component={COMPRADORPEDIDOFINAL} options={{headerShown: false}}/>
        {/* Vendedor */}
        <Stack.Screen name="VendedorInicio" component={VENDEDORINIT} options={{headerShown: false}}/>
        {/* Vendedor Productos */}
        <Stack.Screen name="VendedorProductos" component={VENDEDORPRODUCTOS} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorEditarProducto" component={VENDEDOREDITARPRODUCTO} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorProductoNuevo" component={VENDEDORPRODUCTONUEVO} options={{headerShown: false}}/>
        {/* Vendedor Repartidores*/}
        <Stack.Screen name="VendedorRepartidores" component={VENDEDORREPARTIDORES} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorEditarRepartidor" component={VENDEDOREDITARREPARTIDOR} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorRepartidorNuevo" component={VENDEDORREPARTIDORNUEVO} options={{headerShown: false}}/>
        {/* Vendedor Pedidos PENDIENTE*/}
        <Stack.Screen name="VendedorPedidos" component={VENDEDORPEDIDOS} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorAceptarPedidos" component={VENDEDORACEPTARPEDIDOS} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorProductosPedido" component={VENDEDORPPRODUCTOSPEDIDO} options={{headerShown: false}}/>
        <Stack.Screen name="VendedorPedidosAceptados" component={VENDEDORPEDIDOSACEPTADOS} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;