function threeSum(arr, target) {
	for(let i=0;i<arr.length-2;i++)
		{
			for(let j=i+1;j<arr.length-1;j++)
				{
					for(let k=j+1;k<arr.length;k++)
						{
							if(arr[i]+arr[j]+arr[k]==target)
							{
								return true;
							}
						}
				}
			
		}
	return false;
// write your code here
  
}

module.exports = threeSum;
