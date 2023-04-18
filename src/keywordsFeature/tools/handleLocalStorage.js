export const saveRawKeywordToLocalStorage = (keywordData) => {
    const rawKeywords = JSON.parse(localStorage.getItem("rawKeywords"));
    rawKeywords.push(keywordData);
    localStorage.setItem("rawKeywords", JSON.stringify(rawKeywords));
};

export const removeRawKeywordFromLocalStorage = (keywordId) => {
    const rawKeywords = JSON.parse(localStorage.getItem("rawKeywords"));
    const removeId = rawKeywords.findIndex((word) => word.id === keywordId);
    rawKeywords.splice(removeId, 1);
    localStorage.setItem("rawKeywords", JSON.stringify(rawKeywords));
};

export const saveSortedKeywordToLocalStorage = (keywordName) => {
    const sortedKeywords = JSON.parse(localStorage.getItem("sortedKeywords"));

    if (sortedKeywords.hasOwnProperty(keywordName)) {
        sortedKeywords[keywordName]++
    } else {
        sortedKeywords[keywordName] = 1;
    }

    localStorage.setItem("sortedKeywords", JSON.stringify(sortedKeywords));
};

export const removeSortedKeywordFromLocalStorage = (keywordName) => {
    const sortedKeywords = JSON.parse(localStorage.getItem("sortedKeywords"));

    if (sortedKeywords[keywordName] > 1) {
        sortedKeywords[keywordName]--
    } else {
        delete sortedKeywords[keywordName]; 
    }

    localStorage.setItem("sortedKeywords", JSON.stringify(sortedKeywords));
};

export const getInitialRawKeywordsLocalStorage = () => {
    const rawKeywords = JSON.parse(localStorage.getItem("rawKeywords"));

    if (!rawKeywords) localStorage.setItem("rawKeywords", JSON.stringify([]));

    return rawKeywords;
}

export const getInitialSortedKeywordsLocalStorage = () => {
    const sortedKeywords = JSON.parse(localStorage.getItem("sortedKeywords"));

    if (!sortedKeywords) localStorage.setItem("sortedKeywords", JSON.stringify({}));

    return sortedKeywords;
}
