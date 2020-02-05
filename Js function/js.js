// // #1
// function smallest(a , b, c){
// 	if (a<b && a<c) {
// 		return a; 
// 	}
// 	else if (a>b && b<c) {
// 		return b;
// 	}
// 	else if(a>c && b>c)
// 		return c;
// }
// console.log(smallest(-4,7,-9));


//#2
// function sec(d, h, m){
// 	return d*24*3600+h*3600+m*60;
// }
// console.log(sec(2,4,1));

// #3
// function Rec(x){
// 	if(x==0){ 
// 		return 1;
// 	}
// 	else if{
// 	return (x-1)*x;}
// }
// console.log(Rec(7));

// #4


//5 
function discr(a, b, c) {
	let x=b*b - 4*a*c;
	let n1=(-b + Math.sqrt(x)) / (2*a);
	let n2=(-b - Math.sqrt(x)) / (2*a);
	let n0=-b / (2*a);
			if (x==0){
				console.log(n0);
				return console.log('1 корень')
			}else if (x>0) {
				console.log(n1);
				console.log(n2);
				return console.log('2 корня')
			}else {
				return console.log('Нет корней');
			}
}
console.log(discr(1,6,9));