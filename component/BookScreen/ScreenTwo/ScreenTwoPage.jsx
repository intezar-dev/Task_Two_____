import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, RadioButton, } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

const ScreenTwoPage = () => {
    return (
        <View style={styles.homePage}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>Salon Name</Text>
                <TextInput placeholder='ABC' style={styles.inputText} />
            </View>
            <View style={styles.radioContainer}>
                <RadioButton />
                <Text style={styles.singleRadio}>Single</Text>
                <RadioButton />
                <Text style={styles.multipleRadio} >Multiple</Text>
            </View>
            <View style={styles.selectContainer}>
                <Text style={styles.selectText}>Select Number of Staff</Text>
                <Text style={styles.selectDro}>
                    <SelectDropdown data={countries} />
                </Text>
            </View>
            <View style={styles.webContainer}>
                <Text style={styles.webName}>Do You have website?</Text>
                <Text style={styles.webFlex}>
                    <Text style={styles.webYes}>
                        <RadioButton />Yes
                    </Text>
                    <Text style={styles.webNo}>
                        <RadioButton />No
                    </Text>
                </Text>
            </View>
            <View style={styles.SoftContainer}>
                <Text style={styles.softName}>Currently Using any Software?</Text>
                <Text style={styles.softFlex}>
                    <Text style={styles.softYes}>
                        <RadioButton />Yes
                    </Text>
                    <Text style={styles.softNo}>
                        <RadioButton />No
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homePage: {
        width: '90vw',
        height: '100vh',
        backgroundColor: "#fff",
        margin: 'auto'
    },
    inputContainer: {
        flexDirection: 'column',
        padding: '20px',
        top: 40,
    },
    inputName: {
        fontSize: 21,
        fontWeight: 400,
        lineHeight: '21px',
        color: "#1C2D57",
        left: 5,
    },
    inputText: {
        height: 30,
        width: '309px',
        top: 10,
        fontSize: 18,
        fontWeight: 400,
        lineHeight: '21px',
        color: "000",
        backgroundColor: "#E8E8E8",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    // Radio Container
    radioContainer: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        top: 180,
        padding: '20px',
        alignItems: 'center',
    },
    singleRadio: {
        width: 100,
        height: 16,
        fontWeight: 400,
        fontSize: 18,
        color: "#000",
        fontStyle: 'normal',
        letterSpacing: '0.02rem',
        lineHeight: 20
    },
    multipleRadio: {
        width: 100,
        height: 16,
        left: 227,
        fontWeight: 400,
        fontSize: 18,
        color: "#000",
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '0.02rem',
        lineHeight: 20
    },
    // SelecetDrop Container
    selectContainer: {
        width: 309,
        position: 'absolute',
        top: 280,
        left: 12,
        padding: 10,
    },
    selectText: {
        color: "#1C2D57",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 21,
    },
    selectDro: {
        position: 'absolute',
        width: '309px',
        // left: 12,
        top: 45,
        backgroundColor: "#E8E8E8",
    },
    // WebSite Container
    webContainer: {
        width: '100%',
        position: 'absolute',
        top: 401,
        padding: '20px',
    },
    webFlex: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    webName: {
        color: "#1C2D57",
        fontSize: 18,

    },
    webYes: {
        position: 'absolute',
        top: 44,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 21
    },
    webNo: {
        position: 'absolute',
        left: 207,
        top: 48,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 21,
    },
    // Software
    SoftContainer: {
        width: '100%',
        position: 'absolute',
        top: 500,
        padding: '20px',
    }
    , softFlex: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    softName: {
        color: "#1C2D57",
        fontSize: 18,

    },
    softYes: {
        position: 'absolute',
        top: 44,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 21
    },
    softNo: {
        position: 'absolute',
        left: 207,
        top: 48,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 21,
    },

})

export default ScreenTwoPage;
