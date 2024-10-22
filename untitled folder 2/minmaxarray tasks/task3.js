info1={name:"asd",type:"residential",value:100}
info2={name:"qweqwe",type:"commercial",value:100}
info3={name:"asaadd",type:"agricultural",value:100}

function computeTax(obj)
{
type=obj["type"];
value=obj["value"];
if(type =="residential")
    {
        console.log("tax: ",(5/100)*value)
    }

else if (type =="commercial")
    {
        console.log("tax: ",(10/100)*value)
    }
else if (type =="agricultural")
    {
        console.log("tax: ",(15/100)*value)
    }



}
    computeTax(info1)
    computeTax(info2)
    computeTax(info3)
   

