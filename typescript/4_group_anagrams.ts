function groupAnagrams(strs: string[]): string[][] {
    let anagramMap = new Map();
    const anagramList: string[][] = [];
    for (let index = 0; index < strs.length; index++) {
        const currStr = strs[index];
        const sortedStr = currStr.split("").sort().join();   
        if (anagramMap.has(sortedStr)) {
            anagramList[anagramMap.get(sortedStr)].push(currStr);
        } else {
            anagramMap.set(sortedStr, anagramList.length)
            anagramList.push([currStr]);
        }
    }
    return anagramList;
};