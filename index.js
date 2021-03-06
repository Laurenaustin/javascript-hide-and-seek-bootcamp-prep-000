function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + 1).toString();
  }
}

function deepestChild(){
  const boo = document.querySelectorAll('#grand-node div');
  return boo[boo.length - 1];
}
