import { StyleSheet } from 'react-native';
import ResultsScreenInfo from '../components/ResultsScreenInfo';
import { Text, View } from '../components/Themed';

export default function ResultsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ResultsScreenInfo path="/screens/ResultsScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
