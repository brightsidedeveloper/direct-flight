import React, { useEffect, useRef } from 'react'
import { SafeAreaView, Text } from 'react-native'
import WebView from 'react-native-webview'

export default function Index() {
  const webviewRef = useRef<WebView>(null)

  useEffect(() => {
    if (!webviewRef.current) return
    const runFirst = `
      window.isNativeApp = true;
      `
    webviewRef.current.injectJavaScript(runFirst)
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView ref={webviewRef} source={{ uri: 'https://brightsidedeveloper.com' }} style={{ flex: 1 }} />
    </SafeAreaView>
  )
}
