let result = 1+2;
let result2 = 2;

document.writeln("<p>1 + 2 = "+result+" </p>");

result = 2*2;
document.writeln("<p>2 x 2 = "+result+" </p>");

document.writeln("<hr>");


result2 *= 2;
document.writeln("<p>2 x 2 = "+result2+" </p>");
result2 = 2;
result2 += 2;
document.writeln("<p>2 + 2 = "+result2+" </p>");
document.writeln("<hr>");

//operator Unery, operator cukup membuthakan satu data
let hasil = +1; //menset nilai menjadi satu
document.writeln("<p>"+hasil+" </p>");

hasil--; //mengurangi nilai dari 1 menjadi 0
document.writeln("<p>"+hasil+" </p>");

hasil++; //menaikan nilai dari 0 menjadi 1
document.writeln("<p>"+hasil+" </p>");

hasil = -hasil; //menegatifkan nilai
document.writeln("<p>"+hasil+" </p>");
