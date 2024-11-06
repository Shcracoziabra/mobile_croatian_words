import RNFS from 'react-native-fs';
import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Platform } from 'react-native';
import { AdjectiveDataItem, NounDataItem, VerbDataItem } from '~/libs/types/types';
import { NumericalValue } from '~/libs/enums/enums';

type OffsetLImitSelectProperties = {
	limit: number;
	offset: number;
};

type StoryTitleQueryResultItem = {
	id: number
	titleHr: string;
	titleUk: string;
}

type StoryTranslationPairItem = {
	id: number;
	hr: string;
	uk: string;
}

class Database {
	#dbName: string;
	#dbPath: string;
	#db: SQLiteDatabase | null;

	constructor() {
		this.#dbName = 'database.sqlite3';
		this.#dbPath = `${RNFS.DocumentDirectoryPath}/${this.#dbName}`;
		this.#db = null;
		enablePromise(true);
	}

	private async copyDatabaseFileIfNotExist(): Promise<void> {
    const dbExists = await RNFS.exists(this.#dbPath);

    if (!dbExists) {
			const isAndroid = Platform.OS === 'android';

      try {
        isAndroid && await RNFS.copyFileAssets(`www/${this.#dbName}`, this.#dbPath);
				!isAndroid && await RNFS.copyFile(`${RNFS.MainBundlePath}/${this.#dbName}`, this.#dbPath);
        console.log('Database copied to device successfully.');
      } catch (error) {
        console.error('Error copying database file:', error);
				RNFS.readDir(RNFS.DocumentDirectoryPath).then(res => console.log(res));
        throw error; // Rethrow to handle in initDatabase
      }
    }
  }

	public async initDatabase(): Promise<void> {
    try {
      await this.copyDatabaseFileIfNotExist();
      this.#db = await this.openDatabase();
      console.log('Database initialized and ready to use.');
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

	public async disconnect(): Promise<void> {
		this.#db?.close();
	}

	private openDatabase(): Promise<SQLiteDatabase> {
    return new Promise((resolve, reject) => {
      const db = openDatabase(
        { name: this.#dbName, location: 'default', createFromLocation: 1 },
        () => {
          console.log('Database opened successfully!');
          resolve(db);
        },
        (error) => {
          console.error('Error opening database:', error);
          reject(error);
        }
      );
    });
  }

	public async getTableEntryCount(tableName: string): Promise<number> {
		try {
			const answer = await this.#db?.executeSql(`SELECT COUNT (*) as count FROM ${tableName}`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.item(0).count;
		} catch(error) {
			console.error(`Error counting rows in '${tableName}' table:`, error);
			return NumericalValue.ZERO;
		}
	}

	public async getTableEntriesWithOffsetAndLimit<T>({tableName, offset, limit}: { tableName: string } & OffsetLImitSelectProperties): Promise<T[] | null> {
		try {
			const answer = await this.#db?.executeSql(`
				SELECT * FROM ${tableName}
				LIMIT ${limit}
				OFFSET ${offset}
			`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.raw() as T[];
		} catch(error) {
			console.error(`Error getting entries from '${tableName}' table:`, error);
			return null;
		}
	}

	public async getAdjectives({ offset, limit }: OffsetLImitSelectProperties) {
		return await this.getTableEntriesWithOffsetAndLimit<AdjectiveDataItem>({ tableName: 'adjectives', offset, limit });
	}

	public async getNouns({ offset, limit }: OffsetLImitSelectProperties) {
		return await this.getTableEntriesWithOffsetAndLimit<NounDataItem>({ tableName: 'nouns', offset, limit });
	}

	public async getVerbs({ offset, limit }: OffsetLImitSelectProperties) {
		return await this.getTableEntriesWithOffsetAndLimit<VerbDataItem>({ tableName: 'verbs', offset, limit });
	}

	public async getImage(id: number): Promise<string | void> {
		try {
			const answer = await this.#db?.executeSql(`
				SELECT data FROM images
				WHERE id = ${id};
			`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.item(0);
		} catch(error) {
			console.error('Error getting image:', error);
		}
	}

	public async getStoryTitles(id: number): Promise<StoryTitleQueryResultItem | void> {
		try {
			const answer = await this.#db?.executeSql(`
				SELECT titleHr, titleUk FROM stories
				WHERE id = ${id};
			`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.item(0);
		} catch(error) {
			console.error('Error getting story titles:', error);
		}
	}

	public async getStories(): Promise<({ data: string } & StoryTitleQueryResultItem)[] | null> {
		try {
			const answer = await this.#db?.executeSql(`
				SELECT stories.id, titleUk, titleHr, data FROM stories
				INNER JOIN images ON images.id = stories.imageId;
			`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.raw();
		} catch(error) {
			console.error('Error getting stories:', error);
			return null;
		}
	}

	public async getStoryWords(id: number): Promise<StoryTranslationPairItem[] | null> {
		try {
			const answer = await this.#db?.executeSql(`
				SELECT id, hr, uk FROM storyWords
				WHERE storyId = ${id} 
				ORDER BY hr;
			`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.raw();
		} catch(error) {
			console.error('Error getting story words:', error);
			return null;
		}
	}

	public async getSentences(id: number): Promise<StoryTranslationPairItem[] | null> {
		try {
			const answer = await this.#db?.executeSql(`
				SELECT id, hr, uk FROM storySentences
				WHERE storyId = ${id} 
				ORDER BY sentenceIndex;
			`);
			if (!answer){
				throw 'The database does not exist';
			}
			const [result] = answer;
			return result.rows.raw();
		} catch(error) {
			console.error('Error getting story sentences:', error);
			return null;
		}
	}
}

const database = new Database();
export { database };
