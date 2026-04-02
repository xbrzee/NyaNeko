async function getCatFact(){
    
    try{
        const response = await fetch("https://meowfacts.herokuapp.com/");
        const data = await response.json();
        document.getElementById("catfact").textContent=data.data[0];
    }

    catch(error){
        console.error("Opps something went wrong:",error);
    }
}

document.getElementById("factbox").addEventListener("click",getCatFact);

getCatFact();