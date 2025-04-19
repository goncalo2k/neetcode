function topKFrequent(nums: number[], k: number): number[] {
    let freqMap = new Map<number, number>();
    for(let num of nums) {
        if(freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num)!+1);
        } else {
            freqMap.set(num, 1);
        }
    }
    return Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]).slice(0,k).map(v => Number(v[0]))
};