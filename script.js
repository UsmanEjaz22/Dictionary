// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
let searchBtn = document.querySelector("#searchButton");





let getMeaning = async () => {

    let inputWord = document.querySelector("#word").value;
    let body = document.querySelector("body");
    let bUrl = " https://api.dictionaryapi.dev/api/v2/entries/en/" + inputWord;
    console.log(bUrl);

    let sec = document.createElement("section");
    sec.style.width = "50%";
    body.append(sec);
    

    let response = await fetch(bUrl);
    console.log(response);      // JSON format

    let data = await response.json();                // make this and AWAIT function

    console.log(data[0]);
    console.log(data[0].meanings[0].definitions[0].definition);
    console.log(data[0].meanings.forEach(meaning => {
        meaning.definitions.forEach(definition => {
            definition.definition;
        });
    }));


    let container = document.createElement("div");
    container.innerHTML = "";
    data[0].meanings.forEach((meaning) => {
        
        container.innerHTML += `<h2>Part of speech: '${meaning.partOfSpeech}'</h2>`;
        meaning.definitions.forEach((definition, index) => {
            container.innerHTML += `<p>Definition ${index + 1}: ${definition.definition}`
        })
    })
    container.style.color = "whitesmoke"; 
    container.style.padding = "1.1rem 8rem";
    container.style.margin = "1.2rem 0"
    container.style.borderRadius = "1.2rem"
    container.style.backgroundColor = "#539987";
    container.style.fontFamily = "Ubuntu";
    body.append(container);
}

searchBtn.addEventListener("click", getMeaning);