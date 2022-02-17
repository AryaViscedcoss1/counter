var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var display=document.getElementById("display");
var num
function fdisplay(num)
{
    display.innerHTML=Number(display.innerHTML)+num
}
function fplus()
{
    fdisplay(1);
}
plus.addEventListener('click',fplus)
function fminus()
{   
    if (Number(display.innerHTML)==0)
    {
        return ;
    }
  
    fdisplay(-1);
}
minus.addEventListener('click',fminus)


