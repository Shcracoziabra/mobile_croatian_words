import React from 'react';

import { Icon, Pressable, View } from '~/libs/components/components';
import { BaseColor } from '~/libs/enums/enums';
import { useState } from '~/libs/hooks/hooks';
import { globalStyles } from '~/libs/styles/styles';

import { CollapsedSection } from '../../components/components';
import { ARROW_SIZE } from '../../constants/constants';

type Properties = {
	children: React.ReactNode;
	onCollapsedSectionPress: () => void;
};

const GrammarBlock: React.FC<Properties> = ({
	children,
	onCollapsedSectionPress,
}) => {
	const [grammarHidden, setGrammarHidden] = useState<boolean>(true);

	const handleGrammarPress = () => {
		setGrammarHidden(!grammarHidden);
		grammarHidden && onCollapsedSectionPress();
	};

	return (
		<Pressable
			onPress={handleGrammarPress}
			style={[
				globalStyles.flexDirectionRow,
				globalStyles.green,
				grammarHidden && globalStyles.pb2,
			]}
		>
			{grammarHidden ? (
				<CollapsedSection label='Граматика' />
			) : (
				<View
					style={[
						globalStyles.flex1,
						globalStyles.flexDirectionRow,
						globalStyles.lightGray,
					]}
				>
					<View style={globalStyles.flex1}>{children}</View>
					<View style={[globalStyles.justifyContentEnd, globalStyles.p12]}>
						<Icon color={BaseColor.GREEN} name='arrow-drop-up' size={ARROW_SIZE} />
					</View>
				</View>
			)}
		</Pressable>
	);
};

export { GrammarBlock };
