import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookHeader from './component/BookScreen/Header/BookHeader';
import BookHome from './component/BookScreen/ScreenOne/BookHome';
import ScreenTwoHome from './component/BookScreen/ScreenTwo/ScreenTwoHome';
import ScreenThreeHome from './component/BookScreen/ScreenThree.jsx/ScreenThreeHome';
import ScreenFourHome from './component/BookScreen/ScreenFour/ScreenFourHome';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <BookHeader />
            <Stack.Navigator>
                <Stack.Screen name="one" component={BookHome} options={{ headerShown: false }} />
                <Stack.Screen name="two" component={ScreenTwoHome} options={{ headerShown: false }} />
                <Stack.Screen name="three" component={ScreenThreeHome} options={{ headerShown: false }} />
                <Stack.Screen name="four" component={ScreenFourHome} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
