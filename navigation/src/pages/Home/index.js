import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function Home() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button
                title="Conheça mais"
                onPress={() =>
                    navigation.navigate('Sobre', { name: 'Jane' })
                }
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})