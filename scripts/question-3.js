document.write('<br>-------Questão-3-------- </br>')
document.write('a)')
for(var a = 1; a < 15; a = a + 2){
    
    document.write( a + ',') 
} 
document.write(' </br> b)')
for(var b = 2; b < 1500; b = b * 2){
    document.write(b + ',') 
}
document.write(' </br> c)')

var c = 0
document.write(0 + ',')
for (var i = 0; i < 20; i++) {
    
    if ((i % 2) == 1) {
        document.write((c= c + i) + ',' )             
    }
}

document.write(' </br> d)')
var res = 4
document.write(res+',')
for (var d = 12; d < 90; d = d + 8) {
    document.write((res = res + d) + ',')
}

document.write(' </br> e)')
var x = 1;
var y = 2;
document.write(x,',',x , ',')
document.write(y, ',')
for (let e = 1; e < 10; e ++) {
    var z = x + y;
    document.write(z + ',')
    x = y
    y = z;
}
document.write(' </br> f)')
let sequencia = [2, 10, 12, 16, 17, 18, 19];
let lastNum = sequencia[sequencia.length - 1];

while (sequencia.length < 11) {
  if (lastNum < 24) {
    lastNum++;
  } else if (lastNum % 2 === 0) {
    lastNum += 2;
  } else {
    lastNum++;
  }
  sequencia.push(lastNum);
}

document.write(sequencia);

//Não há uma fórmula matemática para esta sequência, o código pode não ser o mais eficiente e pode não ser aplicável para outras sequências de números.