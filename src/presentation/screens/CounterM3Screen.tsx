import { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
// import Icon from "@react-native-vector-icons/ionicons";

export const CounterM3Screen = () => {

    const [count, setCount] = useState(0);

    const restar = () => count === 0 ? 0 : setCount(count - 1)

    return (
        <View style={globalStyles.container}>

            <Text style={globalStyles.title}>{count}</Text>

            {/* <Icon name="home" size={20} color="#900" /> */}

            <FAB
                style={globalStyles.addFab}
                onPress={() => setCount(count + 1)}
                // onLongPress={() => setCount(0)}
                // icon={() => <Icon name="add" size={25} />}
                icon='add'
            />

            <FAB
                style={globalStyles.removeFab}
                onPress={restar}
                icon='remove'
            />

            <FAB
                style={globalStyles.resetFab}
                onPress={() => setCount(0)}
                icon='refresh'
                onLongPress={() => setCount(0)}
            />
        </View>
    )
}




