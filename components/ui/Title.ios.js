import { Text, StyleSheet } from "react-native";

function Title({children}){
    return <Text style={styles.text}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderRadius : Platform.select({ ios: 0, android: 2}),
        padding: 12,
        maxWidth: '80%',    //maxwidth & width maise jo big hoga vo consider hoga
        width: 300,
    },
});