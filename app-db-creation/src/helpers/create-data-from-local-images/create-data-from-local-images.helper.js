const { readdir, readFile } = require('node:fs/promises');
const path = require('node:path');

const createDataFromLocalImages = async (directoryPath) => {

	try {
		const files = await readdir(directoryPath);
		const targetFiles = files.filter((file) => path.extname(file) === '.png' | path.extname(file) === '.jpg');
		
		const base64Images = await Promise.all(
			targetFiles.map(async (file) => {
				
					const filePath = path.join(directoryPath, file);
					const name = path.basename(filePath);
					const extensionName = path.extname(filePath);

					try {
						const data = await readFile(filePath);
						const base64Image = Buffer.from(data, 'binary').toString('base64');
						const base64ImageStr = `data:image/${extensionName.split('.').pop()};base64,${base64Image}`;
						return { name, data: base64ImageStr };
					} catch (err) {
						console.error(`Error while reading file ${file}: ${err}`);
					}
					
			})
		);

		return base64Images;

	} catch (err) {
		console.error('Error while converting images to base64: ', err);
	}

};

module.exports = createDataFromLocalImages;