
//slider(misic,volume)
let slider=document.querySelectorAll(".slider");
let prog=document.querySelector("#progressbar");
let volbar=document.querySelector("#volbar");
let currvol=slider[1].value;
slider[0].oninput=function()
{
   prog.style.width=this.value+"%";
   
}
 
slider[1].oninput=function()
{
   volbar.style.width=this.value+"%";
   currvol=this.value;
}
console.log(currvol);

//pause/play
let plp=document.querySelector("#plp");
const plpurl=["url('pause.png')","url('play.png')"];
let p=0;
plp.onclick=function()
{
   this.style.backgroundImage=plpurl[p];
   if(p==0) p=1;
   else p=0;
}

//searchbar
let sb=document.querySelector("#searchbar");
let sic=document.querySelector("#searchicon");
sic.onclick=function()
{
   sb.style.backgroundColor="rgba(15, 21, 39, 0.9)"; 
   sb.innerHTML +="<input type='text' id='search' placeholder='search'>";
}

//volume off/on
const volurl=["url('volume.png')","url('no-sound.png')"];
let icon=document.querySelector("#icon");
let v=1;
icon.onclick=function()
{
   this.style.backgroundImage=volurl[v];

   if(v==1) 
   {
      v=0;
      slider[1].value="0";
      volbar.style.width="0%";
   }
   else{
    v=1;
    slider[1].value=currvol;
    volbar.style.width=currvol+"%";
   }
};

//date time
const dtmanage=()=>
{
   let d=new Date();
   let mon=d.getMonth();
   let dy=d.getDay();
   let dn=d.getDate()
   dn=checkTime(dn);
   let y=d.getFullYear();
   let h=d.getHours()
   h=checkTime(h);
   // let s=d.getSeconds()
   // s=checkTime(s);
   let min=d.getMinutes()
   min=checkTime(min);
   const clksys='a.m.';
   const months = ["Jan", "Feb", "Ma", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let date=document.querySelector("#date");
   let time=document.querySelector("#time");
   date.innerHTML=days[dy]+", "+dn+" "+months[mon]+" "+y;
   if(h>12) clksys='p.m.'
   time.innerHTML=h+":"+min +" "+clksys;
   setTimeout(dtmanage,1000);
}
function checkTime(i) {
   if (i < 10) {i = "0" + i}; 
   return i;
 }

