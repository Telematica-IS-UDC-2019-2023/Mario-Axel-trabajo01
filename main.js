var Primos = new Array();
var v01 = new Array();

for( var i = 1; i < 1000; i++){
    v01.push(true)
}

for(var i = 2; i < 1000; i++){
    if(v01[i]){
        for( v = i * i; v < 1000; v += i){
            v01[v] = false;
        }
    }
}

for(var i = 2; i < 1000; i++){
    if(v01[i]){
        Primos.push(i);
    }
}

console.log(Primos)