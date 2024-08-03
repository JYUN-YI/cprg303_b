import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';


interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);

  const toggleSoundEffects = () => setSoundEffectsEnabled(prev => !prev);
  const toggleMusic = () => setMusicEnabled(prev => !prev);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>
        <Image
          source={require('./app_icon.png')}
          style={styles.image}
        />       Sakujo
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Reset Game Logic */}}>
        <Text style={styles.buttonText}>Resume</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Share Logic */}}>
        <Text style={styles.buttonText}>Share Sakujo</Text>
      </TouchableOpacity>
      
      <Text style={styles.subtitle}>Settings</Text>
      
      <View style={styles.switchContainer}>
        <Text style={{ color: 'white' }}>Sound Effects</Text>
        <Switch value={soundEffectsEnabled} onValueChange={toggleSoundEffects} />
      </View>
      
      <View style={styles.switchContainer}>
        <Text style={{ color: 'white' }}>Music</Text>
        <Switch value={musicEnabled} onValueChange={toggleMusic} />
      </View>
      
      <Text style={styles.subtitle}>Legal Information</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Show Terms */}}>
        <Text style={styles.buttonText}>Terms & Conditions</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Show Privacy Policy */}}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      
      <Text style={styles.subtitle}>More</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Send Feedback */}}>
        <Text style={styles.buttonText}>Send Feedback</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Manage Consent */}}>
        <Text style={styles.buttonText}>Manage Consent</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => {/* Show Credits */}}>
        <Text style={styles.buttonText}>Credits</Text>
      </TouchableOpacity>
      
      <Text style={styles.socialText}>Save your progress</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://facebook.com')}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#333',
    zIndex: 1000,
    paddingTop: 20,
    paddingLeft: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 10, 
    zIndex: 1001,
  },
  closeText: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'left',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Menu;
