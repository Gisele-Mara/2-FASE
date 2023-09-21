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
            <Button
                title="Navegar para abas"
                onPress={() =>
                    navigation.navigate('Abas', { name: 'Joey' })
                }
            />
            <Button
                title="VAI"
                onPress={() =>
                    navigation.navigate('Testou', { name: 'Joey' })
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