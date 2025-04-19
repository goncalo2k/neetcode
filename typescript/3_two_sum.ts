function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map();
  
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        let diff = target - num;

        if(numMap.has(diff)) {
            return [index, numMap.get(diff)].sort();
        }
        else {
            numMap.set(num, index);
        }
    }
    return [];
  };