const quotes = [
    {
        quote : "I don't know the key to success, but the key to failure is trying to please everybody.",
        author : "Bill Cosby",
    },
    {
        quote : "The best way to predict the future is to invent it.",
        author : "Alan Kay",
    },
    {
        quote : "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author : "Thomas A. Edison",
    },
    {
        quote : "They must often change who would be constant in happiness or wisdom.",
        author : "Confucius",
    },
    {
        quote : "It's not true that life is one damn thing after another; it is one damn thing over and over.",
        author : "Edna St. Vincent Millay",
    },
    {
        quote : "No darkness lasts forever. And even there, there are stars.",
        author : "Ursula K.Le Guin",
    },
    {
        quote : "We know you're tired, tired and scared. Happens to everyone, okay? Just don't let your feet stop.",
        author : "Haruki Murakami",
    },
    {
        quote : "Step out of the history that is holding you back, Step into the new story you are willing to create.",
        author : "Oprah Winfrey",
    },
    {
        quote : "Genius is nothing but a great capacity for patience.",
        author : "Buffon",
    },
    {
        quote : "Accept challenges, so that you may feel the exhilaration of victory.",
        author : "George S. Patton",
    },
    {
        quote : "I know of no more encouraging fact than the unquestioned ability of a man to elevate his life by conscious endeavor.",
        author : "Henry David Thoreau",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;