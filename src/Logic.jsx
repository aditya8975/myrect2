export default function Logic(){
  

const date=new Date();
const currenthour=date.getHours();
let greet;
const customStyle={
  color:""
}
// this will change the color dynamic according to hour at precent time 

if(currenthour<12){
  greet="Good Morning";
  customStyle.color="green";
}
else if(currenthour<18){
  greet="Good Afternoon";
  customStyel.color="yellow";
}
else{
  greet="Good Evening";
  customStyle.color="blue";
}
return ( 
<div className='heading' style={customStyle}> {greet}</div>
  )

  }