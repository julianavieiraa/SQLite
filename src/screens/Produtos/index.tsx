import { StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

type Produto = {
    id: number,
    nomeProduto: string,
    valorParc: number,
    valorAVista: number,
    categoria: string
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Produtos'>;

export default function Produtos() {

    const navigation = useNavigation<NavigationProps>();

    const produtos: Produto[] = [
        { id: 1, nomeProduto: 'Teclado', valorParc: 120, valorAVista: 105.9, categoria: 'Periféricos' },
        { id: 2, nomeProduto: 'Mouse', valorParc: 65, valorAVista: 50.5, categoria: 'Periféricos' },
        { id: 3, nomeProduto: 'Monitor', valorParc: 700, valorAVista: 650.5, categoria: 'Hardware' },
        { id: 4, nomeProduto: 'Cadeira Gamer', valorParc: 1200, valorAVista: 1100, categoria: 'Móveis' },
        { id: 5, nomeProduto: 'MousePad', valorParc: 20, valorAVista: 15.0, categoria: 'Acessórios' }
    ];

    const [busca, setBusca] = useState('');

    const produtosFiltrados = produtos.filter(produto =>
        produto.nomeProduto.toLowerCase().startsWith(busca.toLowerCase())
    );
    <LinearGradient
        colors={['#F0E2D2', '#C7B7A3', '#561C24']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
    ></LinearGradient>
    return (
        <View style={styles.container}>

            <View style={styles.buscaContainer}>
                <TextInput
                    placeholder="Digite para pesquisar"
                    style={styles.textBusca}
                    value={busca}
                    onChangeText={setBusca}
                />
            </View>

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonNovo}
                    onPress={() => navigation.navigate('NovoProduto')}
                >
                    <Text style={styles.textNovo}>Novo +</Text>
                </TouchableOpacity>
            </View>

            {/* LISTA */}
            <FlatList
                data={produtosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>

                        <Text style={styles.nomeProduto}>
                            {item.nomeProduto}
                        </Text>

                        <Text style={styles.info}>
                            R$ {item.valorParc.toFixed(2)} - {item.categoria}
                        </Text>
                        <View style={styles.acoes}>
                            <TouchableOpacity style={styles.botaoEditar}>
                                <Text style={styles.textoBotao}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botaoexcluir}>
                                <Text style={styles.textoBotao}>Excluir</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#585e60'
    },

    buscaContainer: {
        marginBottom: 15
    },

    textBusca: {
        borderRadius: 25,
        backgroundColor: '#eae7de',
        padding: 15,
        elevation: 2,
        color: '#561C24'
    },

    header: {
        alignItems: 'flex-end',
        marginBottom: 20
    },

    buttonNovo: {
        backgroundColor: '#3e3c37',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 3
    },

    textNovo: {
        color: '#E8D8C4',
        fontWeight: 'bold'
    },

    card: {
        backgroundColor: '#c3c2be',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        elevation: 2
    },

    nomeProduto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#561C24',
        marginBottom: 5,
        textAlign: 'center'
    },

    info: {
        color: '#3e3c37',
        marginBottom: 10,
        fontWeight: '500'
    },

    acoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10
    },

    botaoEditar: {
        backgroundColor: '#686252',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        flex: 1,
        maxWidth: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textoBotao: {
        color: '#dcd5cd',
        fontWeight: 'bold'
    },

    botaoexcluir: {
        backgroundColor: '#6e6d6a',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        flex: 1,
        maxWidth: 140,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

