import { AppRegistry } from 'react-native';
import { App } from './src/libs/components/components';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
