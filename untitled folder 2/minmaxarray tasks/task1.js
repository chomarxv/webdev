array=[23,44,12,46,100,25]

function arraysum(arr)
{
sum=0;
for(i=0;i<arr.length;i++)
{
   sum=sum+arr[i];
}
console.log("Sum of given array is: ",sum)
}

arraysum(array)