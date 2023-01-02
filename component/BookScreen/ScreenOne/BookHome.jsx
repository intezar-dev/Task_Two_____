import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BookSalonType } from '.';

const BookHome = ({ navigation }) => {
    return (
        <View style={styles.b_home}>
            <BookSalonType />
            <View style={styles.btns}>
                <Text title='Next' color="red" borderRadius='10' style={styles.btns_text} onPress={() => navigation.navigate('two')}>Next</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    b_home: {
        width: '100vw',
        height: "120vh",
        backgroundColor: "#fff"
    },
    btns: {
        textAlign: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 138,
        top: 760,
        width: 161,
    },
    btns_text: {
        width: 135,
        padding: '10px',
        color: "#fff",
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 23,
        textAlign: 'center',
        backgroundColor: "red",
        borderRadius: '20px',
    }
})
export default BookHome;
