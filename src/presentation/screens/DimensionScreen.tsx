import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const { height, width } = Dimensions.get('window');

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions();
    console.log({ height, width })

    return (
        <View>
            <View style={styles.container}>

                {/* <Text>DimensionScreen</Text> */}

                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5,
                }} />

            </View>
            <Text style={styles.title}>w: {width}, h: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        backgroundColor: 'red',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    }
})