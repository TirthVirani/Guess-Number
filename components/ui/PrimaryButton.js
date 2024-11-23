//That is Custom Buttons
import { View, Text, StyleSheet, Pressable } from "react-native"

function PrimaryButton({children, onPress}){         //(props) {props.children}
    return(
        <View style={styles.btnOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.btnInnerContainer, styles.pressed] : styles.btnInnerContainer}
                onPress={onPress}
                android_ripple={{color: '#640233'}}
            >
                <Text style={styles.btnText}>{children}</Text> 
            </Pressable>        
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    btnText : {
        color: 'white',
        textAlign: 'center',
    },
    btnInnerContainer: {
        backgroundColor: "#72063c",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    pressed: {
        opacity: 0.55
    }
});