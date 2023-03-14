function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  let available= 0;

  // Tulis code-mu disini
  for( let i=0; i < cars.length; i++) {
    if( cars[i].available == true) {
       result[available] = cars[i];
       available++;
    }
  }
   
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}