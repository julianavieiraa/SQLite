import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Página Home</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Produtos')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Ver Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Categorias')}
                style = {styles.button}
                >
                    <Text style={styles.buttonText}>Ver Categorias</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#738083',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 15
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#f9edc8'
    },

    button: {
        backgroundColor: '#5e5a54',
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f9edc8',

    }
});