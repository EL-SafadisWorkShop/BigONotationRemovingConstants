//Rule No. 2 Remove Constants using a useless function for explanation purposes

function RemovingConstants(items) {
  console.log(items[0]);

  //The formula is printing half of the items
  //Using floor method to print whole numbers
  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  /*
  Depending on the input (e.i if input was 5 it 
    would mean it will increase by / ever loop
    until index is 5)
  */
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}
//Different steps when added together then the constants
//are droped and will sum up to O(n) becuase based on the chart
//what is important is how the line moves as the inputs increase

/*
the Big O for the this function calculations==> 
O(1 + n/2 + 100) = O(n/2 + 101) = O(n/2 + 1) = O(n + 1) = O(n)
*/
