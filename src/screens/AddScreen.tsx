import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, Pressable} from "react-native";
import {RootNavigationGraph} from "../navigation/RootNavigation.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import Header from "../components/Header.tsx";
import FillButton from "../components/FillButton.tsx";
import Box from '../assets/box.svg';

interface AddScreenProps
    extends NativeStackScreenProps<RootNavigationGraph> {
}

const AddScreen = ({navigation}: AddScreenProps) => {
    const [todo, setTodo] = React.useState('');
    const [enabled, setEnabled] = React.useState(false);
    const [isAdd, setIsAdd] = React.useState(false);
    return (
        <SafeAreaView style={{backgroundColor: "#fff", flex: 1, alignItems: "center"}}>
            <Header back onBackPress={() => navigation.goBack()}/>
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>정우님의 계획을 알려주세요!</Text>
                    <Text style={styles.subTitle}>정우님만의 투두리스트를 만들어보세요.</Text>
                </View>
                <View style={styles.inputBox}>
                    <Box/>
                    <TextInput style={styles.input} onChangeText={setTodo} value={todo} placeholder={'입력해 주세요.'}
                               placeholderTextColor={'#7B889E'} onChange={() => setEnabled(true)}/>
                </View>
                <View style={styles.buttonBox}>
                    <Pressable style={[styles.button, {borderColor: enabled ? '#101318' : '#DADEE7'}]}
                               disabled={!enabled} onPress={() => {
                        setIsAdd(true);
                        setEnabled(false);
                    }}>
                        <Text style={[styles.name, {color: enabled ? '#101318' : '#7B889E'}]}>추가하기</Text>
                    </Pressable>
                </View>
            </View>
            <FillButton enabled={isAdd} title={'완료'} onPress={() => navigation.navigate('Home')}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
    },
    titleBox: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    title: {
        fontFamily: "Pretendard Variable",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 32,
        color: "#101318",
    },
    subTitle: {
        fontFamily: "Pretendard Variable",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 24,
        color: "#1E2229",
    },
    inputBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 8,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    input: {
        height: 28,
        width: "100%",
    },
    buttonBox: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderStyle: "solid",
        borderWidth: 1.5,
        borderRadius: 8,
    },
    name: {
        fontFamily: "Pretendard Variable",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 24,
    },
});

export default AddScreen;
