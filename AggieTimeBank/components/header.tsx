import {View, Text, StyleSheet} from 'react-native';

type HeaderProps = {
    appName: string;
    username: string;
    timeBalance: number;
};

// Calling each attribute
export default function Header({appName, username, timeBalance}: HeaderProps){
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>{appName}</Text>
            <Text style={styles.user}>Welcome, {username}</Text>
            <Text style={styles.timeBalance}> Credits: {timeBalance}</Text>
        </View>
    );
}

// Creating attributes
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    user: {
        fontSize: 14,
        color: 'white'
    },
    timeBalance: {
        fontSize: 14,
        color: 'white'
    }
});