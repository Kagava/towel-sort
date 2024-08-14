
// You should implement your task here.




module.exports = function towelSort (matrix = []) {
  
  let ans = [];
  let flag = false;
  for (let i = 0; i < matrix.length; i++) {
      if (flag === false) {
          flag = true;
          for (let j = 0; j < matrix[i].length; j++) {
              ans.push(matrix[i][j]);
          } 
      }
      else {
          flag = false;
          for (let j = matrix[i].length - 1; j >= 0 ; j--) {
              ans.push(matrix[i][j]);
          } 
      }
  }
  return ans;
}
