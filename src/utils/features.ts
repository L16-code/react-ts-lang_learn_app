import axios from "axios";
import { generate } from "random-words";
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
export const translateWords = async (params: LangType) => {
    try {

        const words = generate(8).map((i) => ({
            Text: i,
        }));
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
                    'x-rapidapi-key': '8a080ea975mshf5648e6ff5f470ep1a1897jsna535245a6e99',
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
                options: ["dsfsd"]
            }
        })
        return arr
    } catch (error) {
        console.log(error)
        throw new Error("some error")
    }
}