const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is what we make it, always has been, always will be. - Grandma Moses",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
  ];

  function generateRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNumber];
    document.getElementById('quote').textContent = quote;
  }
  
  function addNewQuote(event) {
    event.preventDefault();
    const newQuote = document.getElementById('quoteInput').value.trim();
    if (newQuote !== '') {
      quotes.push(newQuote);
      document.getElementById('quoteInput').value = '';
      alert('Thank you for adding your quote!');
    }
  }
  
  document.getElementById('generateBtn').addEventListener('click', generateRandomQuote);
  document.getElementById('quoteForm').addEventListener('submit', addNewQuote);