import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Board from '../components/Board';
import Menu from '../components/Menu';

const App: React.FC = () => {
  const [score, setScore] = React.useState(0);
  const [coins, setCoins] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    Animated.timing(slideAnim, {
      toValue: menuOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.coinsText}>Coins: {coins}</Text>
      </View>
      <Board />
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        <Menu onClose={toggleMenu} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: '#222',
  },
  menuButton: {
    marginLeft: 10,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  scoreText: {
    color: '#fff',
    fontSize: 18,
  },
  coinsText: {
    color: '#fff',
    fontSize: 18,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#333',
    zIndex: 1000,
  },
});

export default App;
