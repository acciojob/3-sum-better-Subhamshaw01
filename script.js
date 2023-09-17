function threeSum(arr, target) {
	let r={};
	for(let i=0;i<arr.length-2;i++)
		{
			for(let j=0;j<arr.length-1;j++)
				{
					for(let k=0;k<arr.length;k++)
						{
							if(r[i]+r[j]+r[k]==target)
							{
								document.write(r[i]+" "+r[j]+" "+r[k])
								return true;
							}
						}
				}
			
		}
	return false;
// write your code here
  
}

module.exports = threeSum;
