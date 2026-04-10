import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AggieTimeBank</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => router.push('/screens/home')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => router.push('/screens/profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#e2d54a',
  },
  buttonContainer: {
    marginVertical: 10,
    width: 200,
  },
});