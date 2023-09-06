import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeadCard() {
  return (
    <View> 
      <LinearGradient colors={['#ededed', '#ededed']} style={styles.headContainer} >  
      <View style={styles.logoContainer}>
        <Image source={require('./Images/ShivShaktiFinal.png')} style={styles.logo} />
      </View>  
      <Text style={styles.appName}>शिव शक्ति</Text>
      <View style={styles.logoContainer}>
        <FontAwesome5 name={'language'} size={40} color={'black'} light/>
      </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
 headContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20

 }, 
 appName:{
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
 },
 logoContainer:{
  marginLeft: 'auto'
 },
 logo:{
  width: 70, 
  height: 70,
  borderRadius: 50,
 },
 
})
