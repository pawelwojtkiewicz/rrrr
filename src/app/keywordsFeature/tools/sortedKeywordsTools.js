export const sortKeywords = rawKeywords => Object.entries(rawKeywords.reduce((acc, { name }) => {
    acc.hasOwnProperty(name.toString()) ? acc[name] += 1 : acc[name] = 1;
    return acc;
}, {}));
