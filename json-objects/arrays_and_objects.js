/*
  Practice: Arrays & objects
  Lab 5: write the code requested by lines marked // TODO
  You should NOT modify any of the code that's here already.
  Add the code requested.
*/
console.log("Lab 5: Please write the code requested at the // TODO markers.");
console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");

/*
  a. Use this JavaScript object. This represents the current position of the
  International Space Station at 1pm on January 12th 2018, fetched from
  http://api.open-notify.org/iss-now.json.
*/
let iss_location = {
  timestamp: 1515784140,
  iss_position: {
    latitude: "49.2167",
    longitude: "100.5363",
  },
  message: "success",
};

console.log("\nA.0. CURRENT POSITION OF THE INTERNATIONAL SPACE STATION: ");

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.
console.log("\nA.1. The position of the International Space Station at 1pm on January 12th 2018: ");
console.log("Latitude: " + iss_location.iss_position.latitude);
console.log("Longitude: " + iss_location.iss_position.longitude);

console.log("\n---------------------------------------------------------------------");

/*
  b. Use this JavaScript object of exchange rates relative to Euros.
  The properties are currency symbols, the values are the exchange rates.
  Data source: http://fixer.io/
*/
let rates = {
  AUD: 1.5417,
  BGN: 1.9558,
  BRL: 3.8959,
  CAD: 1.5194,
};

console.log("\nB.0. EXCHANGE RATES RELATIVE TO EURO: ");
console.log(rates);

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
console.log('\nB.1. Adding a new property "CHF": 1.1787 for Swiss Francs: ');
rates.CHF = 1.1787;
console.log(rates);

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
// the equivalent value in Australian Dollars (AUD)
console.log(`\nB.2. 100 euros = ${100 * rates.AUD.toFixed(2)} australian dollars`);

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
// In other words, identify the property with the largest value.
// The answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
console.log("\nB.3. Currency with the highest exchange rate relative to euros: ");

// set the initial default values for the highest currency & symbol
let highestExchangeRate = 0;
let highestCurrencySymbol = "";

// loop over the rates object with for...in...
for (let currencySymbol in rates) {
  // console.log(currencySymbol);            // debug: prints each on a new line - AUD BGN BRL CAD CHF
  // console.log(rates[currencySymbol]);     // debug: prints each on a new line - 1.5414 1.9558 3.8959 1.5194 1.1787

  if (rates[currencySymbol] > highestExchangeRate) {
    highestExchangeRate = rates[currencySymbol];
    highestCurrencySymbol = currencySymbol;
  }
}

console.log(`${highestCurrencySymbol} at ${highestExchangeRate} ${highestCurrencySymbol} to 1 Euro`);

console.log("\n---------------------------------------------------------------------");

/*
  c. Use this JavaScript array of objects of cat owners, and their cats.
  Source, moderncat.com
*/
let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" },
];

console.log("\nC.0. CAT OWNERS AND THEIR CATS: ");
console.log(cats_and_owners);

// TODO print Gary Oldman's cat's name
cats_and_owners.every(function (catOwner) {
  // console.log(catOwner.name);             // debug: this loop will stop processing after 'Gary Oldman' is found

  if (catOwner.name == "Gary Oldman") {
    console.log("\nC.1. Gary Oldman's cat's name is " + catOwner.cat);
    return false;
  }
  return true;
});

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
console.log("\nC.2. Adding a new object to an array: ");

// create a new object
let newCatInfo = {
  name: "Taylor Swift",
  cat: "Meredith",
};
// add the new object to the cats_and_owners array
cats_and_owners.push(newCatInfo);
console.log(cats_and_owners);

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
console.log("\nC.3. Printing each cat owner & their cat's name on a new line: ");

cats_and_owners.forEach(function (eachObject) {
  console.log(`${eachObject.name}: ${eachObject.cat}`);
});

console.log("\n---------------------------------------------------------------------");

/*
  d. Use the following JSON object, describing the Nobel Prize winners in 2017.
  Source http://api.nobelprize.org/v1/prize.json?year=2017
*/
let nobel_prize_winners_2017 = {
  prizes: [
    {
      year: "2017",
      category: "physics",
      laureates: [
        {
          id: "941",
          firstname: "Rainer",
          surname: "Weiss",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "2",
        },
        {
          id: "942",
          firstname: "Barry C.",
          surname: "Barish",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
        {
          id: "943",
          firstname: "Kip S.",
          surname: "Thorne",
          motivation:
            '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
          share: "4",
        },
      ],
    },
    {
      year: "2017",
      category: "chemistry",
      laureates: [
        {
          id: "944",
          firstname: "Jacques",
          surname: "Dubochet",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "945",
          firstname: "Joachim",
          surname: "Frank",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
        {
          id: "946",
          firstname: "Richard",
          surname: "Henderson",
          motivation:
            '"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution"',
          share: "3",
        },
      ],
    },
    {
      year: "2017",
      category: "medicine",
      laureates: [
        {
          id: "938",
          firstname: "Jeffrey C.",
          surname: "Hall",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "939",
          firstname: "Michael",
          surname: "Rosbash",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
        {
          id: "940",
          firstname: "Michael W.",
          surname: "Young",
          motivation:
            '"for their discoveries of molecular mechanisms controlling the circadian rhythm"',
          share: "3",
        },
      ],
    },
    {
      year: "2017",
      category: "literature",
      laureates: [
        {
          id: "947",
          firstname: "Kazuo",
          surname: "Ishiguro",
          motivation:
            '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
          share: "1",
        },
      ],
    },
    {
      year: "2017",
      category: "peace",
      laureates: [
        {
          id: "948",
          firstname: "International Campaign to Abolish Nuclear Weapons (ICAN)",
          motivation:
            '"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons"',
          share: "1",
          surname: "",
        },
      ],
    },
    {
      year: "2017",
      category: "economics",
      laureates: [
        {
          id: "949",
          firstname: "Richard H.",
          surname: "Thaler",
          motivation: '"for his contributions to behavioural economics"',
          share: "1",
        },
      ],
    },
  ],
};

console.log("\nD.0. NOBEL PRIZE WINNERS IN 2017: ");

// TODO print the full name of the Literature Nobel laureate.
// {[ {}, {}, {}, {}, {}, {} ]}
nobel_prize_winners_2017.prizes.every(function (eachPrize) {
  // console.log(eachPrize.category);            // debug: this loop will stop processing after 'literature' is found

  if (eachPrize.category == "literature") {
    let fullName = eachPrize.laureates[0].firstname + " " + eachPrize.laureates[0].surname;
    console.log(`\nD.1. ${eachPrize.category.toUpperCase()} Nobel laureate: ${fullName}`);
    return false;
  }
  return true;
});

// TODO print the ids of each of the Physics Nobel laureates.
// Your code should still work without modification if a laureate was added, or removed.
// {[ {}, {}, {}, {}, {}, {} ]}
console.log("\nD.2. IDs of each Physics Nobel laureates: ");

nobel_prize_winners_2017.prizes.every(function (eachPrize) {
  // console.log(eachPrize.category);                // debug: this loop will stop processing after 'physics' is found

  if (eachPrize.category == "physics") {
    eachPrize.laureates.forEach(function (eachWinner) {
      console.log(eachWinner.id);
    });
    return false;
  }
  return true;
});

// TODO write code to print the names of all of the prize categories
// (So your output would start physics, chemistry, medicine... ).
console.log("\nD.3. All prize categories: ");

nobel_prize_winners_2017.prizes.forEach(function (eachPrize) {
  console.log(eachPrize.category);
});

// TODO write code to print the total number of prize categories
let totalCategories = 0;
nobel_prize_winners_2017.prizes.forEach(function () {
  totalCategories++;
});

console.log("\nD.4. Total number of prize categories: " + totalCategories);

// TODO write code to count the total number of laureates from 2017.
// have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
let totalLaureates = 0;
nobel_prize_winners_2017.prizes.forEach(function (eachPrize) {
  totalLaureates += eachPrize.laureates.length;

  // alternate way to calculate
  // eachPrize.laureates.forEach( function() {
  //   totalLaureates++;
  // })
});

console.log("\nD.5. Total number of laureates from 2017: " + totalLaureates);

console.log("\n---------------------------------------------------------------------");
