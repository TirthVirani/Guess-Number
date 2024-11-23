import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    if(width < 360){
        imageSize = 150;
    }
    if(height < 400){
        imageSize = 90;
    }

    const imageStyle = {
        width : imageSize,
        height : imageSize,
        borderRadius : imageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imagecontainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')}/>
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagecontainer: {
        // height: deviceWidth < 360 ? 200 : 300,
        // width: deviceWidth < 360 ? 200 : 300,
        // borderRadius: deviceWidth < 360 ? 100 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 23,
        color: 'white',
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        color: Colors.primary600,
    },
})