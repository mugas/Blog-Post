const allElements = document.querySelectorAll('.query-selector-all');
const blackBoard = document.querySelector('.first__code');
const blackBoardSecond = document.querySelector('.second__code');
const firstImage = document.querySelector('.first__image');
const codeButtonFirst = document.querySelector('.code__show__first');
const codeButtonSecond = document.querySelector('.code__show__second');
const content = document.querySelector('.queries');
const recipe = document.querySelector('.recipe');
const buttonRecipe = document.querySelector('.button-recipe');
const recipeName = document.querySelector('.name');
const recipeType = document.querySelector('.cuisine');
const numberPeople = document.querySelector('.number');

allElements.forEach(eachElement => {
  eachElement.classList.add('selector__all');
});

const querySelectorAll = `
<h4 class="text">First Select all Elements</h4>
<section class="divide">
  <article class="divide_js">
    <h3 class="language">JS</h3>
    <p class="code__editor"><spam class="const">const</spam> allElements = document.<span class="query__selector">querySelectorAll</span><span class="selectors">('.elements')</span>;</p>
    <p class="code__editor">allElements.<span class="query__selector">forEach</span>(eachElement <span class="const">=> {</span>
    eachElement.classList.<span class="query__selector">add</span><span class="selectors">('selector__all')</span>;
    <span class="const">}</span>)</p>
  </article>
  <article class="divide_css">
    <h3 class="language">CSS</h3>
    <div class="code__editor">
      .<span class="css__selector">selector__all</span> {</br>
      <span class="query__selector">color:</span> red;</br>
      <span class="query__selector">transition:</span> all 2s;</br>
      }
    </div>
  </article>
</section>
`;

const querySelector = `
<h4 class="text">First Select the image</h4>
<h3 class="language">JS</h3>
  <p class="code__editor"><spam class="const">const</spam> firstImage = document.<span class="query__selector">querySelector</span><span class="selectors">('.first__image')</span>;</p>
  <p class="code__editor">firstImage.<span class="query__selector">addEventListener</span>('click' <span class="const">, () {</span>
  firstImage.classList.<span class="query__selector">toggle</span><span class="selectors">('round')</span>;
  <span class="const"}</span>)</p>
<article class="divide_css">
  <h3 class="language">CSS</h3>
  <div class="code__editor">
    .<span class="css__selector">round</span> {</br>
    <span class="query__selector">border-radius:</span> 50%;</br>
    <span class="query__selector">transition:</span> all 10s;</br>
    <span class="query__selector">transform:</span> rotate(360deg);</br>
    }
    </div>
</article>
</section>
`;

function showMeTheCode() {
  blackBoard.innerHTML = querySelectorAll;
}

function showMeTheCodeSecond() {
  blackBoardSecond.innerHTML = querySelector;
}

codeButtonFirst.addEventListener('click', showMeTheCode);
codeButtonSecond.addEventListener('click', showMeTheCodeSecond);

console.group(
  blackBoard.parentElement,
  blackBoard.children,
  blackBoard.childElementCount
);

console.log(content.textContent);
console.log(content.innerHTML);
console.log(content.outerHTML);

window.loadFile = function(event) {
  const image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};

function insertRecipe() {
  const recipeNames = recipeName.value;
  const typeOfRecipe = recipeType.value;
  const numberPeoplePerRecipe = numberPeople.value;
  const image = document.querySelector('#output');
  const myHTML = `
<section class="recipe-card">
  <div class="card">
    <p class="recipe-name">${recipeNames}</p>
    <p class="recipe-type">${typeOfRecipe}</p>
    <p class="recipe-number"> Serves ${numberPeoplePerRecipe}</p>
  </div>
  <div class="recipe-image">
    <img src="${image.src}" alt="ola" class="recipe-image"/>
  </div>
    
</section>
`;

  recipe.innerHTML = myHTML;

  return myHTML;
}
firstImage.addEventListener('click', () => {
  firstImage.classList.toggle('round');
});
buttonRecipe.addEventListener('click', insertRecipe);
