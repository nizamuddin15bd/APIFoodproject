const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
loadQuotes();

const displayQuote = quotes => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quotes.quote;
}