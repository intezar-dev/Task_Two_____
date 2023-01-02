import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ScreenFourComunication = () => {
    return (
        <View>
            <Text style={styles.comTextStayles}> Communication Channel You Preffered</Text>
            <View style={styles.btnGroup}>
                <Text style={styles.btnStyles}>Zoom</Text>
                <Text style={styles.btnStylesTwo}>Google Meet</Text>
                <Text style={styles.btnStyles}>Skype</Text>
            </View>
            <Text style={styles.deviceStyles}>Device Preffered</Text>
            <View style={styles.deviceOne}>
                <Text style={styles.device_one}>
                    <Image source={require("../../../assets/desk.jpg")} style={styles.deviceImgStyles} />
                </Text>
                <Image source={require("../../../assets/sam.jpg")} style={styles.deviceTwoStyles} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    comTextStayles: {
        position: 'absolute',
        top: 650,
        left: 47,
        fontSize: 17,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 21,
        color: "#1C2D57",
    },
    // Button Styles******************
    btnGroup: {
        position: 'absolute',
        width: 375,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 685,
        left: 15,
        padding: 10,
    },
    btnStyles: {
        width: 105,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        opacity: 0.9,
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
    },
    btnStylesTwo: {
        width: 105,
        height: 40,
        color: "#fff",
        backgroundColor: "#2D3C93",
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        opacity: 0.9,
    },
    // Device Styles*************
    deviceStyles: {
        position: 'absolute',
        top: 770,
        left: 125,
        textAlign: 'center',
        fontSize: 17,
        color: "1C2D57",
        fontWeight: 400,
        lineHeight: 21,
        fontStyle: 'normal',
    },
    deviceOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    device_one: {
        position: 'absolute',
        width: 68,
        height: 68,
        left: 84,
        top: 808,
        backgroundColor: "#002478",
        borderRadius: 15,
        padding: 10,
    },
    deviceImgStyles: {
        position: 'absolute',
        width: 42,
        height: 42,
        left: 14,
        top: 10,
        borderRadius: 10,
    },
    deviceTwoStyles: {
        position: 'absolute',
        width: 54,
        height: 58,
        left: 214,
        top: 815,
    }
})

export default ScreenFourComunication;
