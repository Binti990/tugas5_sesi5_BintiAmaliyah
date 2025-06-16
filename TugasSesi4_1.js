//rumus.js//
function kalkulator(angka1, angka2, operator) {
    let hasil;

    switch (operator) {
        case '+' :
            hasil = angka1 + angka2;
            break;
        case '-' :
            hasil = angka1 - angka2;
            break;
        case '*' :
            hasil = angka1 * angka2;
            break;
        case '/' :
            if (angka2 === 0){
                hasil = "error : pembagian dengan nol!";
            }   else {
                hasil = angka1/angka2;
            }
            break;
        default:
            hasil = "nilai tidak dapat diketahui";          
    }

return hasil;    
}

//contoh penggunaan operator pada code//
let angka1 = 0;
let angka2 = 2;
let operator = '/';

console.log(`hasil: ${kalkulator(angka1, angka2, operator)}`);
