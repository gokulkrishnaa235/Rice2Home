        import React from 'react';
        import { StyleSheet, Platform, Dimensions } from 'react-native';


        export const style = StyleSheet.create({


                homepage:{
                        width:"100%",
                        height:"100%",
                },


                headerstyle:{
                        width:"100%",
                        height:"15%",
                        backgroundColor:"#0680E6",
                },


                imageblock:{
                        direction:"rtl",
                                width:40,
                                height:40,
                                borderRadius:100,
                                backgroundColor:"#e3e3e3",
                                overflow:"hidden",
                            },

                parentimager:{
                        direction:"rtl",
                                width:40,
                                height:40,
                                borderRadius:100,
                                top:50,
                                left:30,
                                ...Platform.select({
                                    ios: {
                                        shadowColor: '#000',
                                        shadowOffset: { width: 1, height: 2 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 2,
                                    },
                                    android: {
                                        elevation:2,
                                    },
                                }),
                            },

                profileimageicon:{
                        direction:"rtl",
                        width:40,
                        height:40,
                },

                usernamestyle:{
                        top:20,
                        left:90,
                        fontSize:15,
                        color:"white",
                },

                notificationicon:{
                        fontSize:30,
                        color:"white",
                        left:360,
                        fontWeight: "900",

                },

                menustyle:{
                        borderColor:"#E3E3E3",
                        width:180,
                        height:160,
                        borderStyle:"solid",
                        borderWidth:2,
                        backgroundColor:'white',
                
                },

                
                menualignstyle:{
                        flex:0.45,
                        flexDirection:'row',
                        justifyContent: 'space-around',
                       
                        
                       
                },

                menutextstyle:{

                        fontSize:12,
                        color:"#7E7E7E",
                        marginLeft:"17%",
                        marginTop:35,
                        fontWeight: "900",

                },

                menuimage:{

                        width:80,
                        height:80,
                        left:45,
                        top:20,

                },

                bodystyle:{
                        width:"95%",
                        height:"95%",



                }
        
                });