//alert("Heyyy")
/*alert("Heyyy")*/

//console.log("ini pesan untuk troubleshooting")

//alert("heyyyyy") //memunculkan pop up
//prompt("masukan usia anda!") //sebagai pop up input

//variabel
var usia = 30
const usia1 = 1 //const berisi nilai yang tidak dapat diubah
let usia2 = 2 //let sama kaya var

var user = "faqih"
//variabel + console log
console.log("Hey usia anda adalah " + usia)

//variabel + alert
alert("Apakah anda " + user + "?")

//variabel + prompt + console.log
var user1 = prompt("Siapakah Anda?")
console.log("Pengakses bernama " + user1)

//bermain variabel + alert
let user2 = "Faqih"
var usia3 = 23
var tinggibadan = 175
var beratbadan 
var status = null

//menggunakan ` buka ' atau "
alert(`Nama saya ${user2} usia saya itu ${usia3} tinggi badan saya adalah ${tinggibadan} berat badan saya ${beratbadan} dan pacar saya ${status}`)

//penggunaan if else java script
var pendapatan = prompt("Berapa Penghasilan anda setiap bulan? (IDR)")
var status1

if (pendapatan <= 3000000){
    status1 = "Belum layak pacaran"
}else{
    status1 = "Sudah siap menikah"
}

alert(`Anda dengan jumlah pendapatan Rp.${pendapatan}, ${status1}`)

//penggunaan switch
switch(status1){
    case pendapatan >= 7000000:
        status1 = "seharusnya sudah mulai menyicil rumah"
        break
    case pendapatan = null:
        status1 = "seharusnya fokus mencari kerja/upgrade skill"
        break
    default:
        status1 = "seharusnya fokus mencari pengalaman"
        break
}

alert(`Dan anda ${status1}`)

//source https://www.youtube.com/watch?v=mD6uSGSjgr4