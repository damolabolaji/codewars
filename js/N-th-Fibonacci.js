function fibonacciAtZero(n){
    array = [0,1];

    for(let i = 2; i < n; i++){

        array.push(array[i]);
        array[i] = array[i - 1] + array[i - 2];
             

    
        
    }
    console.log(array)
    console.log(array[n-1])
}

fibonacciAtZero(5)


//ALTERNATIVES

function nthFibo(n) {
  return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
}


function nthFibo(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}

function nthFibo(n) {
  let a = 0, b = 1;
  
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return n == 1? a: b;
}
