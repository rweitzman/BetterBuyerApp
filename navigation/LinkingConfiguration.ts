import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              HomeScreen: 'home',
            },
          },
          TabResults: {
            screens: {
              ResultsScreen: 'results',
            },
          },
          TabAbout: {
            screens: {
              AboutScreen: 'about',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
