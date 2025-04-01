import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('userEmail');
        if (storedEmail) {
          setEmail(storedEmail);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); // Xóa token để đăng xuất
      navigation.replace('Login'); // Chuyển hướng về màn hình đăng nhập
    } catch (error) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>My Profile</Title>
          <Text style={styles.name}>{email || 'Unknown User'}</Text>
          <Text style={styles.jobTitle}>React Native Developer</Text>
          <Text style={styles.bio}>
            Passionate about mobile app development, currently exploring React Native.
          </Text>
          <Button
            mode="contained"
            onPress={handleSignOut}
            style={styles.signOutButton}
          >
            Sign Out
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    padding: 16,
    borderRadius: 10,
    elevation: 3, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  bio: {
    fontSize: 14,
    color: '#444',
    marginBottom: 24,
    textAlign: 'center',
  },
  signOutButton: {
    marginTop: 16,
  },
});

export default ProfileScreen;
