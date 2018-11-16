/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  
  var board = new Board({n: n}); //fixme
  var rooks = n;
  
  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < n; j++) {
      board.attributes[i][j] = 1;
      rooks--;
      
      if (board.hasAnyRooksConflicts()) {
        board.attributes[i][j] = 0;
        rooks++; 
      }
      
      if (rooks === 0) {
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
        return board.rows();
      }
    }    
  }    
  
    
};
    
  
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  
  
  var iterate = function() {
    
    
  };
  

  iterate(board.rows());
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if(n === 0) {
    return [];
  }
  var board = new Board({n: n}); //fixme
  var queens = n;
  var iterate = function() {
    if(col > n) {
      row = 0;
      return new Board({n: n});
    }
    if(row > n) {
      console.log('Single solution fors ' + n + ' queens:', JSON.stringify(board));
      row = 0;
      return board.rows();
    }
    board.togglePiece(row, col);
    if(board.hasAnyQueensConflicts() === true) {
      board.togglePiece(row, col);
      iterate(board, row, col++);
    }
    if(board.hasAnyQueensConflicts() === false) {
      col = 0;    
      iterate(board, row++, col);
    }
  };
  
  for(i = 0; i < n; i++) {
    iterate(board, row = 0, col = i);
  }
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
