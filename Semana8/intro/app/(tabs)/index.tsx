import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hola</Text>
    </SafeAreaView>
  )
}

const styles = {
  container: {
    backgroundColor: '#0000ff',
    color: 'red',
    flex:1
  },
  text: {
    color: 'red',
    fontSize: 30
  }
}

export default index

