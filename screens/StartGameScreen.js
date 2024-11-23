import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import IntructionText from '../components/ui/IntructionText';

function StartGameScreen ({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')  //the input number by number-pad is always in string so used ' '
    
    const { width, height} = useWindowDimensions();  //  for setting sizes dynamic 
    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);  //conver input number from string to int(number)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(        // 3 parameter (title, message, Button(text, style, onPress))
                'Invalid Number!',
                'Number has to be a number between 0 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;  // define dynamic marginTop

    return(
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <IntructionText>Enter a Number</IntructionText>
                        <TextInput 
                            style={styles.numberinput} 
                            maxLength={2} 
                            keyboardType="number-pad" 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            onChangeText={numberInputHandler} 
                            value={enteredNumber}
                        />
                        <View style={styles.btnsContainer}>
                            <View style={styles.btncontainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.btncontainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton> 
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberinput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign:'center',
    },
    btnsContainer:{
        flexDirection: 'row',
    },
    btncontainer:{
        flex: 1,
    }
});