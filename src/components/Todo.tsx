import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import Check from '../assets/check.svg';
import Box from '../assets/box.svg';

interface TodoProps {
    isChecked?: boolean,
    title: string,
    onPress?: () => void,
}

const Todo = ({isChecked, title, onPress}: TodoProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {isChecked ? <Check/> : <Box/>}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 16,
        gap: 8,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontFamily: "Pretendard Variable",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 24,
        color: "#7B889E",
    },
});

export default Todo;
