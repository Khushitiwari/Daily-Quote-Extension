async function getQuote(){

    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");

    quoteEl.innerText = "Loading...";

    try{

        const res = await fetch("https://zenquotes.io/api/quotes/");
        const data = await res.json(); //converting the response to JavaScript object.

        quoteEl.innerText = data[0].q;
        authorEl.innerText = "- " + data[0].a;

    }catch(err){

        quoteEl.innerText = "Failed to load quote.";
        authorEl.innerText = "";

    }

}

document.getElementById("newQuote").addEventListener("click", getQuote);

document.getElementById("copyQuote").addEventListener("click", () => {

    const quote = document.getElementById("quote").innerText;
    const author = document.getElementById("author").innerText;

    navigator.clipboard.writeText(`${quote} ${author}`);

});

getQuote();