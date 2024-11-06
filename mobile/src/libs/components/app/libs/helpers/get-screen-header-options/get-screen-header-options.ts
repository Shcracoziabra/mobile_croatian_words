import { BaseColor, NumericalValue } from '~/libs/enums/enums';
import { type NativeStackNavigationOptions } from '~/libs/types/types';


const TITLE_LENGTH =  25;
type GetScreenHeaderOptionsArguments = {
	title: string;
	arrowBackButton: JSX.Element;
	homeButton?: JSX.Element;
}
const getScreenHeaderOptions = ({ arrowBackButton, homeButton, title}: GetScreenHeaderOptionsArguments): NativeStackNavigationOptions => {
	const headerTitle = title.length > TITLE_LENGTH ? title.slice(NumericalValue.ZERO, TITLE_LENGTH) + '...' : title;
	return {
		headerLeft: () => arrowBackButton,
		headerRight: () => homeButton || null,
		headerShown: true,
		headerTitleAlign: 'center',
		headerTitleStyle: {
			color: BaseColor.WHITE,
			fontFamily: 'Roboto-Thin',
		},
		headerStyle: {
			backgroundColor: BaseColor.TRANSPARENT_GRAY,
		},
		headerTransparent: true,
		title: headerTitle,
	};
};

export { getScreenHeaderOptions };
