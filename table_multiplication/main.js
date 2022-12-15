// let p_text = document.querySelector(".p_text");
let btn_click = document.querySelector(".btn_click");

// let inp_row = document.querySelector("#inp_row");
// let inp_col = document.querySelector("#inp_col");

const myTable = document.querySelector(".mtable");

let row;
let col;

let result = [];
let arrHeader = ["A", "B", "Tasck"];
let arrA = [0, 0, 1, 1];
let arrB = [0, 1, 0, 1];

function createTableu() {
  
  row = 5;
  col = 3;
  for (let i = 0; i < row; i++) {
    let el_row = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      let el_col = document.createElement("td");
      if (i === 0) {
        el_col.innerHTML = arrHeader[j];
      } else if (j === 0) {
        el_col.innerHTML = arrA[i - 1];
      } else if (j === 1) {
        el_col.innerHTML = arrB[i - 1];
      }
      el_row.append(el_col);
    }
    myTable.append(el_row);
  }
}

btn_click.addEventListener("click", () => {

});

createTableu();
let a = true;
let b = false;

// Non( A et B )
function foo1 (a,b) {
  return  !((a && b) ? true : false);
}

// Non( A ou B )
function foo2 (a,b) {
  return  !((a || b) ? true : false);
}

// Non( A ) et B
function foo3 (a,b) {
  return (!a && b) ? true : false ;
}

// Non( A ) ou B
function foo4 (a,b) {
  return (!a || b) ? true : false ;
}

// Non( B ) et Non( A )
function foo5 (a,b) {
  return (!a && !b) ? true : false ;
}

// Non( B ) ou Non( A )
function foo6 (a,b) {
  return (!a || !b) ? true : false ;
}

// A et Non( B ))
function foo7 (a,b) {
  return (a && !b) ? true : false ;
}

// A ou Non( B )
function foo8 (a,b) {
  return (a || !b) ? true : false ;
}




console.log(foo3(a,b));

console.log(11%(10));