//  Gerencia a navegação, com o container em pilha de telas
import { NavigationContainer } from "@react-navigation/native";

// Gerencia a navegação entre as telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//  Importando as telas
import Home from "../pages/home";
import PagEventos from "../pages/eventos";
import PageAddPeople from "../pages/add-people";
import PageAddCarnes from "../pages/add-carnes";

// Configuração e gestão de navegação entre telas
const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        // Agrupa as rotas
        <NavigationContainer>
            {/* Cria uma pilha de páginas */}
            <Stack.Navigator initialRouteName="AddPeople">
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Eventos" component={PagEventos} options={{headerShown: false}} />
                <Stack.Screen name="AddPeople" component={PageAddPeople} options={{headerShown: false}} />
                <Stack.Screen name="AddCarnes" component={PageAddCarnes} options={{headerShown: false}} />
                <Stack.Screen name="AddTiposCarnes" component={PageAddTipoCarnes} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;