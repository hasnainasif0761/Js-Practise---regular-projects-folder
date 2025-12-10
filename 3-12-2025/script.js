// // // console.log('Js is running');

// // // let arr = ['a','b','c',3,4];

// // // console.log(arr.length);
// // // console.log(arr.length-1);

// // // console.log('array ka last element '+arr[arr.length-1]);

// // // ------------- Two Dimention Array --------
// // let twoDArr = [
// //     ['1','2','3'],
// //     ['4','5','6'],
// //     ['7','8',['1','2',['1','2','3']]]
// // ];

// // console.log("twoDArr",twoDArr);
// // console.log(twoDArr[2][2][2][2]);


// // assignment add each element of these array

// let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
// let arr2 = [[9,8,7],[6,5,4],[3,2,1]];

// let a = arr1[0][0] + arr2[0][0];
// let b = arr1[0][1] + arr2[0][1];
// let c = arr1[0][2] + arr2[0][2];

// let d = arr1[1][0] + arr2[1][0];
// let e = arr1[1][1] + arr2[1][1];
// let f = arr1[1][2] + arr2[1][2];

// let g = arr1[2][0] + arr2[2][0];
// let h = arr1[2][1] + arr2[2][1];
// let i = arr1[2][2] + arr2[2][2];

// console.log(a, b, c, d, e, f, g, h, i);

var twoDArr = [[1,2,3],[4,5,6],[7,8,9]];


for(let i = 0; i < twoDArr.length; i++){
    for(let j = 0; j < twoDArr[i].length;j++){
        console.log(twoDArr[i][j]);
    }    
}








