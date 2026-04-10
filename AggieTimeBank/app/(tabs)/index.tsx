// Home Page
// Shows title at top and name of user at the top right
// View everyones job postings
// Total time credits shown at top right
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const postings = [
    { id: '1', title: 'Dog Walking' },
    { id: '2', title: 'Math Tutoring' },
    { id: '3', title: 'Grocery Pickup' },
    { id: '4', title: 'Yard Work' },
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Home Page</Text>
      <Text style={styles.sectionTitle}>Postings</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator = {false}>
        {/* dummie postings 
        change to link with database later*/} 

          {/*card 1*/}
        <View style={styles.card}>
          <Text style={styles.cardText}>Dog Walking</Text>

          <Text style = {styles.description}>
            I am looking for someone to walk my dog for 30 minutes every day after school. I am a student and have a busy schedule, so I need someone reliable to help me out. I can offer 1 time credit per walk. Daily dog walking is essential for a canine's physical health, mental stimulation, and behavioral well-being, providing necessary exercise to prevent obesity, joint issues, and boredom-induced destructive behavior. Regular walks allow dogs to explore, socialize, and bond with their owners, acting as a crucial outlet for energy and environmental stimulation.
          </Text>

          <View style = {styles.bottomRow}>
            <Text style = {styles.time}>Time: 1</Text>

            <TouchableOpacity style = {styles.button} onPress={() => router.push('../posting/1')}>
              <Text style = {styles.buttonText}>Interested</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*card 2*/}
        <View style={styles.card}>
          <Text style={styles.cardText}>Sewing</Text>

          <Text style = {styles.description}>
            I am looking for someone to help me with sewing projects. I am a student and have a busy schedule, so I need someone reliable to help me out. I can offer 5 time credit per session.
          </Text>

          <View style = {styles.bottomRow}>
            <Text style = {styles.time}>Time: 5</Text>

            <TouchableOpacity style = {styles.button} onPress={() => router.push('../posting/1')}>
              <Text style = {styles.buttonText}>Interested</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*card 3*/}
        <View style={styles.card}>
          <Text style={styles.cardText}>Tutoring</Text>

          <Text style = {styles.description}>
            I am looking for someone to help me with tutoring sessions. I am studing for a big exam and need help with understanding the material. I can offer 3 time credit per session. 
          </Text>

          <View style = {styles.bottomRow}>
            <Text style = {styles.time}>Time: 3</Text>

            <TouchableOpacity style = {styles.button} onPress={() => router.push('../posting/1')}>
              <Text style = {styles.buttonText}>Interested</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*card 4*/}
        <View style={styles.card}>
          <Text style={styles.cardText}>Dog Droppings Cleanup</Text>

          <Text style = {styles.description}>
            Help me clean up dog poop. 
          </Text>

          <View style = {styles.bottomRow}>
            <Text style = {styles.time}>Time: 1</Text>

            <TouchableOpacity style = {styles.button} onPress={() => router.push('../posting/1')}>
              <Text style = {styles.buttonText}>Interested</Text>
            </TouchableOpacity>
          </View>
        </View>
        

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 50,
    backgroundColor: '#000000',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'cursive',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b63737',
    fontFamily: 'aesthetic',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#606060',
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 50,
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#41915f', 
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#41915f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});