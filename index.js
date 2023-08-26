const quote =[
    {text: "The greatest glory in living lies not in never falling, but in rising every time we fall", author:"Nelson Mandela"},
    {text: "The way to get started is to quit talking and begin doing", author:"Walt Disney"},
    {text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma", author:"Steve Jobs"},
    {text: "If life were predictable it would cease to be life, and be without flavor", author:"Eleanor Roosevelt"},
    {text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough", author:"Oprah Winfrey"},
    {text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success", author:"James Cameron"},
    {text: "Life is what happens when you're busy making other plans", author:"John Lennon"},
    {text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author:"Mother Teresa"},
    {text: "When you reach the end of your rope, tie a knot in it and hang on.", author:"Franklin D. Roosevelt"},
    {text: "Always remember that you are absolutely unique. Just like everyone else. ", author:"Margaret Mead"},
    {text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author:"Robert Louis Stevenson"}
  ];
  //load-window
window.onload = init;
function init() {
    generateQuote()
}
//new quote button
function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quote.length);
    let randomQuoteData = quote[randomIndex]
    document.getElementById("text").innerText = randomQuoteData.text;
    document.getElementById("author").innerText = randomQuoteData.author;

}
