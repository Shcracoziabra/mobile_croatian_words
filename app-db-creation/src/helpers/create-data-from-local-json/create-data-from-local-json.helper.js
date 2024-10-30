const { readdir, readFile } = require('node:fs/promises');
const path = require('node:path');

const createDataFromLocalJSON = async (directoryPath) => {

	try {
		const files = await readdir(directoryPath);
		const targetFiles = files.filter((file) => path.extname(file) === '.json');

		const data = await Promise.all(
			targetFiles.map(async (file) => {
					const filePath = path.join(directoryPath, file);
					try {
						const dataItem = await readFile(filePath, { encoding: 'utf-8'});

						return JSON.parse(dataItem);
					} catch (err) {
						console.error(`Error while reading file ${file}: ${err}`);
					}
			})
		);

		return data.flat();

	} catch (err) {
		return console.error(`Unable to scan directory ${directoryPath}: ${err}`);
	}
};

module.exports = createDataFromLocalJSON;