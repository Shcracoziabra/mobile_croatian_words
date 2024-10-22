import { AdjectiveDataItem, NounDataItem, VerbDataItem } from '~/libs/types/types';

const mockAdjectiveData: AdjectiveDataItem[] = [
	{
    maskuline: 'dobrovoljan',
    feminine: 'dobrovoljna',
    neutrum: 'dobrovoljno',
    ukrainianTranslation: 'добровільний',
    exampleSentence: 'Dobrovoljan rad u zajednici uvijek je cijenjen.',
    ukrainianTranslationSentence: 'Добровільна праця в громаді завжди цінується.',
  },
  {
    maskuline: 'dodatan',
    feminine: 'dodatna',
    neutrum: 'dodatno',
    ukrainianTranslation: 'додатковий',
    exampleSentence: 'Dodatan napor donio je bolje rezultate na projektu.',
    ukrainianTranslationSentence: 'Додаткові зусилля принесли кращі результати у проєкті.',
  },
];

const mockNounData: NounDataItem[] = [
	{
    singular: 'abeceda',
    plural: 'abecede',
    ukrainianTranslation: 'абетка',
    exampleSentence: 'Djeca uče abecedu u školi.',
    ukrainianTranslationSentence: 'Діти вивчають абетку в школі.',
  },
  {
    singular: 'aerodrom',
    plural: 'aerodromi',
    ukrainianTranslation: 'аеропорт',
    exampleSentence: 'Avion je sletio na aerodrom u Zagrebu.',
    ukrainianTranslationSentence: 'Літак приземлився в аеропорту в Загребі.',
  },
];

const mockVerbData: VerbDataItem[] = [
	{
		infinitive: 'dogurati',
		presentTense: ['doguram', 'doguraš', 'dogura', 'doguramo', 'dogurate', 'doguraju'],
		pastTense: ['dogurao', 'dogurala', 'doguralo'],
		ukrainianTranslation: 'досягнути',
		exampleSentence: 'Moraš naporno raditi da bi dogurao do vrha.',
		ukrainianTranslationSentence: 'Треба наполегливо працювати, щоб досягнути вершини.',
	},
	{
		infinitive: 'dogurati',
		presentTense: ['doguram', 'doguraš', 'dogura', 'doguramo', 'dogurate', 'doguraju'],
		pastTense: ['dogurao', 'dogurala', 'doguralo'],
		ukrainianTranslation: 'досягнути',
		exampleSentence: 'Moraš naporno raditi da bi dogurao do vrha.',
		ukrainianTranslationSentence: 'Треба наполегливо працювати, щоб досягнути вершини.',
	},
];

export { mockAdjectiveData, mockNounData, mockVerbData };
