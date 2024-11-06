export {
	type ImageSourcePropType,
	type StyleProp,
	type TextStyle,
	type ViewStyle,
} from 'react-native';
export { type NativeStackNavigationOptions, type NativeStackNavigationProp } from '@react-navigation/native-stack';
export { type SharedValue } from 'react-native-reanimated';

export { type AdjectiveDataItem } from './adjective-data-item/adjective-data-item.type';
export { type GameDataItem } from './game-data-item/game-data-item.type';
export { type IconName } from './icon-name/icon-name.type';
export { type RootNavigationParameterList } from './root-navigation-parameter-list/root-navigation-parameter-list.type';
export { type NounDataItem } from './noun-data-item/noun-data-item.type';
export { type PartOfSpeechName } from './part-of-speech-name/part-of-speech-name.type';
export { type TaleDataItem } from './tale-data-item/tale-data-item.type';
export { type TranslateListItem } from './translate-list-item/translate-list-item.type';
export { type VerbDataItem } from './verb-data-item/verb-data-item.type';

type ValueOf<T> = T[keyof T];

export { type ValueOf };
