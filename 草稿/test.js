var twoSum = function(nums, target) {
    let mapArr = new Map();
    for(let i = 0;i<nums.length;i++){
        let subtruct = target - nums[i];
        if(mapArr.has(subtruct)){
            return [mapArr.get(subtruct),i]
        }else{
            mapArr.set(nums[i],i)
        }
    console.log(mapArr)

    }
    console.log()
};

let arr = [2,11,12,7]
let target = 9;
console.log(twoSum(arr,target));
    