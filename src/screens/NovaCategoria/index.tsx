import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function NovaCategoria() {
    const [nome, setNome] = useState('');

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Nova Categoria</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                placeholder="Digite o nome da categoria"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#738083'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#f9edc8'

    },

    label: {
        fontWeight: 'bold',
        marginBottom: 5
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        elevation: 2
    },

    botao: {
        backgroundColor: '#5e5a54',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center'
    },

    textoBotao: {
        color: '#f9edc8',
        fontWeight: 'bold',
        fontSize: 16
    }
});