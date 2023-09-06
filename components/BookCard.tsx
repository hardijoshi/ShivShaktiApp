import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function BookCard() {
  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          style={styles.card}
          colors={['#FF9F4A', '#FF3C83']} 
        >
          <Text style={styles.innerText}>सरल अष्टाध्यायी रुद्री</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.card}
          colors={['#FED54A', '#FF9347']} 
        >
          <Text style={styles.innerText}>सरल दुर्गा सप्तशति</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 300,
    borderRadius: 14,
    marginTop: 18,
    margin: 8,
  },
  innerText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold' 
  },
});
