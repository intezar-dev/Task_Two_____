import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, RadioButton, } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const staff = ["Arjun", "bacddf", "Austrsfalia", "Mrdfelfdand"]
const software = ["MS Office", "Facebook", "Instagrm", "YouTube"]

const ScreenThreePage = () => {
    return (
        <View style={styles.homePage}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputName}>Salon Name</Text>
                <TextInput placeholder='ABC' style={styles.inputText} />
            </View>
            <View style={styles.radioContainer}>
                <RadioButton />
                <Text style={styles.singleRadio}>Single Location</Text>
                <RadioButton />
                <Text style={styles.multipleRadio} >Multiple Location</Text>
            </View>
            {/* Select Number of Location */}
            <View style={styles.selectLocation}>
                <Text style={styles.selectText}>Select Number of Locations</Text>
                <Text style={styles.selectDro}>
                    <SelectDropdown data={countries} />
                </Text>
            </View>
            {/* Select Number of Staff */}
            <View style={styles.selectStaff}>
                <Text style={styles.selectText}>Select Number of Staff</Text>
                <Text style={styles.selectDro}>
                    <SelectDropdown data={staff} />
                </Text>
            </View>
            {/* Web Component */}
            <View style={styles.webContainer}>
                <Text style={styles.webName}>Do You have website?</Text>
                <Text style={styles.webFlex}>
                    <Text style={styles.we15es}>
                        <RadioButton />Yes
                    </Text>
                    <Text style={styles.webNo}>
                        <RadioButton />No
                    </Text>
                </Text>
                <TextInput placeholder='https://intezar-dev.netlify.app/' style={styles.webInput} />
            </View>
            {/* Software Component */}
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
            {/* Choose Software */}
            <View style={styles.chooseSoftware}>
                <Text style={styles.selectText}>Choose Software</Text>
                <Text style={styles.selectDro}>
                    <SelectDropdown data={software} />
                </Text>
            </View>
            {/* Other Componsnt */}
            <View style={styles.otherContainer}>
                <Text style={styles.inputName}>Other</Text>
                <TextInput placeholder='Choose the name of the software you used' style={styles.otherInput} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homePage: {
        width: '90vw',
        height: '110vh',
        backgroundColor: "#fff",
        margin: 'auto'
    },
    inputContainer: {
        flexDirection: 'column',
        padding: '10px',
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
        justifyContent: 'space-between',
        top: 150,
        padding: '10px',
        alignItems: 'center',
    },
    singleRadio: {
        fontWeight: 400,
        fontSize: 18,
        color: "#000",
        fontStyle: 'normal',
        letterSpacing: '0.02rem',
        lineHeight: 20
    },
    multipleRadio: {
        left: 190,
        fontWeight: 400,
        fontSize: 18,
        color: "#000",
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: '0.02rem',
        lineHeight: 20
    },
    // SelecetLocaton Container
    selectLocation: {
        width: 309,
        position: 'absolute',
        top: 210,
        left: 12,
        padding: 10,
    },
    // Choose Software
    chooseSoftware: {
        width: 309,
        position: 'absolute',
        top: 670,
        left: 12,
        padding: 10,
    },

    selectStaff: {
        width: 309,
        position: 'absolute',
        top: 320,
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
        left: 12,
        top: 45,
        backgroundColor: "#E8E8E8",
    },
    // WebSite Container
    webContainer: {
        width: '100%',
        position: 'absolute',
        top: 425,
        padding: '20px',
    },
    webFlex: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 20,
    },
    webName: {
        color: "#1C2D57",
        fontSize: 18,
        top: 20,
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
    webInput: {
        width: 310,
        height: 40,
        position: 'absolute',
        top: 90,
        borderBottomColor: '#909090'
    },
    // Software
    SoftContainer: {
        width: '100%',
        position: 'absolute',
        top: 570,
        padding: '20px',
    },
    softFlex: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    softName: {
        color: "#1C2D57",
        fontSize: 18,
        fontWeight: 600,
        lineHeight:21,
        letterSpacing:'0.02rem',
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
    // Other Component
    otherContainer: {
        flexDirection: 'column',
        padding: '10px',
        top: 700,
    },
    otherInput: {
        width: 330,
        height: 40,
        position: 'absolute',
        top: 50,
        borderBottomColor: '#909090'
    },
})

export default ScreenThreePage;
