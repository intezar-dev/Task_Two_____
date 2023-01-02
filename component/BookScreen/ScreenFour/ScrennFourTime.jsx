import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { time2Data, time1Data } from '../../../utils/HomeData';

const ScrennFourTime = () => {
    return (
        <View>
            <Text style={styles.time}>Select Time & Slot</Text>
            <View style={styles.time_box}>
                {time1Data.map((data) => (
                    <View style={styles.timeTop}>
                        <Text style={styles.timeStyles}>{data.time1}</Text>
                        <Text style={styles.timeStyles}>{data.time2}</Text>
                        <Text style={styles.timeStyles}>{data.time3}</Text>
                        <Text style={styles.lastTimeStayles}>{data.time4}</Text>
                    </View>
                ))}
                {time2Data.map((data) => (
                    <View style={styles.timeTop}>
                        <Text style={styles.timeStyles}>{data.time1}</Text>
                        <Text style={styles.timeStyles}>{data.time2}</Text>
                        <Text style={styles.timeStyles}>{data.time3}</Text>
                        <Text>{data.time4}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    time: {
        position: 'absolute',
        height: 21,
        left: 128,
        top: 468,
        fontStyle: 'normal',
        fontWeight: 400,
        linHeight: 21,
        fontSize: 18,
        color: "#1C2D57",
        textAlign: 'center',
    },
    time_box: {
        position: 'absolute',
        width: 354,
        height: 120,
        left: 30,
        top: 508,
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
    },
    timeTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 5,
    },
    timeStyles: {
        color: "#232323",
        fontWeight: 400,
        fontSize: 12,
        fontStyle: 'normal',
        textAlign: 'center',
        linHeight: 20
    },
    lastTimeStayles: {
        color: "#fff",
        backgroundColor: "#2F3F99",
        borderRadius: 10,
        width: 82,
        padding: 5,
        textAlign: 'center',
    }
})

export default ScrennFourTime;
