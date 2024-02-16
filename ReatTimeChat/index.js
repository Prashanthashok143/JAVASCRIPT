const conatiner2=document.getElementById("conatiner2")
const inputele=document.getElementById("inputele")
const addbtn=document.getElementById("addbtn")
const addinput=document.getElementById("inputvaluesadd")

function addfun()
{
   if( inputele.value=="")
   {
    alert("M ledu Ikkada Dolla")
   }
   else
   {
    const inputvalue=inputele.value;
    const newele=document.createElement('div');
    newele.setAttribute("class","listitems")
    newele.innerHTML=`${inputvalue}  `; // <i id="deleteicon" class="fa fa-trash-o"></i> if we want to add delete icon
    addinput.appendChild(newele)
    inputele.value="";
    addbtn.scrollTop = addbtn.scrollHeight;
    // newele.querySelector("i").addEventListener("click",remove)
    // function remove() // created addEven..and function to remove input values what we entered
    // {
    //     addinput.removeChild(newele);
       
        
    // }
   }

}

function changeinto1()
{
    document.getElementById("msg").innerText="Prashanth"
}
function changeinto2()
{
    document.getElementById("msg").innerText="Ashok"
}

function changeinto3()
{
    document.getElementById("msg").innerText="Maheswary"  
}
function changeinto4()
{
    document.getElementById("msg").innerText="Shirisha"
}
function changeinto5()
{
    document.getElementById("msg").innerText="Nagaraju"
}function changeinto6()
{
    document.getElementById("msg").innerText="Vikranth"
}
function changeinto7()
{
    document.getElementById("msg").innerText="Mahesh"
}function changeinto8()
{
    document.getElementById("msg").innerText="Sarah"
}
function changeinto9()
{
    document.getElementById("msg").innerText="Prashi"
}

const threedots=document.getElementById("threedot").addEventListener("click",navlinksdis)
function navlinksdis(){
    
const navlinks=document.getElementById("navlinks")
// const settings=document.getElementById("settings")
navlinks.classList.toggle("show")
// settings.appendChild(navlinks)

}
const dotss=document.getElementById("dotss").addEventListener("click",More)
function More()
{
    const moreoptions=document.getElementById("moreoptions")
    const morelinks=document.getElementById("morelinks")
    morelinks.classList.toggle("displaythemore")
    moreoptions.appendChild(morelinks)
}




let stream;
let intial=true;
async function startCamera()
{ 
if(intial)
{
    const mediaStream =await navigator.mediaDevices.getUserMedia({ video: true });

// Access the video element and set its source to the camera stream
const videoElement = document.getElementById('cameraPreview');
videoElement.srcObject = mediaStream;

// Save the stream for later use (e.g., to stop the camera)
stream = mediaStream;
}
else{
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    const videoElement = document.getElementById('cameraPreview');
    videoElement.srcObject = null;
}
intial=!intial;
}


function clearChat() {
    
   

    // Remove all child elements (messages)
    while(addinput.firstChild) {
        addinput.removeChild(addinput.firstChild);
    }
// in the addinput element we add our listiems.so here we are removing all child from there   
}





















