const WORD_INDEX_KEY = "word-index";
const WORD_LIST_KEY = "word-shuffled";
const WORD_LENGTH_KEY = "word-length";

export const saveWordProgress = (index, list) => {
    localStorage.setItem(WORD_INDEX_KEY, index);
    localStorage.setItem(WORD_LIST_KEY, JSON.stringify(list));
    localStorage.setItem(WORD_LENGTH_KEY, length);
};

export const loadWordProgress = () => {
    const index = localStorage.getItem(WORD_INDEX_KEY);
    const list = localStorage.getItem(WORD_LIST_KEY);
    const length = localStorage.getItem(WORD_LENGTH_KEY);

    return {
        index: index ? parseInt(index) : 0,
        list: list ? JSON.parse(list) : null,
        length: length ? parseInt(length) : 5,
    };
};