var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var display=document.getElementById("display");


function fplus()
{
    display.innerHTML=Number(display.innerHTML)+1
}
plus.addEventListener('click',fplus)
function fminus()
{   
    if (Number(display.innerHTML)==0)
    {
        return ;
    }
  
    display.innerHTML=Number(display.innerHTML)-1;
}
minus.addEventListener('click',fminus)