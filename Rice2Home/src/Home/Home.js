import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import {
    Container, Header, Content, List, ListItem, Thumbnail, Text, Body,
    Left, Right, Button, Icon, Title, Item, Input
} from 'native-base';


import { style } from './Style';
import { black } from 'material-ui/styles/colors';

export default class Home extends React.Component {


    state = {
        style: style,
    }

    constructor(props) {
        super(props);
    }

    static navigationOptions = {

    }


    render() {
        let typeValues = [];
        let a = [{ "name": "Muthyam", "filename": "muthyam.jpg", "typeMap": { "Raw": 50, "Steam": 45, "Broken": 28 } },
        { "name": "Muktika", "filename": "muktika.jpg", "typeMap": { "Raw": 55, "Steam": 48, "Broken": 24 } },
        { "name": "Akshata", "filename": "akshata.jpg", "typeMap": { "Raw": 48, "Steam": 44, "Broken": 22 } },
        { "name": "Swarnamukhi", "filename": "swarnamukhi.jpg", "typeMap": { "Raw": 46, "Steam": 44, "Broken": 21 } },
        { "name": "Aruna", "filename": "aruna.jpg", "typeMap": { "Raw": 46, "Steam": 44, "Broken": 21 } },
        { "name": "Sathya Sai", "filename": "splash.jpg", "typeMap": { "Raw": 46, "Steam": 44, "Broken": 21 } },
        { "name": "M G R", "filename": "mgr.jpg", "typeMap": { "Raw": 46, "Steam": 44, "Broken": 21 } },
        { "name": "Hamsa", "filename": "hamsa.jpg", "typeMap": { "Raw": 46, "Steam": 44, "Broken": 21 } }];
        return (
            <ScrollView style={{ width: "100%", height: "100%" }}>
                {a.map((value, index) => {
                    return (
                        <View key={index} style={{
                            borderColor: "#E3E3E3",
                            width: "100%",
                            height: 160,
                            borderStyle: "solid",
                            borderWidth: 2,
                            backgroundColor: 'white'
                        }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15}}>{value.name}</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image source={require("../Images/" + "splash.jpg")} style={{ width: 80, height: 80, marginTop: 20 }} />
                                <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, paddingLeft: 10 }}>
                                    {value.typeMap.map((typeValue,index) => {

                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15 }}>{typeValue}</Text>
                                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{value.typeMap[typeValue]}</Text>
                                        </View>
                                    })}
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView >
        )
    }
}