import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <><MainLayout />
    
    <View>
      <Text>App Name</Text>
      <Text>Your Name</Text>
      <Text>Current Date</Text>
    </View></>
  );
};

export default AboutScreen;
