var arr = process.argv, 
	i = 2, 
	arr_length = arr.length, 
	sum = 0;

for(i; i < arr_length; i++){
	sum += +arr[i];
}

console.log(sum);
