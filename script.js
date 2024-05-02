const quotes = [
    {
        quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
    },
    {
        quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
    },
    {
        quote:
            "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
    },
    {
        quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
    },
    {
        quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
    }
];

const btn = document.querySelector('#generate-quote');
const quote = document.querySelector('.quote--text');
const quoteAuthor = document.querySelector('.quote--author');

const randomQuoteIndex = arr => Math.floor(Math.random() * arr.length)

const postRandomQuote = arr => {
    console.log('clicked')
    let index = randomQuoteIndex(arr)
    quote.textContent = arr[index].quote;
    quoteAuthor.textContent = arr[index].author;

}

btn.onclick = () => postRandomQuote(quotes);