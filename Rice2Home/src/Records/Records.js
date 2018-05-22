
import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import {
    Container, Header, Content, List, ListItem, Thumbnail, Text, Body,
    Left, Right, Button, Icon, Title, Item, Input
} from 'native-base';


//import { style } from './Style';
import { black } from 'material-ui/styles/colors';

export default class Records extends React.Component {

    state = {
        //style: style,
    }

    constructor(props) {
        super(props);
    }

    static navigationOptions = {

    }


    render() {
        let typeValues = [];
        let a = [{ "name": "Muthyam", "filename": "muthyam.jpg", "typename": "RAW", "qty": 100, "discountRate": 5, "amount": 100000, "paymentDate": "10 / 08 / 2018" },
        { "name": "Aruna", "filename": "aruna.jpg", "typename": "RAW", "qty": 100, "discountRate": 5, "amount": 100000, "paymentDate":" 10 / 08 / 2018" },
        { "name": "Sathya Sai", "filename": "splash.jpg", "typename": "RAW", "qty": 100, "discountRate": 5, "amount": 100000, "paymentDate":"10 / 08 / 2018" },
        { "name": "M G R", "filename": "mgr.jpg", "typename": "RAW", "qty": 100, "discountRate": 5, "amount": 100000, "paymentDate": "10 / 08 / 2018" }];
        return (
            <ScrollView style={{ width: "100%", height: "100%" }}>
                {a.map((value) => {
                    return (
                        <View key={value} style={{
                            borderColor: "#E3E3E3",
                            width: "100%",
                            height: 160,
                            borderStyle: "solid",
                            borderWidth: 2,
                            backgroundColor: 'white'
                        }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{value.name}</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                {/* <Image source={require("../Images/")} style={{ width: 80, height: 80, marginTop: 20 }} /> */}
                                <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, paddingLeft: 10 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{value.typename}</Text>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{value.qty}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{value.discountRate + "%"}</Text>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{value.amount}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{value.paymentDate}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView >
        )
    }
}