function calculateTaxes(income) {
    if(income <=1000){
      return 18*(income * 0.02);
    }
  };
  
 console.log(calculateTaxes(10000));