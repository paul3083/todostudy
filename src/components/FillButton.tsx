import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

interface FillButtonProps {
    enabled: boolean,
    title: string,
    onPress: () => void,
}

const FillButton = ({enabled, title, onPress}: FillButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: enabled ? "#101318" : "#DADEE7"}]} onPress={onPress} disabled={!enabled}>
            <Text style={[styles.title, {color: enabled ? "#FAFAFA" : "#919DB6"}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: 361,
        height: 56,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Pretendard Variable",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 24,
    },
});

export default FillButton;
