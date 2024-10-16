// import React from 'react';

import { AppRegistry } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { Text } from 'react-native'
import { App } from './src/libs/components/components';
import { name as appName } from './app.json';

// const App = () => {

//   return (
//     <NavigationContainer>
//       {/* <BackgroundWrapper/> */}
// 			<Text>Some text</Text>
//     </NavigationContainer>
//   );
// };

AppRegistry.registerComponent(appName, () => App);
