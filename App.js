import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  Animated,
  SafeAreaView,
  StatusBar
} from 'react-native';

const App = () => {
  const [mensaje, setMensaje] = useState('');
  const [opacity] = useState(new Animated.Value(1));

  const handleContactar = () => {
    Alert.alert('Mensaje enviado', mensaje || 'No escribiste ningún mensaje');
  };

  const handlePressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/kMSRc7j.jpeg' }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.imgur.com/1XgRyzb.png' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Juan Pérez</Text>
          <Text style={styles.title}>Desarrollador Frontend</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu mensaje..."
            placeholderTextColor="#aaa"
            onChangeText={setMensaje}
            value={mensaje}
          />

          <TouchableOpacity style={styles.button} onPress={handleContactar}>
            <Text style={styles.buttonText}>Contactar</Text>
          </TouchableOpacity>

          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => Alert.alert('Portafolio', 'Mostrando portafolio...')}
          >
            <Animated.View style={[styles.pressableButton, { opacity }]}>
              <Text style={styles.pressableText}>Ver Perfil</Text>
            </Animated.View>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#000',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pressableButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  pressableText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
