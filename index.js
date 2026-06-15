
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss"
  },
  {
    quote: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "To handle yourself, use your head; to handle others, use your heart.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  }
];
const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
const index = Math.floor(Math.random()*20);

quote.textContent = quotes[index].quote;
})
