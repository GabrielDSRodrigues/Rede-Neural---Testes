import Matrix from "./matrix.js";
import RedeNeural from "./redeNeural.js";

var nn = new RedeNeural(1,3,1);
var arr = [1,2];

nn.feedforward(arr);

/*Matrix.arrayToMatrix(arr);*/

//let m1 = new Matrix(1,2);
//let m2 = new Matrix(2,1);

//console.log(m1.data,m2.data);
//console.log(Matrix.multiply(m1, m2).data);