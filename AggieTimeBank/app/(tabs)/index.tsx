// Home Page
// Shows title at top and name of user at the top right
// View everyones job postings
// Total time credits shown at top right
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { usePosts } from '../context/PostContext';


export default function Home() {
  const router = useRouter();
  const {posts} = usePosts();

  const postings = [
    { id: '1', title: 'Dog Walking', description: 'I am looking for someone to walk my dog for 30 minutes every day after school.', credits: 1,},
    { id: '2', title: 'Math Tutoring', description: 'My son is struggling with trig, if someone could help him out that would be great!', credits: 2, },
    { id: '3', title: 'Grocery Pickup', description: 'I have a Walmart order on the 15th that needs to be picked up! I can schedule for the time you can do.', credits: 1, },
    { id: '4', title: 'Yard Work', description: 'Pulling weeds, watering plants, somes simple stuff.', credits: 4, },
  ];

  const allPosts = [...postings, ...posts];
  
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Home Page</Text>
      <Text style={styles.sectionTitle}>Postings</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

  {allPosts.length === 0 ? (
    <Text style={{ color: 'white', textAlign: 'center' }}>
      No posts yet — create one in Profile!
    </Text>
  ) : (
    allPosts.map((item) => (
      <View key={item.id} style={styles.card}>
        <Text style={styles.cardText}>{item.title}</Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <View style={styles.bottomRow}>
          <Text style={styles.time}>Time: {item.credits}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(`../posting/${item.id}`)}
          >
            <Text style={styles.buttonText}>Interested</Text>
          </TouchableOpacity>
        </View>
      </View>
    ))
  )}

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