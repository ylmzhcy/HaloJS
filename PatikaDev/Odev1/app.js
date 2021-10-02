let pi = Math.PI; //pi sayısı
//Yarıçapı (Yarıçap) olan dairenin alanı: (Alan)

const calc = (r) => {
  let shape = pi * (r * r);
  console.log("Yarıçapı " + r + " olan dairenin alanı: " + shape);
};

calc(8);
