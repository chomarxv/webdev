a=[23,44,12,46,100,25]

function minmaxmean(arr)
{

let min=arr[0];
let max=arr[0];
sum=0;
//min
for(i=0;i<arr.length;i++)
{
if(min>arr[i])
{
    min=arr[i]
}
}
//max
for(i=0;i<arr.length;i++)
    {
    if(max<arr[i])
    {
        max=arr[i]
    }
    }
//mean
    for(i=0;i<arr.length;i++)
        {
           sum=sum+arr[i];
        }
mean=sum/arr.length;

console.log("Minimum value is: ",min)
console.log("Maximum value is: ",max)
console.log("Mean value is: ",mean)

}

minmaxmean(a)