import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
          {/* Header component */}
          <View style={styles.header}>
            {/* Header content */}
          </View>
    
          {/* Main content */}
          <View style={styles.content}>
            {children}
          </View>
    
          {/* Footer component */}
          <View style={styles.footer}>
            {/* Footer content */}
          </View>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        header: {
          height: 50,
          backgroundColor: '#f2f2f2',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          flex: 1,
          padding: 20,
        },
        footer: {
          height: 50,
          backgroundColor: '#f2f2f2',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
export default MainLayout;
