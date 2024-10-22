export { type ImageSourcePropType, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
export { type NativeStackNavigationProp } from '@react-navigation/native-stack';
export { type SharedValue } from 'react-native-reanimated';

export { type AdjectiveDataItem } from './adjective-data-item/adjective-data-item.type';
export { type GameDataItem } from './game-data-item/game-data-item.type';
export { type AdjectiveNavigationParameterList } from './adjective-navigation-parameter-list/adjective-navigation-parameter-list.type';
export { type NounNavigationParameterList } from './noun-navigation-parameter-list/noun-navigation-parameter-list.type';
export { type RootNavigationParameterList } from './root-navigation-parameter-list/root-navigation-parameter-list.type';
export { type NavigationScreenProperties } from './navigation-screen-properties/navigation-screen-properties.type';
export { type NounDataItem } from './noun-data-item/noun-data-item.type';
export { type PartOfSpeechName } from './part-of-speech-name/part-of-speech-name.type';
export { type TaleNavigationParameterList } from './tale-navigation-parameter-list/tale-navigation-parameter-list.type';
export { type VerbDataItem } from './verb-data-item/verb-data-item.type';
export { type VerbNavigationParameterList } from './verb-navigation-parameter-list/verb-navigation-parameter-list.type';

type ValueOf<T> = T[keyof T];

export { type ValueOf };
