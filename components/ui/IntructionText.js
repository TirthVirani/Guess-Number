import { StyleSheet,Text } from "react-native";
import Colors from "../../constants/Colors";

function IntructionText ({children, style}) {
    return <Text style={[styles.intructionText, style]}>{children}</Text>  // [x, y] so y is override to x
}

export default IntructionText;

const styles = StyleSheet.create({
    intructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
})