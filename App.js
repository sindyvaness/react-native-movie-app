import { createTheme, ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderApp from './src/components/layouts/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MoviesContainer from './src/components/containers/MoviesContainer';
import AppStack from './src/components/stacks/AppStack';
import AppTopTabs from './src/components/tabs/AppTopTabs';

const theme = createTheme({
  lightColors: {
    primary: 'blue'
  },
  darkColors: {
    primary: 'blue'
  },
  component: {
    Button: {
      raised: true
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
         <HeaderApp></HeaderApp>
         {/* <MoviesContainer></MoviesContainer> 
         <AppStack></AppStack> */}
         <AppTopTabs></AppTopTabs>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
