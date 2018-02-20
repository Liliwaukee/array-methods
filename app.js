
/*---------------------- ITERATORS----------------------*/


/*1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
		// cpompleta aqui
	}

	miForEach([1,2,3], function(){})

*/

function miForEach(arreglo, callback){
  for (var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
	}
}
miForEach([1,2,3], function(arreglo){});



/*
2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
function miMap(arreglo, callback){
}
*/
var newArray=[];

function miMap(arreglo, callback){

  for(var i = 0; i < arreglo.length; i++){
    newArray.push(arreglo[i]);
  }
  console.log(newArray);
}

miMap([1,2,3], function(arreglo){});


/*
3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
function miFilter(arreglo, filter){
}
*/
var oddNumbers = [];

function miFilter(arreglo, callback){
    for(var i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 === 1){
          oddNumbers.push(arreglo[i]);
        }
    }
  console.log(oddNumbers);
}

miFilter([1,2,3,4,5,6,7,8,9],function(arreglo){});


/*
4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, reduce){
}
*/
var age = 0;

function miReduce(arreglo, callback){
    for(var i = 0; i<arreglo.length; i++){
        age += arreglo[i];
    }
  console.log(age);
}
 miReduce([31, 28, 61, 3],function(arreglo){});


/*
Bonus:
1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){
}
*/

function miSort(arreglo, callback){
  
}
