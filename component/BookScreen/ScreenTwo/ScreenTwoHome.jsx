import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenTwoPage from './ScreenTwoPage';
import buttonStyles from '../ButtonStyles';


const ScreenTwoHome = ({ navigation }) => {
    return (
        <View>
            <ScreenTwoPage />
            {/* Button Component */}
            <View style={styles.bottomBtn}>
                <Text style={buttonStyles.btnPrev} onPress={() => navigation.goBack(null)}>Previous</Text>
                <Text style={buttonStyles.btnNext} onPress={() => navigation.navigate("three")}>Next</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    bottomBtn: {
        position: 'absolute',
        top: 690,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 18,
    },
})

export default ScreenTwoHome;
