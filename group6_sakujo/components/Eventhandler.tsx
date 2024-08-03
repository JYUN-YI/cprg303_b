import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const EventHandler = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text>Event Handler</Text>
      <Text>Count: {count}</Text>
      <ChildComponent handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </View>
  );
};

const ChildComponent = ({ handleIncrement, handleDecrement }) => {
  return (
    <View>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

export default EventHandler;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});
