// Profile Page
// Stores logged in user info
// View current/old job postings
// Total time credits 
// User info

import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { usePosts } from '../context/PostContext';


export default function Profile() {
  const { posts, addPost } = usePosts();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [credits, setCredits] = useState('');

  const newPost = () => {
    if (!title || !description || !credits) return;

    const newPost = {
      id: Date.now().toString(),
      title,
      description,
      credits: parseInt(credits),
    };

    addPost(newPost);

    // clear inputs
    setTitle('');
    setDescription('');
    setCredits('');
  };

  return (
    // {user.name}
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Profile Page</Text>
      <Text style={styles.userTitle}>Shokhina</Text>

      <Text style={styles.sectionTitle}>Create Posting</Text>


      {/* Tile*/}
      <TextInput
        style={styles.input}
        placeholder="Type title here..."
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
      />

      {/* DESCRIPTION */}
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#aaa"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* CREDITS */}
      <TextInput
        style={styles.input}
        placeholder="Time credits (e.g. 2)"
        placeholderTextColor="#aaa"
        value={credits}
        onChangeText={setCredits}
        keyboardType="numeric"
      />

      {/* SUBMIT BUTTON */}
      <TouchableOpacity style={styles.button} onPress={newPost}>
        <Text style={styles.buttonText}>Create Post</Text>
      </TouchableOpacity>

      {/* FEED */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.time}>
              ⏱ {item.credits} credits
            </Text>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 50,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'cursive',
  },
  userTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b63737',
    fontFamily: 'aesthetic',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#37a1b6',
    fontFamily: 'aesthetic',
  },
  inputTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
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
  input: {
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
});