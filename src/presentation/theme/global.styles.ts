import { StyleSheet, Platform } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        // bottom: Platform.OS === 'android' ? 55 : 0,
    },

    addFab: {
        position: 'absolute',
        right: 20,
        bottom: 150, // Posición diferente para cada botón
    },
    removeFab: {
        position: 'absolute',
        right: 20,
        bottom: 90,
    },
    resetFab: {
        position: 'absolute',
        right: 20,
        bottom: 30,
    },
    iconWrapper: {
        width: 25, // Establece el ancho para que coincida con el tamaño del icono
        height: 25, // Establece la altura para que coincida con el tamaño del icono
        justifyContent: 'center', // Centra el icono horizontalmente
        alignItems: 'center', // Centra el icono verticalmente
    },
});