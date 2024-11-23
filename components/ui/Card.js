import { StyleSheet, View } from "react-native";

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 38,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 15,
        elevation: 9,           //for boxshadow in android
        shadowColor: 'black',   //for boxshadow color in IOS
        shadowOffset: {width: 0, height: 2},    //for boxshadow position in IOS
        shadowOpacity: 0.50,    //for boxshadow opacity in IOS
        shadowRadius: 6,    //for boxshadow spread in IOS
    },
})

