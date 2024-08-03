import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput } from 'react-native';

const data = [
  {
    id: '1',
    user: { username: 'user1', profile_pic: 'https://randomuser.me/api/portraits/men/1.jpg' },
    image_url: 'https://picsum.photos/id/1011/200/300',
    likes: 120,
    caption: 'This is a beautiful landscape.',
    comments: 'Amazing view!',
  },
  {
    id: '2',
    user: { username: 'user2', profile_pic: 'https://randomuser.me/api/portraits/women/2.jpg' },
    image_url: 'https://picsum.photos/id/1015/200/300',
    likes: 150,
    caption: 'Another scenic picture.',
    comments: 'Looks great!',
  },
  {
    id: '3',
    user: { username: 'user3', profile_pic: 'https://randomuser.me/api/portraits/men/3.jpg' },
    image_url: 'https://picsum.photos/id/1016/200/300',
    likes: 200,
    caption: 'Nature at its best.',
    comments: 'Stunning!',
  },
  {
    id: '4',
    user: { username: 'user4', profile_pic: 'https://randomuser.me/api/portraits/women/4.jpg' },
    image_url: 'https://picsum.photos/id/1025/200/300',
    likes: 180,
    caption: 'Wonderful sunset.',
    comments: 'Breathtaking!',
  },
];

const Post = React.memo(({ item }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={{ uri: item.user.profile_pic }} />
        <Text style={styles.username}>{item.user.username}</Text>
      </View>
      <Image style={styles.postImage} source={{ uri: item.image_url }} />
      <View style={styles.footer}>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={styles.comments}>{item.comments}</Text>
      </View>
    </View>
  );
});

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = useCallback((text) => {
    setSearchQuery(text);
    setFilteredData(
      data.filter(item => item.user.username.toLowerCase().includes(text.toLowerCase()))
    );
  }, []);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
  };

  const debouncedHandleSearch = useMemo(() => debounce(handleSearch, 300), [handleSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search based on the posts"
        placeholderTextColor="green"
        value={searchQuery}
        onChangeText={debouncedHandleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    margin: 16,
    borderRadius: 8,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200, // Adjusted height to display the image properly
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    marginBottom: 5,
  },
  comments: {
    color: 'gray',
  },
});

export default App;
