function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  

  let i = 0;
  let temp = 0; //angka indeks array result

  do {
    if( cars[i][`available`] == true) {
      result[temp] = cars[i];
      temp = temp + 1;
    }
    i++;
  } while (i < cars.length);

 
   
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}