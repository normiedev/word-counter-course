const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number-characters');
const twitterNumberEl = document.querySelector('.stat__number-twitter');
const facebookNumberEl = document.querySelector('.stat__number-facebook');
const wordsNumberEl = document.querySelector('.stat__number-words');


const inputHandler = () => {

     //determine new numbers

     let numberOfWords = textareaEl.value.split(' ').length;

     if (textareaEl.value.length === 0 ) {
         numberOfWords = 0 ;
     }
 
     const numberOfCharacters = (textareaEl.value.length);
 
     const twitterCharactersLeft = 280 - numberOfCharacters;
 
     const facebookChractersLeft = 2200 - numberOfCharacters;
 
     //add visual indicator when going above limit
 
     if (twitterCharactersLeft < 0) {
 
         twitterNumberEl.classList.add('stat__number--limit');
         } else {
             twitterNumberEl.classList.remove('stat__number--limit');
         
         } 
 
     
            if (facebookChractersLeft < 0) {
         
             facebookNumberEl.classList.add('stat__number--limit');
         } else {
             facebookNumberEl.classList.remove('stat__number--limit');
         }
     
 
 
     //set new numbers
 
         wordsNumberEl.textContent = numberOfWords;
 
 
 
     charactersNumberEl.textContent = numberOfCharacters;
 
     twitterNumberEl.textContent = twitterCharactersLeft;
 
     facebookNumberEl.textContent = facebookChractersLeft;

};

textareaEl.addEventListener('input', inputHandler); 


