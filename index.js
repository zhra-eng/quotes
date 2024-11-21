/*
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.getElementById('quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.getElementById('authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
*/














    var quotes =[ {
        quote : "“Be yourself; everyone else is already taken.”",
        author : " Oscar Wilde"},
        {
        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author : "Marilyn Monroe"},
        {
        quote : "“So many books, so little time.”",
        author : "Frank Zappa"},
        {
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author : "Albert Einstein"},
        {
        quote : "“A room without books is like a body without a soul.”",
        author : "Marcus Tullius Cicero"},
        {
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author : " Bernard M. Baruch"},
        {
        quote : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author : "Dr. Seuss"

    }
]
    
    
function addQuote(){

    var random =Number.parseInt( Math.random()*quotes.length + 1);
 document.getElementById("quote").innerHTML = `${quotes[random].quote}`;
 document.getElementById("author").innerHTML = `--${quotes[random].author}`;

}