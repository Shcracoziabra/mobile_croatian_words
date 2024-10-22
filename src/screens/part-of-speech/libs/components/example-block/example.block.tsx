import React from 'react';

import {
	Pressable,
	Text,
	View,
} from '~/libs/components/components';
import { Icon } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';

import { CollapsedSection } from '../components';

type Properties = {
	example: string;
	translation: string;
	onCollapsedSectionPress: () => void;
};

const ExampleBlock: React.FC<Properties> = ({ example, translation, onCollapsedSectionPress }) => {
	const [exampleHidden, setExampleHidden] = useState<boolean>(true);

	const handleExamplePress = () => {
		setExampleHidden(!exampleHidden);
		exampleHidden && onCollapsedSectionPress();
	};
	return (
		<Pressable onPress={handleExamplePress} style={[globalStyles.flexDirectionRow, globalStyles.rb16, globalStyles.green]}>
				{
					exampleHidden ? (
							<CollapsedSection label='Приклад' rounded/>
					) : (
						<View style={[globalStyles.flex1, globalStyles.flexDirectionRow, globalStyles.lightOrange, globalStyles.rb16]}>
							<View style={[
								globalStyles.flex1,
								globalStyles.gap8,
								globalStyles.p16,
							]}>
								<Text
									color={BaseColor.BROWN}
									weight='bold'
								>
									{example}
								</Text>
								<Text
									color={BaseColor.DARK_BROWN}
									weight='light'
								>
									{translation}
								</Text>
							</View>
							<View style={[
								globalStyles.justifyContentEnd,
								globalStyles.p12,
							]}>
								<Icon color={BaseColor.GREEN} name='arrow-drop-up' size={24}/>
							</View>
						</View>
					)
				}
			</Pressable>
	);
};

export { ExampleBlock };
