const formatDataItemPropsToColumnNames = ({data, columnNamesToDataItemPropsMap}) => {
	return data.map((item) => {
		let formattedItem = {};

		for (let columnName in columnNamesToDataItemPropsMap) {
			const itemProperty = columnNamesToDataItemPropsMap[columnName];
			const formattedValue = Array.isArray(item[itemProperty]) ? item[itemProperty].join(', ') : item[itemProperty];
			formattedItem[columnName] = formattedValue;
		}

		return formattedItem;
	});
};

module.exports = formatDataItemPropsToColumnNames;