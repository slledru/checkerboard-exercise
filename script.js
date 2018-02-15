document.addEventListener('DOMContentLoaded', () => {
  let collection = document.getElementsByTagName('body');
  if (collection !== null && collection.length > 0) {
    let body = collection[0];
    let div = document.createElement('div');
    div.style.width = '700px';
    div.style.height = '700px';
    for (let i = 0; i < 9; i++) {
      let divRow = document.createElement('div');
      divRow.style.height = '11%';
      divRow.style.width = '100%';
      for (let j = 0; j < 9; j++) {
        let divCol = document.createElement('div');
        divCol.style.height = '100%';
        divCol.style.width = '11%';
        divCol.style.float = 'left';
        divCol.style.backgroundColor = getRandomColor();
        divRow.appendChild(divCol);
      }
      let br = document.createElement('br');
      divRow.appendChild(br);
      div.appendChild(divRow);
    }
    body.appendChild(div);
  }
});

let displayRed = true;
function getNextCheckerColor() {
  let color;
  if (displayRed) {
    color = '#F00';
  } else {
    color = '#000';
  }
  displayRed = !displayRed;
  return color;
}
function getRandomColor() {
  let r = Math.ceil(Math.random() * 256).toString(16);
  let g = Math.ceil(Math.random() * 256).toString(16);
  let b = Math.ceil(Math.random() * 256).toString(16);
  return '#' + r + g + b;
}
