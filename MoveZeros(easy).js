function moveZeros(nums) {
	let slow = 0;
	for (let fast = 0; fast < nums.length; fast++) {
		if (nums[fast] != 0 && nums[slow] == 0) {
			[nums[slow], nums[fast]] = [nums[fast], nums[slow]];
		}
		if (nums[slow] !== 0) {
			slow++;
		}
	}
	console.log(nums);
}

moveZeros([1, 0, 4, 0, 2]);
