import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import IntructionText from "../components/ui/IntructionText";
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameover}){
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, hight } = useWindowDimensions();

    useEffect(() => { //useeffect is exicute after components function has been exicute
        if(currentGuess === userNumber){
            onGameover(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameover]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction){ //direction => 'Lower', 'Greater'
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{text: 'Sorry !', style: 'cancel'}])
            return;
        }
        if(direction === 'lower'){ maxBoundary = currentGuess; }
        else { minBoundary = currentGuess + 1; }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [ newRndNumber , ...prevGuessRounds]);
    }

    const guessRoundsListLenght = guessRounds.length;

    let content = 
    <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <IntructionText style={styles.intructionText}>Higher or lower?</IntructionText>
            <View style={styles.btnsContainer}>
                <View style={styles.btncontainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white"></Ionicons>
                    </PrimaryButton>
                </View>
                <View style={styles.btncontainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white"></Ionicons>
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>

    if (width > 500) {
        content =
        <>
            <View style={styles.btnsContainerWide}>
                    <View style={styles.btncontainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white"></Ionicons>
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.btncontainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white"></Ionicons>
                        </PrimaryButton>
                    </View>
            </View>    
        </>
    }

    return( 
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLenght - itemData.index} guess={itemData.item}/>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 50,
        alignItems: 'center',
    },
    intructionText: {
        marginBottom: 12,
    },
    btnsContainer:{
        flexDirection: 'row',
    },
    btnsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btncontainer:{
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});