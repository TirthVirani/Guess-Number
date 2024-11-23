import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/Colors";

function NumberContainer({children}){
    return (
        <View style = {styles.container}>
            <Text style = {styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;  
// In IOS : window or screen mai koi chnage nahi hoga
// In Android: window mai status bar ki width vo sab excluding hota hai,   android mai status bar ki width vo sab including hota hai

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 360 ? 12 : 30,
        marginTop: deviceWidth < 360 ? 28 : 38,  // 360 se kam hoga to 28 consider hoga nahi hai to 38
        marginHorizontal: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 360 ? 28 : 45,
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold'
    },
});