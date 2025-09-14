// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, View } from 'react-native';
import Icon from "@react-native-vector-icons/ionicons";
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';

const MyComponent = () => {

  const insets = useSafeAreaInsets();
  console.log(`[${Platform.OS}] Insets:`, insets);

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <PaperProvider
        settings={{
          icon: (props) => <Icon {...props} />
        }}
      >
        {/* <HelloWorldScreen name='Jhon Jairo Carreno Lopez'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </PaperProvider>
    </View>
  );
}

export const App = () => {
  return (
    <SafeAreaProvider>
      <MyComponent />
    </SafeAreaProvider>
  )
}