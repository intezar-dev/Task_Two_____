import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ScrennFourTime, ScreenFourComunication } from './'

const ScreenFourPage = () => {
    return (
        <View>
            <Text style={styles.four_heading}>Choose Data & Time</Text>
            <View style={styles.calenderStyle} >
                <Calendar
                    initialDate={"2022-10-13"}
                    minDate={"2022-01-01"}
                    maxDate={"2022-12-31"}
                    hideExtraDays={true}
                    markedDates={{ '2022-10-13': { marked: true, dotColor: "grennn", selected: true, backgroundColor: "#2F3F99", color: "#fff", fontWeight: '600' } }}
                />
            </View>
            <ScrennFourTime />
            <ScreenFourComunication />
        </View>
    );
}

const styles = StyleSheet.create({
    four_heading: {
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 28,
        tintColor: '#102C56',
        fontStyle: 'normal',
        top: 22,
        left: 102,
    },
    calenderStyle: {
        position: 'absolute',
        top: 60,
        left: 30,
        width: 358,
        height: 378,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
    },
})

export default ScreenFourPage;
