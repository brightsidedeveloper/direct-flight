import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import WebView from 'react-native-webview'

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://timsx2.vercel.app' }} style={{ flex: 1 }}>
        <Text> </Text>
      </WebView>
    </SafeAreaView>
  )
}
