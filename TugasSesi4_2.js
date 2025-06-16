import readline from 'readline';

const inputUser = readline.createInterface({
    input: process.stdin, output: process.stdout
});

// fungsi kalkulator
function kalkulator (angka1, angka2, operator){
    let hasil;

    switch (operator){
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if (angka1 === 0){
                hasil = "Error! 0 tidak dapat dibagi dengan angka!";         
            }   else {
                hasil = angka1/angka2;
            }
            break;
        default:
            hasil = "Nilai tidak dapat diketahui!";     
}
return `Hasil=${hasil}`;
}

inputUser.question("Masukkan angka pertama: ", angka1 => {
  inputUser.question("Masukkan angka kedua: ", angka2 => {
    inputUser.question("Masukkan operator (+, -, *, /): ", operator => {
        //operator yang digunakan (+, -, *, /)
      console.log(`Hasil, ${kalkulator(parseFloat(angka1), parseFloat(angka2), operator)}!`);
  inputUser.close();
    });
  });
});