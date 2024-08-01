// ini javascript

console.log('hello world');

/* let,
 var, bisa ditulis ulang
  let tipe baru, variabel tipe lama
 */

  /*
  function.formValidation() {
    console.log('ini form');
    return false;
  }
*/

  function.formValidation() {
    let name = document.getElementById('input-name').value;
    if(name == '') {
        alert("Maaf inputan anda kosong");
      } else {// ketika inputan kosong, maka akan menampilkan alert spti ini
        alert('sukses menginput');
        }  
} // console log nya digunakan sebagai checkPoint berhasil atau tidak 


  // pengecekan dimana name tidak boleh kosong / ''
 
   


  /*
  ini kalo gak pake dom :
  document.getElementById('btn-submit').addEventListener('click',{} => formValidation);
  */
