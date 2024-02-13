let input=document.querySelector("input");
let currentTime=document.querySelector(".div4");
let temperature=document.querySelector(".div3");
let humidityElement=document.querySelector(".humidity");
let windElement=document.querySelector(".windElement");

let url="https://wttr.in/DELHI?format=3";
let humidityUrl="https://wttr.in/mumbai?format=%h";
let windElementurl="https://wttr.in/mumbai?format=%w";

input.addEventListener("change",async (element)=>{
    console.log(element);
    
    let inputToData= element.target.value.toUpperCase();
    console.log(inputToData);
    let response=await axios.get(`https://wttr.in/${inputToData}?format=3`);
    
    
        console.log(response.data);
        temperature.innerText=response.data;
    try{
        let currentTimeResponse=await axios.get(`https://wttr.in/${inputToData}?format=%T`);
        currentTime.innerText=`Time:${currentTimeResponse.data}`;
    
        let humidityResponse=await axios.get(`https://wttr.in/${inputToData}?format=%h`);
        humidityElement.innerText=humidityResponse.data;


        let windResponse=await axios.get(`https://wttr.in/${inputToData}?format=%w`);
        windElement.innerText=windResponse.data;

    }
    catch(err){
        alert("information not found");
    }
    
});