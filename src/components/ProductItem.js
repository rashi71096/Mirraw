import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const ProductItem = ({ item, inCart, onAddToCart, OnRemove }) => {
    const { name, id, inr, image, description } = item;
    const logoUrl = 'https://bit.ly/3j54VNb';
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: logoUrl }} />
                    <Body>
                        <Text>{name}</Text>
                        <Text note>{description}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: image }} style={{ height: 230, width: null, flex: 1 }} resizeMode="cover" resizeMethod='auto' />
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon style={styles.themeColor} active name="pricetags" />
                        <Text style={styles.themeColor}>Price: {inr} Rs</Text>
                    </Button>
                </Left>

                <Right>{inCart ?
                    <Button transparent onPress={() => OnRemove(id)}>
                        <Icon name='cart' style={styles.themeColor} />
                        <Text style={styles.themeColor}>Remove from cart</Text>
                    </Button> : <Button transparent onPress={() => onAddToCart(item)} >
                        <Icon style={styles.themeColor} name='cart' />
                        <Text style={styles.themeColor}>Add to Cart</Text>
                    </Button>}
                </Right>
            </CardItem>
        </Card>

    );
}


const styles = StyleSheet.create({
    themeColor: {
        color: '#f4511e'
    },
});


export default ProductItem;