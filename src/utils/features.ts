import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";
const generateMCQ = (meaning: {
    Text: string
}[], idx: number): string[] => {
    const correctAns: string = meaning[idx].Text;
    // An Array with all words except for correct ans
    const allMeaningExceptForCorrect = meaning.filter(
        (i) => i.Text !== correctAns
    );
    // Randomly genrating 3 elements from incorrectArray
    const incorrectOptions: string[] = _.sampleSize(
        allMeaningExceptForCorrect,
        3
    ).map((i) => i.Text);
    const mcqOptions = _.shuffle([...incorrectOptions, correctAns]);
    return mcqOptions;
}
export const translateWords = async (params: LangType): Promise<WordType[]> => {
    try {
        const result = generate(8);
        const words = Array.isArray(result)
            ? result.map((i: string) => ({ Text: i })) // If it's an array, use map
            : [{ Text: result }]; // If it's a string, create a single-element array

        console.log(words);
        // const words = generate(8).map((i:string) => ({
        //     Text: i,
        // }));
        // cost words=generate(8).array.forEach(element => {

        // });
        const rapidkey = import.meta.env.VITE_RAPID_API
        const response = await axios.post(
            'https://microsoft-translator-text.p.rapidapi.com/translate',
            words,
            {
                params: {
                    "to[0]": params,
                    'api-version': '3.0',
                    profanityAction: 'NoAction',
                    textType: 'plain'
                },
                headers: {
                    'x-rapidapi-key': rapidkey,
                    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                    'Content-Type': 'application/json'
                }
            })
        // const options = {
        //     method: 'POST',
        //     url: '',

        //     data: {
        //         '0': {
        //             Text: 'I would really like to drive your car around the block a few times.'
        //         }
        //     }
        // };
        // console.log(data[0].translations[0].text)
        const receive: FetchedDataType[] = response.data;
        const arr: WordType[] = receive.map((i, index) => {
            const options: string[] = generateMCQ(words, index)
            return {
                word: i.translations[0].text,
                meaning: words[index].Text,
                options: options
            }
        })
        return arr
    } catch (error) {
        console.log(error)
        throw new Error("some error")
    }
}
export const countMatchingElements = (
    arr1: string[],
    arr2: string[]
): number => {
    if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");

    let matchedCount = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) matchedCount++;
    }

    return matchedCount;
};

export const fetchAudio = async (text: string, language: LangType): Promise<string> => {
    // import axios from 'axios';
    const key = import.meta.env.VITE_TEXT_TO_SPEECH
    // VITE_RAPID_API_TEXT
    const rapidApikey = import.meta.env.VITE_RAPID_API_TEXT
    const encodedParams = new URLSearchParams({
        src: text,
        r: "0",
        c: "mp3",
        f: "8khz_8bit_mono",
        b64: "true",
    });
    if (language === "ja") encodedParams.set("hl", "ja-jp");
    else if (language === "es") encodedParams.set("hl", "es-es");
    else if (language === "fr") encodedParams.set("hl", "fr-fr");
    else encodedParams.set("hl", "hi-in");

    const { data }: { data: string } = await axios.post("https://voicerss-text-to-speech.p.rapidapi.com/",
        encodedParams,
        {
            params: { key },
            headers: {
                'x-rapidapi-key': rapidApikey,
                'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        }
    )
    return data;
}