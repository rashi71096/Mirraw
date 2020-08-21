import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart';
import { TouchableOpacity } from 'react-native'
import { Container, Toolbar, Button, Text, Content, View, Icon } from 'native-base';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products">
                <Stack.Screen options={({ navigation, route }) => ({
                    title: 'Products',
                    headerStyle: {
                        backgroundColor: '#f4511e',

                    },
                    headerTintColor: '#fff',
                    headerRight: () => (


                        <Button transparent onPress={() => navigation.navigate('Cart')} >
                            <Text style={{ color: "#fff", marginRight: 0, paddingEnd: 0 }}>Cart</Text>
                            <Icon size={27} style={{ color: "#fff" }} name={'cart'} />

                        </Button>

                    ),
                })} name="Products" component={Products} />
                <Stack.Screen name="Cart" options={{
                    title: 'Cart',
                    headerStyle: {
                        backgroundColor: '#f4511e',

                    },
                    headerTintColor: '#fff',
                }} component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;