import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Back from '../assets/back.svg';

interface HeaderProps {
    title?: string,
    back?: boolean,
    onBackPress?: () => void,
}

const Header = ({title, back, onBackPress}: HeaderProps) => {
    return (
        <View style={styles.container}>
            {title && (
                <Text style={styles.title}>{title}</Text>
            )}
            {back && (
                <TouchableOpacity onPress={onBackPress}>
                    <Back />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 12,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontFamily: "Pretendard Variable",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 20,
    },
});

export default Header;
