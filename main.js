//console.log('Margarita Mixer')

let margaritas = [];
// setting margaritas to an empty array

// a function to add/change name and instructions
const changeDrink = (drink) => {
console.log(drink);

// add drink name to the .name element
const name = document.querySelector('.name');
name.innerHTML = drink.strDrink;

// add drinks instructions to .instructions element
const instructions = document.querySelector('.instructions');
instructions.innerHTML = drink.strInstructions;


// add measurments to .measurements element
// const measurements = document.querySelector('.measurements');
// measurements.innerHTML = drink.strMeasure;

// add drinks ingredients to .ingredients element BUT not all have the same number of ingredients. 
//SOLEIL DID THIS 
// iterate through the object as an array
// using filter if we return a truth value, it passes the filter
// find all properties that match the ingredient name "strIngredient" and are not null
// because we're using Object.entries...
// ...each key-value pair comes back as an array
// of two items! [0] is the key, [1] is the value

  const ingredients = Object.entries(drink).filter(([key, value]) => {
    return value !== null && key.includes('strIngredient');
  }).map(([key, value]) => { 
   return value;
  });


  // clear out the current ingredients
  const ingredientElement = document.querySelector('.ingredients');
  ingredientElement.innerHTML = '';
  // add the new ones

  // iterate over the ingredients, so for each...
  ingredients.forEach((ing) => {
    // create a p element
    const ingName = document.createElement('p');
    // make that p's innerHTML = the ingredient name
    ingName.innerHTML = ing;
    ingName.setAttribute('class', 'ingredient');
    // attach it to the ingredientElement
    ingredientElement.appendChild(ingName);
  });
}
  // const proportion = Object.entries(drink).filter(([key, value]) => {
  //   return value !== null && key.includes('strMeasure');
  // }).map(([key, value]) => { 
  //  return value;
  // });

// const measureElement = document.querySelector('.measurements');
// measureElement.innerHTML = '';
// //   // iterate over the ingredients, so for each...
//     proportion.forEach((measure) => {
// //     // create a p element
//      const ingMeasure = document.createElement('p');
// //     // make that p's innerHTML = the ingredient name
//      ingMeasure.innerHTML = measure;
//      ingMeasure.setAttribute('class', 'measure');
// //     // attach it to the ingredientElement
//      measureElement.appendChild(ingMeasure);
//   });
// }

const getData = () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
        axios.get(url)
        .then(res => {
        margaritas = res.data.drinks;
        });
    }
        getData();

//  Overlay: get overlays from the DOM
// for each of the overlays: adding an event listener that clicks and shows drink name, recipe and instruction below
// when overlay is clicked, it will invoke changeDrink with the matching drink from margaritas (5 drinks, 5 overlays)
const margOverlays = document.querySelectorAll('.overlay');
margOverlays.forEach((overlay, index) => {
  overlay.addEventListener('click', () => changeDrink(margaritas[index]));
});
