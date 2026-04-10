import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PostingDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Dummy data (same idea as before)
  const postings: Record<string, any> = {
    '1': {
      title: 'Dog Walking',
      description: 'Need someone to walk my dog for 1 hour in the evening.',
      time: '2 Hours',
    },
    '2': {
      title: 'Math Tutoring',
      description: 'Help with algebra and calculus concepts.',
      time: '3 Hours',
    },
    '3': {
      title: 'Grocery Pickup',
      description: 'Pick up groceries from the local store.',
      time: '1 Hour',
    },
    '4': {
      title: 'Yard Work',
      description: 'Mowing lawn and light yard cleanup needed.',
      time: '4 Hours',
    },
  };

  const post = postings[id as string];

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Posting not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/screens/home')}
      >
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{post.title}</Text>

      {/* Description */}
      <Text style={styles.description}>{post.description}</Text>

      {/* Time credits */}
      <Text style={styles.time}>Time Credits: {post.time}</Text>

      {/* Accept button */}
      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptText}>Accept Job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backText: {
    fontSize: 16,
    marginLeft: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#41915f',
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#606060', 
  },

  time: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#b63737',
  },

  acceptButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  acceptText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});