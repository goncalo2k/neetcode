function containsDuplicate(nums: number[]): boolean {
    let freqMap = new Map<number, number>();
    let containsDups = false;
    nums.forEach(num => {
        if (freqMap.has(num)) { 
            containsDups = true;
             } else {
                freqMap.set(num, 1);
             }
    });
    return containsDups;
};