import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

type BlockSelectorProps = {
  onSelect: (shape: string[][], color: string) => void;
};

const BlockSelector: React.FC<BlockSelectorProps> = ({ onSelect }) => {
  // Define the getRandomColor function at the top
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const shapes = [
    { shape: [['1', '1'], ['1', '0']], color: getRandomColor() }, // L Shape
    { shape: [['1', '1', '1'], ['0', '1', '0']], color: getRandomColor() }, // T Shape
    { shape: [['1', '1', '1', '1']], color: getRandomColor() },       // I Shape
  ];

  return (
    <View style={styles.container}>
      {shapes.map((block, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.blockButton, { backgroundColor: block.color }]}
          onPress={() => onSelect(block.shape, block.color)}
        >
          <Text style={styles.buttonText}>Block {index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  blockButton: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default BlockSelector;
