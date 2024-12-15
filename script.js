const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Birga Aylanamiz", images:"images/cat-02.gif"},
  {text:"Birga dam olamiz", images:"images/cat-03.gif"},
  {text:"San bilan suxbatlashb o'tiramiz", images:"images/cat-04.gif"},
  {text:"Sanga yengi voqealani etib beraman", images:"images/cat-05.gif"},
]
const ohyes = {text:"Mayli o'zinga qara jonim!!", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yo'q"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Ha'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})