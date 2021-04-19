import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Share } from 'react-native';
import programmer from '../assets/programmer.png';
const data = new Date();



export default function Welcome() {
    return (

        <SafeAreaView style={estilo.container}>
            <StatusBar backgroundColor="#f9f9f9" style="dark" translucent />
            <Text style={estilo.titulo}>Aproximando seus contatos profissionais </Text>
            <Image source={programmer} style={estilo.image} />
            <Text style={estilo.descricao}>Precisando otimizar as comunicações com seus colaboradores?{"\n"}<Text style={{ fontWeight: '700' }}>Dá um CallME</Text></Text>
            <TouchableOpacity style={estilo.button} activeOpacity={0.1}>
                <Text style={estilo.buttonText}> Avançar </Text>
            </TouchableOpacity>


        </SafeAreaView >

    );
}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#636cff"
    },
    titulo: {
        textAlign: 'center',
        paddingHorizontal: 15,
        color: "#fff",
        fontSize: 35,
        marginTop: 90,
    },
    image: {
        marginTop: 40,
        justifyContent: 'center',
        width: 292,
        height: 290,
    },
    descricao: {
        marginTop: 20,
        color: "#d9d9d9",
        paddingHorizontal: 15,
        fontSize: 22,
        textAlign: 'justify'
    },
    button: {

        backgroundColor: "#cb6ce6",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 20,
        height: 56,
        minWidth: 210,


        paddingHorizontal: 20,


    },

    buttonText: {

        color: "#d9d9d9",
        fontSize: 25,
    },
})
