const CARDS_PER_PAGE = 20;

import {
	AdjectiveDataItem,
	ImageSourcePropType,
	NounDataItem,
	TaleDataItem,
	VerbDataItem,
} from '~/libs/types/types';

const mockTalesList: { title: string; imageSource: ImageSourcePropType }[] = [
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_1.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_2.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_3.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_4.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_5.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_6.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_7.png') as ImageSourcePropType,
	},
	{
		title: 'Весняний день з Аною, Златком та Міцею',
		imageSource:
			require('~/assets/backgrounds/story_8.png') as ImageSourcePropType,
	},
];

const mockTalesData: TaleDataItem[] = [
	{
		titleHr: 'Proljetni dan s Anom, Zlatkom i Micom',
		titleUk: 'Весняний день з Аною, Златком та Міцею',
		text: [
			{
				hr: 'Bio je to prekrasan proljetni dan u malom selu, gdje su kuće bile jednostavne, ali ugodne, a priroda se budila iz zimskog sna.',
				uk: 'Це був прекрасний весняний день у маленькому селі, де будинки були простими, але затишними, а природа пробуджувалася після зимової сплячки.',
			},
			{
				hr: 'Sunce je nježno grijalo, ptice su cvrkutale, a svježi miris cvijeća i trave širio se zrakom.',
				uk: 'Сонце ніжно гріло, птахи співали, а свіжий запах квітів і трави наповнював повітря.',
			},
			{
				hr: 'Proljeće je stiglo, a životinje su bile živahnije nego ikad.',
				uk: 'Весна прийшла, і тварини були жвавішими, ніж будь-коли.',
			},
			{
				hr: 'Ispred jedne male, drvene kućice, stajala je djevojčica po imenu Ana.',
				uk: "Перед маленьким дерев'яним будиночком стояла дівчинка на ім'я Ана.",
			},
			{
				hr: 'Imala je dugu smeđu kosu i nosila laganu haljinu sa cvjetnim uzorkom, savršeno prikladnu za ovo sunčano jutro.',
				uk: 'У неї було довге каштанове волосся, і вона носила легку сукню з квітковим візерунком, ідеально підходящу для цього сонячного ранку.',
			},
			{
				hr: 'U rukama je držala malu zdjelu mlijeka.',
				uk: 'Вона тримала в руках маленьку мисочку з молоком.',
			},
			{
				hr: 'Ali ovo nije bila obična zdjela mlijeka!',
				uk: 'Але це була не звичайна мисочка молока!',
			},
			{
				hr: 'O, ne. Ovo mlijeko bilo je posebno pripremljeno za dva mačka koji su živjeli kod nje – jedan žuti, po imenu Zlatko, i jedan crni, imena Mica.',
				uk: "О, ні. Це молоко було спеціально приготоване для двох котів, які жили з нею – жовтий, на ім'я Златко, і чорний, на ім'я Міца.",
			},
			{
				hr: 'Zlatko i Mica su već dugo čekali na svoju poslasticu.',
				uk: 'Златко і Міца вже давно чекали на своє частування.',
			},
			{
				hr: 'Ležali su na trijemu kuće, promatrajući djevojčicu kako dolazi prema njima.',
				uk: 'Вони лежали на ґанку будинку, спостерігаючи, як дівчинка підходить до них.',
			},
			{
				hr: 'Zlatko je uvijek bio nestrpljiv i veselio se svakom obroku kao da je njegov posljednji.',
				uk: 'Златко завжди був нетерплячим і радів кожній їжі, ніби вона була останньою.',
			},
			{
				hr: 'Njegovo krzno sjajilo je pod suncem poput zlatne trave, a oči su mu bile uperene u zdjelu u rukama djevojčice.',
				uk: 'Його хутро блищало на сонці, як золота трава, а його очі були спрямовані на миску в руках дівчинки.',
			},
			{
				hr: 'Mica, s druge strane, bila je prava dama – ponosna i dostojanstvena.',
				uk: 'Міца, з іншого боку, була справжньою леді – гордою і гідною.',
			},
			{
				hr: 'Crno joj je krzno bilo uredno, a šapama je polako gladila tlo, kao da čekanje uopće nije problem.',
				uk: 'Її чорне хутро було охайним, а лапками вона повільно погладжувала землю, ніби чекання для неї не було проблемою.',
			},
			{
				hr: 'Ana se nasmijala kad je vidjela kako je Zlatko već počeo mijaukati, skakutati i oko nje kružiti.',
				uk: 'Ана засміялася, коли побачила, що Златко вже почав нявкати, стрибати і кружляти навколо неї.',
			},
			{
				hr: "'Strpljenja, Zlatko,' rekla je s osmijehom. 'Doći će tvoje mlijeko, ne brini.'",
				uk: '«Терпіння, Златко,» сказала вона з усмішкою. «Молоко буде, не хвилюйся.»',
			},
			{
				hr: "Mica je samo sjela i pogledala ga s nekom vrstom prezirne nadmoćnosti, kao da mu kaže: 'Opet si nestrpljiv, ha?'",
				uk: 'Міца просто сіла і подивилася на нього з якимось презирливим виразом, ніби кажучи: «Знову нетерплячий, так?»',
			},
			{
				hr: 'Djevojčica se spustila na koljena i stavila zdjelu ispred njih.',
				uk: 'Дівчинка присіла навколішки і поставила миску перед ними.',
			},
			{
				hr: 'Zlatko je prvi dotrčao i počeo piti, mlijeko mu je kapalo s brkova.',
				uk: 'Златко перший підбіг і почав пити, молоко капало з його вусів.',
			},
			{
				hr: 'Ana se nasmijala, gledajući ga kako uživa.',
				uk: 'Ана засміялася, спостерігаючи, як він насолоджується.',
			},
			{
				hr: 'Mica je prišla polako, dostojanstveno, kao da nije ni gladna.',
				uk: 'Міца підійшла повільно, гідно, ніби вона навіть не була голодною.',
			},
			{
				hr: 'Lagano je liznula mlijeko, a onda pogledala Anu, kao da se zahvaljuje na trudu.',
				uk: 'Вона обережно лизнула молоко, а потім подивилася на Ану, ніби дякуючи за старання.',
			},
			{
				hr: 'Dok su mačci pili, iznad njih je proletjela lastavica.',
				uk: 'Поки коти пили, над ними пролетіла ластівка.',
			},
			{
				hr: 'Ana je podigla pogled prema nebu i primijetila kako lastavica kruži oko kuće, možda tražeći mjesto za gnijezdo.',
				uk: 'Ана підняла погляд до неба і помітила, як ластівка кружляє біля будинку, можливо, шукаючи місце для гнізда.',
			},
			{
				hr: "'Proljeće je stvarno stiglo,' pomislila je Ana, nasmiješena.",
				uk: '«Весна дійсно прийшла,» подумала Ана з усмішкою.',
			},
			{
				hr: 'Udaljeni zvuk potoka i šum vjetra kroz krošnje drveća dodatno su uljepšali mirnoću trenutka.',
				uk: 'Віддалений шум струмка і вітер, що гойдав крони дерев, додавали цьому моменту ще більше спокою.',
			},
			{
				hr: 'No, priča ovdje ne završava!',
				uk: 'Але історія тут не закінчується!',
			},
			{
				hr: "Dok su Zlatko i Mica uživali u svom mlijeku, iznenada se začuo glasni 'Mijau!'",
				uk: 'Поки Златко і Міца насолоджувалися своїм молоком, раптом пролунало гучне «Няв!»',
			},
			{
				hr: 'Zlatko se previše približio zdjeli i nehotice gurnuo Mici u šapu.',
				uk: 'Златко надто наблизився до миски і випадково штовхнув Міцу в лапу.',
			},
			{
				hr: 'Mica ga je strogo pogledala, podigla šapu i nježno ga odgurnula natrag.',
				uk: 'Міца суворо глянула на нього, підняла лапу і обережно відштовхнула його назад.',
			},
			{
				hr: 'Nije bila previše ljuta, ali dovoljno da pokaže tko je tu glavni.',
				uk: 'Вона не була занадто зла, але досить, щоб показати, хто тут головний.',
			},
			{
				hr: 'Ana se nasmijala tako jako da je gotovo pala s trijema.',
				uk: 'Ана так сильно засміялася, що ледь не впала з ґанку.',
			},
			{
				hr: "'Oh, Zlatko, uvijek ti napraviš neku glupost,' rekla je.",
				uk: '«Ох, Златко, ти завжди зробиш якусь дурницю,» сказала вона.',
			},
			{
				hr: 'Zlatko je samo podigao glavu, nevinog izraza, kao da ne razumije što je učinio krivo.',
				uk: 'Златко просто підняв голову з невинним виразом обличчя, ніби він не розуміє, що зробив не так.',
			},
			{
				hr: 'Sunce je nastavilo grijati, a mlijeko je polako nestajalo iz zdjele.',
				uk: 'Сонце продовжувало гріти, а молоко поступово зникало з миски.',
			},
			{
				hr: 'Zlatko je ležao, sav sretan i sit, dok je Mica elegantno završila svoje piće i legla pored njega, uvjerena da je ona glavna.',
				uk: 'Златко лежав, щасливий і ситий, а Міца елегантно допила молоко і лягла поруч, впевнена, що вона головна.',
			},
			{
				hr: 'Ana ih je gledala s ljubavlju, osjećajući se sretno što ima takva dva zabavna prijatelja.',
				uk: "Ана дивилася на них з любов'ю, відчуваючи себе щасливою, що має таких двох кумедних друзів.",
			},
			{
				hr: 'Dok je proljeće raslo oko njih, a lastavica kružila nebom, Ana je znala da će ovo biti još jedan divan dan ispunjen smijehom, mačjim igricama i toplinom sunčevih zraka.',
				uk: 'Поки весна розквітала навколо них, а ластівка кружляла в небі, Ана знала, що це буде ще один чудовий день, сповнений сміху, котячих ігор і тепла сонячних променів.',
			},
			{
				hr: 'U njenom malom svijetu, to je bilo sve što je trebala – malo mlijeka, dva mačka i jedan miran proljetni dan.',
				uk: 'У її маленькому світі це було все, що їй потрібно – трохи молока, двоє котів і один спокійний весняний день.',
			},
		],
		'vocabulary': [
			{ hr: 'proljeće', uk: 'весна' },
			{ hr: 'sunce', uk: 'сонце' },
			{ hr: 'mlijeko', uk: 'молоко' },
			{ hr: 'mačka', uk: 'кішка' },
			{ hr: 'kuća', uk: 'будинок' },
			{ hr: 'cvijet', uk: 'квітка' },
			{ hr: 'zrak', uk: 'повітря' },
			{ hr: 'trava', uk: 'трава' },
			{ hr: 'djevojčica', uk: 'дівчинка' },
			{ hr: 'zlatan', uk: 'золотий' },
			{ hr: 'crn', uk: 'чорний' },
			{ hr: 'šapa', uk: 'лапа' },
			{ hr: 'brkovi', uk: 'вуса' },
			{ hr: 'prozor', uk: 'вікно' },
			{ hr: 'lastavica', uk: 'ластівка' },
			{ hr: 'gnijezdo', uk: 'гніздо' },
			{ hr: 'smijeh', uk: 'сміх' },
			{ hr: 'prijatelj', uk: 'друг' },
			{ hr: 'haljina', uk: 'сукня' },
			{ hr: 'čeka', uk: 'чекати' },
			{ hr: 'miran', uk: 'спокійний' },
			{ hr: 'dan', uk: 'день' },
			{ hr: 'grijanje', uk: 'нагрівання' },
			{ hr: 'igrice', uk: 'ігри' },
			{ hr: 'šuma', uk: 'ліс' },
			{ hr: 'glas', uk: 'голос' },
			{ hr: 'priča', uk: 'історія' },
			{ hr: 'krzno', uk: 'хутро' },
			{ hr: 'trenutak', uk: 'момент' },
			{ hr: 'toplina', uk: 'тепло' },
			{ hr: 'pogled', uk: 'погляд' },
			{ hr: 'sit', uk: 'ситий' },
			{ hr: 'ljubav', uk: 'любов' },
			{ hr: 'obrok', uk: 'їжа' },
			{ hr: 'potok', uk: 'струмок' },
			{ hr: 'vjetar', uk: 'вітер' },
			{ hr: 'zrake', uk: 'промені' },
			{ hr: 'miris', uk: 'запах' },
			{ hr: 'životinje', uk: 'тварини' },
			{ hr: 'kapati', uk: 'крапати' },
			{ hr: 'trijem', uk: 'ґанок' },
			{ hr: 'smiriti', uk: 'заспокоїти' },
			{ hr: 'spavati', uk: 'спати' },
			{ hr: 'lijep', uk: 'гарний' },
			{ hr: 'sjajiti', uk: 'блищати' },
			{ hr: 'nestrpljiv', uk: 'нетерплячий' },
			{ hr: 'igra', uk: 'гра' },
			{ hr: 'čekati', uk: 'чекати' },
			{ hr: 'pogledati', uk: 'подивитися' },
		],
	},
];

const mockAdjectiveData: AdjectiveDataItem[] = [
	{
		maskuline: 'dobrovoljan',
		feminine: 'dobrovoljna',
		neutrum: 'dobrovoljno',
		ukrainianTranslation: 'добровільний',
		exampleSentence: 'Dobrovoljan rad u zajednici uvijek je cijenjen.',
		ukrainianTranslationSentence:
			'Добровільна праця в громаді завжди цінується.',
	},
	{
		maskuline: 'dodatan',
		feminine: 'dodatna',
		neutrum: 'dodatno',
		ukrainianTranslation: 'додатковий',
		exampleSentence: 'Dodatan napor donio je bolje rezultate na projektu.',
		ukrainianTranslationSentence:
			'Додаткові зусилля принесли кращі результати у проєкті.',
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
		presentTense: [
			'doguram',
			'doguraš',
			'dogura',
			'doguramo',
			'dogurate',
			'doguraju',
		],
		pastTense: ['dogurao', 'dogurala', 'doguralo'],
		ukrainianTranslation: 'досягнути',
		exampleSentence: 'Moraš naporno raditi da bi dogurao do vrha.',
		ukrainianTranslationSentence:
			'Треба наполегливо працювати, щоб досягнути вершини.',
	},
	{
		infinitive: 'dogurati',
		presentTense: [
			'doguram',
			'doguraš',
			'dogura',
			'doguramo',
			'dogurate',
			'doguraju',
		],
		pastTense: ['dogurao', 'dogurala', 'doguralo'],
		ukrainianTranslation: 'досягнути',
		exampleSentence: 'Moraš naporno raditi da bi dogurao do vrha.',
		ukrainianTranslationSentence:
			'Треба наполегливо працювати, щоб досягнути вершини.',
	},
];

export {
	CARDS_PER_PAGE,
	mockAdjectiveData,
	mockNounData,
	mockVerbData,
	mockTalesData,
	mockTalesList,
};
