import React, {useState, useEffect} from 'react';
import { View,StyleSheet,Text,TouchableOpacity,Image, Linking } from 'react-native';
import NumberInput from './NumberInput';

const Keyboard = () => {

    // listener pre state 
    const [val, setVal] = useState([]);

    // lister pre pridavanie itemov a do val array pre neskorsie pouzitie
    const addEntryOnPress = (num) => {
        setVal([...val,num]);
    };

    // click listener pre vymazavanie itemov z val array a nasledne updatovanie TextInput pola uz bez vymazaneho itemu(cisla)
    const removeEntryOnpress = () => {
        const pop = val.pop();
        setVal([...val]);
    }

    // click listent pre vymazanie celeho tel cisla
    const removeEntryOnLongPress = () => {
        setVal(val.slice(val.length));
    }

    // po kliku zacne hovor
    const makeCall = () => {
        if(val.length < 10){
            alert("Zadané číslo musí obsahovať min.10 znakov!")
        }else {
            const url = `tel://${val.join("")}`;
            Linking.openURL(url);
        }
    }

    return (
        <View>
            {/* render TexTInputu ktory zobrazuje vpisane cisla po kliku na btn */}
            <NumberInput value={val.join("")}/>
            {/* render klavesnice a prislunych funkcii */}
            <View style={styles.keyboard}>
                <View style={styles.key_row}>
                    <TouchableOpacity onPress={() => addEntryOnPress("1")} style={styles.button}>
                        <Text style={styles.btn_text}>1</Text>
                        <Text>a</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("2")} style={styles.button}>
                        <Text style={styles.btn_text}>2</Text>
                        <Text>ABC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("3")} style={styles.button}>
                        <Text style={styles.btn_text}>3</Text>
                        <Text>DEF</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.key_row}>
                    <TouchableOpacity onPress={() => addEntryOnPress("4")} style={styles.button}>
                        <Text style={styles.btn_text}>4</Text>
                        <Text>GHI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("5")} style={styles.button}>
                        <Text style={styles.btn_text}>5</Text>
                        <Text>JKL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("6")} style={styles.button}>
                        <Text style={styles.btn_text}>6</Text>
                        <Text>MNO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.key_row}>
                    <TouchableOpacity onPress={() => addEntryOnPress("7")} style={styles.button}>
                        <Text style={styles.btn_text}>7</Text>
                        <Text>PQRS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("8")} style={styles.button}>
                        <Text style={styles.btn_text}>8</Text>
                        <Text>TUV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("9")} style={styles.button}>
                        <Text style={styles.btn_text}>9</Text>
                        <Text>WXYZ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.key_row}>
                    <TouchableOpacity onPress={() => addEntryOnPress("*")} style={styles.button}>
                        <Text style={styles.btn_text}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addEntryOnPress("0")} style={styles.button}>
                        <Text style={styles.btn_text}>0</Text>
                        <Text>+</Text>
                    </TouchableOpacity>
                    {/* funkcia pre vymazavanie cisiel z TextInput fieldu */}
                    {
                        // ak dlzka array val je vacsia ako je "0" zobraz tlacidlo pre zmazanie ak nie tak ho zanechaj ako "#"
                        val.length > 0 ? (
                            <TouchableOpacity onLongPress={() => removeEntryOnLongPress()} onPress={() => removeEntryOnpress()} style={styles.button}>
                                <Image style={styles.delete_ico} source={require('../assets/backspace-pngrepo-com.png')}/>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => addEntryOnPress("#")} style={styles.button}>
                                <Text style={styles.btn_text}>#</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
                <TouchableOpacity onPress={() => makeCall()} style={styles.call}>
                    <Image style={styles.delete_ico} source={require('../assets/phone-32.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// prislusne styles pre elementy na obrazovke
const styles = StyleSheet.create({
    keyboard: {
        width: "auto",
        height: "100%",
        display: "flex",
    },
    key_row: {
        display: "flex",
        flexDirection: "row",
        flexBasis: "10%",
    },
    button: {
        alignItems: "center",
        borderColor: '#DDDDDD',
        borderWidth: 1,
        padding: 10,
        flex: 1,
        display: "flex",
        justifyContent: "center"
    },
    btn_text: {
        fontSize: 30
    },
    delete_ico: {
        width: 35,
        height: 35
    },
    call: {
        width: 100,
        height: 50,
        borderRadius: 25,
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "#4FA631",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Keyboard;