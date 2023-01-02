import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenThreePage from './ScreenThreePage';
import buttonStyles from '../ButtonStyles';

const ScreenThreeHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenThreePage />
            {/* Button Component */}
            <View style={styles.bottomBtn}>
                <Text style={buttonStyles.btnPrev} onPress={() => navigation.goBack(null)}>Previous</Text>
                <Text style={buttonStyles.btnNext} onPress={() => navigation.navigate("four")}>Next</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '110vh',
    },
    bottomBtn: {
        position: 'absolute',
        top: 900,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 15,
    }
})

export default ScreenThreeHome;
