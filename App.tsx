import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Produtos from "./src/screens/Produtos";
import CategoriaScreen from "./src/screens/CategoriaScreen";
import NovaCategoria from "./src/screens/NovaCategoria";
import NovoProduto from "./src/screens/NovoProduto";

export type RootStackParamList = {
  Home: undefined;
  Produtos: undefined;
  Categorias: undefined;
  NovaCategoria: undefined;
  NovoProduto: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Produtos"
          component={Produtos}
        />

        <Stack.Screen
          name="Categorias"
          component={CategoriaScreen}
        />

        <Stack.Screen
          name="NovaCategoria"
          component={NovaCategoria}
        />

        <Stack.Screen
          name="NovoProduto"
          component={NovoProduto}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}