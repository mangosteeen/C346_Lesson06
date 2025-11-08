import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button, Alert,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q1: "",
            q2: "",
            q3: "",
        };
    }

    handleSubmit = () => {
        let score = 0;

        if (this.state.q1 === "Apple") score++;
        if (this.state.q2 === "Banana") score++;
        if (this.state.q3 === "Orange") score++;

        let message = `You got ${score} / 3 correct`;
        if (score === 3) {
            message += " Awesome!";
        } else if (score === 2) {
            message += " Nice job!";
        } else {
            message += " Try again!";
        }

        Alert.alert("Quiz Result", message);
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./img/fruit_banner.jpg")} style={{ width: "100%", height: 120 }}/>
                <View style={styles.titleRow}>
                    <FontAwesome6 name="apple-whole" size={28} color="green" />
                    <Text style={styles.title}>Fruit Quiz</Text>
                    <FontAwesome6 name="apple-whole" size={28} color="#f4d03f" />
                </View>

                <ScrollView style={styles.scroll}>
                    <View>
                        <Text style={styles.question}>Question 1:</Text>
                        <Image source={require("./img/apple.png")} style={{width: 120, height: 120, alignSelf: "center", marginVertical: 10,}}/>
                        <Picker selectedValue={this.state.q1} onValueChange={(value) => this.setState({ q1: value })}>
                            <Picker.Item label="-- choose fruit --" value="" />
                            <Picker.Item label="Apple" value="Apple" />
                            <Picker.Item label="Banana" value="Banana" />
                            <Picker.Item label="Orange" value="Orange" />
                        </Picker>

                        <Text style={styles.question}>Question 2:</Text>
                        <Image source={require("./img/banana.png")} style={{width: 120, height: 120, alignSelf: "center", marginVertical: 10,}}/>
                        <Picker selectedValue={this.state.q2} onValueChange={(value) => this.setState({ q2: value })}>
                            <Picker.Item label="-- choose fruit --" value="" />
                            <Picker.Item label="Apple" value="Apple" />
                            <Picker.Item label="Banana" value="Banana" />
                            <Picker.Item label="Orange" value="Orange" />
                        </Picker>

                        <Text style={styles.question}>Question 3:</Text>
                        <Image source={require("./img/orange.png")} style={{width: 120, height: 120, alignSelf: "center", marginVertical: 10,}}/>
                        <Picker selectedValue={this.state.q3} onValueChange={(value) => this.setState({ q3: value })}>
                            <Picker.Item label="-- choose fruit --" value="" />
                            <Picker.Item label="Apple" value="Apple" />
                            <Picker.Item label="Banana" value="Banana" />
                            <Picker.Item label="Orange" value="Orange" />
                        </Picker>

                        <View style={{ marginTop: 25 }}>
                            <Button title="Submit Answers" onPress={this.handleSubmit} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "#fff",
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 8,
        marginRight: 8,
        color: "red",
    },
    scroll: {
        paddingHorizontal: 20,
    },
    question: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: "600",
    },
});

export default MyApp;
