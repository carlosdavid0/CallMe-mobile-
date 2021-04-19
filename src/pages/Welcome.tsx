import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Share } from 'react-native';
import programmer from '../assets/programmer.png';
const data = new Date();


function alertaTerm() {
    Alert.alert(
        "Opa",
        "Para prosseguir, faça o login",
        [
            {
                text: "Lembre-me depois",
                onPress: () => console.log("Ask me later pressed")
            },
            {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Ok", onPress: () => console.log("OK Pressed") }
        ]
    );
}
function alertNext() {
    Alert.alert(
        "Opa",
        "Aguarde para ser direcionado a área de login",

    );
}

const onShare = async () => {
    try {
        const result = await Share.share({
            title: "Thiaguim do JS",
            message:
                'Callme é o melhor aplicativo que eu ja fiz| Enviado usando react Native',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};


export default function Welcome() {
    return (

        <SafeAreaView style={estilo.container}>
            <StatusBar backgroundColor="#f9f9f9" style="dark" translucent />
            <Text style={estilo.titulo}>Aproximando seus contatos profissionais </Text>
            <Image source={programmer} style={estilo.image} />
            <Text style={estilo.descricao}>Precisando otimizar as comunicações com seus colaboradores?{"\n"}<Text style={{ fontWeight: '700' }}>Dá um CallME</Text></Text>
            <TouchableOpacity style={estilo.button} activeOpacity={0.1} onPress={alertNext}>
                <Text style={estilo.buttonText}> Avançar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.button} activeOpacity={0.1} onPress={alertaTerm}>
                <Text style={estilo.buttonText}> Termos de uso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.button} activeOpacity={0.1} onPress={onShare}>
                <Text style={estilo.buttonText}> Divulgação</Text>
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
        marginTop: 60,
    },
    image: {
        marginTop: 20,
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
