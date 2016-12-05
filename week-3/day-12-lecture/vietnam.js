var data = {
  countryOrArea: "Viet Nam",
  Varient:'Medium varient',

  Years: [
    {
      year:2015,
      population: 93386
    },
    {
      year:2010,
      population: 89047
    },
    {
      year:2005,
      population: 84947
    }
  ]
};

// console.log(data);

var sum = 0;

for (var i = 0; i < data.years.length; i++) {
  sum += data.years[i].population;
}

avg =avg/data.years.length;
console.log(avg);
