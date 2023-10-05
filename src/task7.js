const sideOfTriangleA = 15;
const sideOfTriangleB = 13;
const sideOfTriangleC = 12;
const semiperimetrOfTriangle = ((sideOfTriangleA + sideOfTriangleB + sideOfTriangleC)/2);
console.log(Math.sqrt(semiperimetrOfTriangle * (semiperimetrOfTriangle - sideOfTriangleA) *
           (semiperimetrOfTriangle - sideOfTriangleB) * (semiperimetrOfTriangle - sideOfTriangleC)));
 