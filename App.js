import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, StatusBar } from 'react-native';

const items = [
  { id: 1, text: 'Imagen 1/ Buena Calidad', image: require('./assets/favicon.png') },
  { id: 2, text: 'Imagen 2/ Media Calidad', image: require('./assets/icon.png') },
  { id: 3, text: 'Imagen 3/ Baja Calidad', image: require('./assets/splash.png') },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});