/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/***
 * list of quotes and properties stored in an array of objects assigned to the quotes variable
 ***/
let quotes = [
  {
    quote: "Stay hungry. Stay Foolish",
    source: "Steve Jobs",
    year: 2008,
    tags: "Business",
  },
  {
    quote:
      "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    source: "William Shakespeare",
    citation: "Twelfth Night",
    tags: "Theater",
  },
  {
    quote:
      "We build our computer systems the way we build our cities: over time, without a plan, on top of ruins.",
    source: "Ellen Ullman",
    tags: "Programming",
  },
  {
    quote:
      "One of the best programming skills you can have is knowing when to walk away for a while.",
    source: "Oscar Godson",
    tags: "Programming",
  },
  {
    quote: "The computer was born to solve problems that did not exist before",
    source: "Bill Gates",
    tags: "Programming",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    source: "Martin Fowler",
    tags: "Programming",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    source: "John Johnson",
    tags: "Programming",
  },
  {
    quote: "Knowledge is power.",
    source: "Francis Bacon",
    tags: "Business",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    source: "Cory House",
    tags: "Programming",
  },
  {
    quote:
      "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    source: "Andrew Hunt",
    tags: "Programming",
  },
];

/***
 * function that generates a random quote number then returns the quote associated with that value based on its order in the array.
 ***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * function that prints the quote & properties associated with that array based on the random number generation.
 ***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let printedQuote = `<p class="quote">${randomQuote.quote}</p><p class ="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    printedQuote += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    printedQuote += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tags) {
    printedQuote += `<span class="tags">${randomQuote.tags}</span>`;
  }

  printedQuote += "</p>";

  document.getElementById("quote-box").innerHTML = printedQuote;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
