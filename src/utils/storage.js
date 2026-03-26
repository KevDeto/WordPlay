const WORD_INDEX_KEY = "word-index";
const WORD_LIST_KEY = "word-shuffled";

export const saveWordProgress = (index, list) => {
    localStorage.setItem(WORD_INDEX_KEY, index);
    localStorage.setItem(WORD_LIST_KEY, JSON.stringify(list));
};

export const loadWordProgress = () => {
    const index = localStorage.getItem(WORD_INDEX_KEY);
    const list = localStorage.getItem(WORD_LIST_KEY);

    return {
        index: index ? parseInt(index) : 0,
        list: list ? JSON.parse(list) : null,
    };
};