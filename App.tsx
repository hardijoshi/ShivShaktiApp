import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadCard from './components/HeadCard'
import BookCard from './components/BookCard'
import PanchangCard from './components/PanchangCard'
import FooterCard from './components/FooterCard'

export default function App() {
  return (
    <View>
      <HeadCard/>
      <BookCard/>
      <PanchangCard/>
      <FooterCard/>
    </View>
  )
}

const styles = StyleSheet.create({})