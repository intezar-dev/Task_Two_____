import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenFourPage from './ScreenFourPage'
import buttonStyles from '../ButtonStyles';

const ScreenFourHome = ({navigation}) => {
    return (
        <View style={styles.home}>
            <ScreenFourPage />
            {/* Button Component */}
            <View style={styles.bottomBtn}>
                <Text style={buttonStyles.btnPrev} onPress={() => navigation.goBack(null)}>Previous</Text>
                <Text style={buttonStyles.btnNext} onPress={() => navigation.navigate("four")}>Next</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        width: '100vw',
        height: '140vh'
    },
    bottomBtn: {
        position: 'absolute',
        top: 940,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 22,
    },
})

export default ScreenFourHome;
