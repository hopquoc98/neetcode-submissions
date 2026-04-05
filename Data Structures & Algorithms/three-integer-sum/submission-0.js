class Solution {
    threeSum(nums) {
        var srtNums = nums.sort((a, b) => a - b);
        var result = [];

        for (var i = 0; i < srtNums.length - 2; i++) {
            if(srtNums[i] > 0) break;
            if(i > 0 && srtNums[i] === srtNums[i - 1]) continue;

            let left = i + 1;
            let right = srtNums.length - 1;

            while (left < right){
               var sum = srtNums[i] + srtNums[left] + srtNums[right];
                if (sum === 0) {
                  result.push([srtNums[i], srtNums[left], srtNums[right]]);
                  while ( left < right && srtNums[left] === srtNums[left + 1]) left++;
                  while ( left < right && srtNums[right] === srtNums[right - 1]) right--;

                  left++;
                  right--;
                }
                else if (sum < 0){
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }

}
