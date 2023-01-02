import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { BookSalonData, BookSalonTopData } from '../../../utils/HomeData';

const BookSalonType = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textType}>Select Your Saloon</Text>
            <View style={styles.box_container}>
                {BookSalonTopData.map((data) => (
                    <View style={styles.box__Img}>
                        <View style={styles.box_one}>
                            <Image source={data.img} style={styles.box_one_img} />
                            <Text style={styles.box_one_text}>{data.type}</Text>
                        </View>
                        <View style={styles.box_two_}>
                            <Image source={require("../../../assets/b1.webp")} style={styles.box_one_img} />
                            <Text style={styles.box_two_text}>{data.type1}</Text>
                        </View>
                    </View>
                ))}
                {BookSalonData.map((data) => (
                    <View style={styles.box__Img}>
                        <View style={styles.box_one__}>
                            <Image source={data.img} style={styles.box_one_img} />
                            <Text style={styles.box_two_text}>{data.type}</Text>
                        </View>
                        <View style={styles.box_two_}>
                            <Image source={data.img} style={styles.box_one_img} />
                            <Text style={styles.box_two_text}>{data.type1}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: "#fff",
        display: 'inline-bloclk'
    },
    textType: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 21,
        color: "#102C56",
        fontStyle: 'normal',
        lineHeight: 21,
        padding: 10
    },
    box_container: {
        width: "90vw",
        height: '90vh',
        margin: 'auto',
        backgroundColor: "#fff",
        flexDirection: 'column',
    },
    box__Img: {
        width: '90vw',
        height: '200px',
        flexDirection: 'column'
    },
    box_one: {
        position: 'absolute',
        width: 150,
        height: 168,
        left: 17,
        top: 13,
        borderRadius: 5,
        backgroundColor: "#0C1740"
    },
    box_one__: {
        position: 'absolute',
        width: 150,
        height: 168,
        left: 17,
        top: 13,
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    box_one_img: {
        position: 'absolute',
        width: 115,
        height: 110,
        left: 18,
        top: 18,
        borderRadius: 10
    },
    box_one_text: {
        position: 'absolute',
        color: "#fff",
        fontSize: 15,
        fontWeight: 500,
        alignItems: 'center',
        lineHeight: 20,
        top: 135,
        left: 60
    },
    box_two_text: {
        position: 'absolute',
        color: "#000",
        fontSize: 15,
        fontWeight: 500,
        alignItems: 'center',
        lineHeight: 20,
        top: 135,
        left: 50
    },
    box_two_: {
        position: 'absolute',
        width: 150,
        height: 168,
        left: 200,
        top: 13,
        borderRadius: 5,
    },
})

export default BookSalonType;
