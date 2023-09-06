import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function PanchangCard() {
  return (
    <View style={styles.container}>
      <LinearGradient 
      style={styles.panchangCard}
      colors={['#538FFB', '#5737D6']}
      >  
        <View>
            <Text style={styles.innerText}>पंचांग</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
    },
    panchangCard:{
        height: 200,
        width: 380,
        backgroundColor: '#000000',
        marginVertical: 350,
        margin: 15,
        borderRadius: 20,     
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerText:{
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: '0Surendra Normal'
    }
})
