import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getPosts, getPost } from "./api"; // Modify this line to include your updated API functions

const Posts = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const result = await getPosts();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSingleItem = async (id) => {
    try {
      const item = await getPost(id);
      setSelectedItem(item);
    } catch (error) {
      console.error("Error fetching single item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => fetchSingleItem(item.id)}
    >
      <Text style={styles.title}>Title: {item.title}</Text>
      <Text style={styles.body}>Body: {item.body}</Text>
      <Text style={styles.userId}>User ID: {item.userId}</Text>
      <Text style={styles.id}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedItem ? (
        <View style={styles.selectedItemContainer}>
          <Text style={styles.selectedItemText}>{selectedItem.title}:</Text>
          <Text style={styles.selectedItemDetails}>{selectedItem.body}</Text>
          <Button title="< back" onPress={() => setSelectedItem(null)} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
  userId: {
    fontSize: 14,
    color: "gray",
  },
  id: {
    fontSize: 14,
    color: "gray",
  },
  selectedItemContainer: {
    alignItems: "center",
  },
  selectedItemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  selectedItemDetails: {
    fontSize: 16,
  },
});

export default Posts;
