import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function FooterCard() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <View style={styles.devIcon}>
            <FontAwesome5 name={'user'} size={30} color={'#949494'} solid/>
            <Text style={styles.text}>About Us</Text>
          </View>
          <View style={styles.waIcon}>
            <FontAwesome5 name={'whatsapp-square'} size={30} color={'#949494'} />
            <Text style={styles.text}>Contact Us</Text>
          </View>
          <View style={styles.starIcon}>
            <FontAwesome5 name={'star'} size={30} color={'#949494'} solid/>
            <Text style={styles.text}>Rate us</Text>
          </View>
          <View style={styles.barIcon}>
            <FontAwesome5 name={'bars'} size={30} color={'#949494'} />
            <Text style={styles.text}>More</Text>
          </View>
          
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:100,
        backgroundColor: '#ededed',
        marginTop: 650,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    icon:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 30,
      marginTop: 15     
    },
    devIcon:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    waIcon:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    starIcon:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    barIcon:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text:{
      color: '#000000',
      textAlign: 'center',
      fontWeight: '400',
      margin: 10
    }
})