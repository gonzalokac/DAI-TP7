import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  StatusBar,
  Animated,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

export default function App() {
  const fondo = require('./assets/fondito.png');
  const fotoPerfil = require('./assets/foto-gonza.png');
  const [mensaje, setMensaje] = useState('');
  const [presionado, setPresionado] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);
  const opacidad = useState(new Animated.Value(1))[0];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplashVisible(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  const animar = () => {
    Animated.sequence([
      Animated.timing(opacidad, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: true
      }),
      Animated.timing(opacidad, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }),
    ]).start();
  };

  const handleContacto = () => {
    animar();
    Alert.alert("Mensaje enviado", mensaje || "No escribiste nada");
  };

  if (splashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/SPLASH SCREEN.png')} style={styles.splashImage} />
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2ecc71" />

      <ImageBackground source={fondo} style={styles.fondo} resizeMode="cover">
        <View style={styles.tarjeta}>
          <View style={styles.contenedorPerfil}>
            <Image source={fotoPerfil} style={styles.imagenPerfil} />
          </View>

          <Text style={styles.nombre}>Jesica González</Text>
          <Text style={styles.titulo}>Desarrolladora Frontend</Text>

          <View style={styles.iconos}>
            <Text style={styles.icono}>🐱‍💻</Text>
            <Text style={styles.icono}>💼</Text>
            <Text style={styles.icono}>✉️</Text>
            <Text style={styles.icono}>📞</Text>
          </View>

          <Pressable
            onPressIn={() => setPresionado(true)}
            onPressOut={() => setPresionado(false)}
            style={[
              styles.botonVer,
              presionado && styles.botonVerPresionado
            ]}
          >
            <Text style={styles.textoBoton}>Ver Portfolio</Text>
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            value={mensaje}
            onChangeText={setMensaje}
          />

          <Animated.View style={{ opacity: opacidad }}>
            <TouchableOpacity style={styles.botonContacto} onPress={handleContacto}>
              <Text style={styles.textoBoton}>Contactar</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  fondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta: {
    width: 320,
    backgroundColor: '#ffffffee',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  contenedorPerfil: {
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#2ecc71',
    padding: 3,
    marginBottom: 15,
  },
  imagenPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  titulo: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#34495e',
    marginBottom: 12,
  },
  iconos: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  icono: {
    fontSize: 24,
  },
  botonVer: {
    backgroundColor: '#27ae60',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
  },
  botonVerPresionado: {
    backgroundColor: '#219150',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  botonContacto: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
