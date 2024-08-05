import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';


const HomeScreen = ({ navigation }) => {
  return (
    <><MainLayout />
    
    <View>
      {/* Your todo list and form */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')} />
    </View></>
  );
};

export default HomeScreen;
