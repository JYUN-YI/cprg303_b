import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const App = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    console.log('Input field focused');
  };

  const handleBlur = () => {
    setIsFocused(false);
    console.log('Input field lost focus');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      <TextInput
        style={[styles.input, isFocused && styles.focusInput]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Focus on the code"
      />
      <Text style={isFocused ? styles.focusedText : styles.defaultText}>
        {isFocused ? 'Input is focused' : 'Input is not focused'}
      </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  focusInput: {
    borderColor: 'red',
  },
  defaultText: {
    color: 'black',
  },
  focusedText: {
    color: 'red',
  },
});
