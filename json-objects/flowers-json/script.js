// div element container that reflects all flowers list
let container = document.querySelector("#flower-list");
let favoritesEl = document.querySelector("#favorites"); // p element

let likeImg = "images/red-heart.png";
let notLikeImg = "images/gray-heart.png";

// // METHOD 1: Function compares & then flower sorting by name
// /**
//  * Compares two flower names
//  * @param {string} f1
//  * @param {string} f2
//  * @returns -1, 1, or 0 if the sort order is before, after, or equal.
//  */
// function compareFn(f1, f2) {
//     // localeCompare() returns -1, 1, or 0 if the sort order is before, after, or equal.
//     console.log(`F1: ${f1.name}, F2: ${f2.name}, ${f1.name.localeCompare(f2.name)}`);       // debug
//     return f1.name.localeCompare(f2.name);
// }

// // Sorting with comparison function, sorts by name
// flowers.sort(compareFn);

// METHOD 1: 1 line short cut method to sort & compare flower names
// Sorting with comparison function, sorts by name
flowers.sort((f1, f2) => f1.name.localeCompare(f2.name));

flowers.forEach((flower) => {
  let flowerElement = createFlowerInfo(flower);
  container.appendChild(flowerElement);
});

buildFavorites();

/**
 * Creates elements for flower title, description, habitat and images and
 * appends all these elements to one div element for each flower
 * @param {object} flower
 * @returns Complete information about a flower in a new div element
 */
function createFlowerInfo(flower) {
  // 1. create a new div element for each flower
  let eachFlowerContainer = document.createElement("div");

  // add a new class to each new div element for each flower
  eachFlowerContainer.classList.add("flower-info");

  // 2. create a new h2 element for flower title
  let h2 = document.createElement("h2");

  // set the title in the h2 element representing the flower name
  h2.innerHTML = flower.name;

  // 3. create a new h3 element for flower description
  let h3description = document.createElement("h3");

  // set the title in the h3 element to 'Description'
  h3description.innerHTML = "Description";

  // 4. create a new para element for flower description info
  let para1 = document.createElement("p");

  // set the flower description info
  para1.innerHTML = flower.description;

  // 5. create a new h3 element for flower habitat
  let h3habitat = document.createElement("h3");

  // set the title in the h3 element to 'Habitat'
  h3habitat.innerHTML = "Habitat";

  // 6. create a new para element for the flower habitat info
  let para2 = document.createElement("p");

  // set the flower habitat info
  para2.innerHTML = flower.habitat;

  // 7. create a new anchor tag for the flower hyperlink
  let link = document.createElement("a");

  // set the attributes to the flower url link
  link.href = flower.url;
  link.innerHTML = flower.url;
  link.target = "_blank";

  // 8. create a new div element image container
  let imageContainer = document.createElement("div");

  // set the images and display them in the div container
  flower.images.forEach((imageFile) => {
    // create a new img element for each image file
    let img = document.createElement("img");

    // set the img src attribute with the image
    img.src = imageFile;

    // add a new class to each new img element
    img.classList.add("flower-image");

    // add the img to the div imageContainer
    imageContainer.appendChild(img);
  });

  // LIKE/DISLIKE HEART FEATURES
  // create a new img element for the heart icon
  let like = document.createElement("img");

  // add a new class to the like heart icon img
  like.classList.add("like-button");

  // if the user likes the flower
  if (flower.userLikes) {
    like.src = likeImg; // set the like img to red heart icon
  }
  // if the user dislikes the flower
  else {
    like.src = notLikeImg; // set the dislike img to gray heart icon
  }

  // call the like/dislike event listener
  addLikeListener(like, flower.id);

  // add all flower info & images to the main flower div container
  eachFlowerContainer.appendChild(h2);
  eachFlowerContainer.appendChild(h3description);
  eachFlowerContainer.appendChild(para1);
  eachFlowerContainer.appendChild(h3habitat);
  eachFlowerContainer.appendChild(para2);
  eachFlowerContainer.appendChild(link);
  eachFlowerContainer.appendChild(imageContainer);
  eachFlowerContainer.appendChild(like);

  // returns the complete flower information div element
  return eachFlowerContainer;
}

/**
 * A click event listener for like/dislike heart icon for each flower
 * @param {img} heartElement
 * @param {number} id
 */
function addLikeListener(heartElement, id) {
  // a click event listener to the heart icon
  heartElement.addEventListener("click", function () {
    // find flower by id
    // toggle userLikes
    // toggle image in like
    flower = flowers.filter((flower) => flower.id == id)[0];

    if (!flower) {
      console.log("no flower with id ", id);
      return;
    }

    flower.userLikes = !flower.userLikes; // toggle

    if (flower.userLikes) {
      this.src = likeImg;
    } else {
      this.src = notLikeImg;
    }

    buildFavorites();
  });
}

/**
 * Builds a section for favorite/liked flowers
 */
function buildFavorites() {
  // Filter for flowers the user likes
  // map makes a new list with just the names
  let favorites = flowers
    .filter((flower) => flower.userLikes)
    .map((flower) => flower.name);

  let favoritesString = favorites.join(", ");

  if (favoritesString.length == 0) {
    favoritesEl.innerHTML = "Favorites list here";
  } else {
    favoritesEl.innerHTML = favoritesString;
  }
}
