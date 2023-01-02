import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BookHeaderData } from '../../../utils/HomeData';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const BookHeader = () => {
    return (
        <View style={styles.b_header}>
            <LinearGradient colors={['rgba(20,10,36,1)', 'transparent']} style={styles.background}>


                {/* <Text style={styles.rightCircle}>
                    <LinearGradient colors={['rgba(20,10,36,1)', 'transparent']} style={styles.leftBackground} />
                </Text> */}


                <View style={styles.b_middle_header}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                    <Text style={styles.b_middle_text}>Book Demo</Text>
                    <AntDesign name="close" size={24} color="#fff" />
                </View>
                {/* <Text style={styles.leftCircle}>
                    <LinearGradient colors={['rgba(20,10,36,1)', 'transparent']} style={styles.leftBackground} />
                </Text> */}
                <View style={styles.b_bottom_header}>
                    {BookHeaderData.map((data) => (
                        <>
                            <View style={styles.b_bottom_One}>
                                <View style={styles.b_bottom_one_}>
                                    <Text style={styles.b_bottom_text_round}></Text>
                                    <Text style={styles.b_bottom_text}>{data.type}</Text>
                                </View>
                                <Text style={styles.textBar}></Text>
                            </View>
                            <Text style={{ position: 'absolute', top: 13, left: 348, width: 20, height: 20, backgroundColor: "#fff", borderRadius: '50%' }}> </Text>
                        </>
                    ))}
                    <Text style={{ color: "#fff", position: 'absolute', left: 325, top: 30, padding: 15, }}>Submit</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    b_header: {
        width: '100vw',
        height: '208px',
        borderBottomRightRadius: '29px',
        borderBottomLeftRadius: '29px',
        display: 'inline-block',
        backgroundColor: '#0000a3',
    },
    b_middle_header: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        top: 45,
        left: 15,
        height: 26,
        width: '90vw',
        alignItems: 'center',
        position: 'absolute'
    },
    b_header_text: {
        color: "#fff",
        fontSize: '18px',
    },
    b_middle_text: {
        fontSize: '20px',
        lineHeight: 26,
        letterSpacing: '0.03rem',
        fontWeight: 700,
        fontStyle: 'normal',
        color: "#fff"

    },
    b_bottom_header: {
        width: '90vw',
        flexDirection: 'row',
        top: '90px',
        margin: 'auto',
    },

    b_bottom_One: {
        width: '110px',
        padding: 15,
    },
    b_bottom_one_: {
        width: '40px',
        flexDirection: 'column',
        alignItems: 'center'
    },
    b_bottom_text_round: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: "#fff"
    },
    textBar: {
        position: 'absolute',
        width: '90px',
        height: 5,
        backgroundColor: "#fff",
        top: 22,
        left: 45,
    },
    b_bottom_text: {
        width: 90,
        position: 'absolute',
        top: 30,
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        alignItems: 'center',
        textAlign: 'center'
    },
    // rightCircle: {
    //     position: "absolute",
    //     width: 131,
    //     height: 141,
    //     left: 320,
    //     top: -39,
    //     borderWidth: 11,
    //     borderStyle: 'solid',
    //     borderColor: "#b31774",
    //     borderBottomColor: "#b31774",
    //     borderBottomLeftRadius: 50,
    //     borderTopLeftRadius: 80,
    //     borderBottomRightRadius:50,
    //     backgroundColor:"0F1B48"
    // },
    // leftCircle: {
    //     position: 'absolute',
    //     width: 60,
    //     height: 70,
    //     top: 34,
    //     right: 390,
    //     transform: 'rotate(62.82deg',
    //     borderWidth: 19,
    //     borderColor: '#b31774',
    //     borderRadius: 50,
    // }
})

export default BookHeader;
