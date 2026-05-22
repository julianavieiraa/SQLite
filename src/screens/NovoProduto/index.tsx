import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

export default function NovoProduto() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Preço</Text>
            <TextInput
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Categoria</Text>
            <TextInput
                style={styles.input}
                value={categoria}
                onChangeText={setCategoria}
            />

            <TouchableOpacity style={styles.botaoAcao}>
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

    label: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },

    input: {
        backgroundColor: '#cdc8ba',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        elevation: 2
    },

    botaoAcao: {
        backgroundColor: '#5e5a54',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },

    textoBotao: {
        color: '#f9edc8',
        fontWeight: 'bold',
        fontSize: 16
    }
});