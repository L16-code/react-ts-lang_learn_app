/// <reference types="vite/client" />
type LangType = "ja" | "hi" | "es" | "fr";
type WordType = {
    word: string;
    meaning: string;
    options: string[];
}
interface StateType {
    loading: boolean;
    result: string[];
    error?: string;
    words: WordType[];
    isAuthenticated: boolean;
    user: UserType | null;
}
type FetchedDataType = {
    translations: {
        text: string;
    }[];
};
type UserType = {
    username: string;
    password: string;
};