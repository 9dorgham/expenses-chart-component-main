document.body.style.height= `${window.innerHeight}px`;

// selector
let parent = document.querySelector('.expenses');


async function getData() {
  let url = "JS/data.json";
  let req = await fetch(url);
  let ob = await req.json();
  create(ob);
}

function create(ob) {
  let nums = [];
  for (let x in ob) {
    nums.push(ob[x].amount);
  }


  for (let i in ob) {
    let static = document.createElement('div');
    static.className= 'static';

    let day = document.createElement('p');
    day.className= 'day';
    day.innerHTML= ob[i].day;

    let box = document.createElement('div');
    box.className= 'bar';
    
    let money = document.createElement('span');
    money.className= 'money';
    money.innerHTML= '$' + ob[i].amount;

    let col = document.createElement('span');
    col.className='col';


    // style
    static.style.height= `${(ob[i].amount / max(nums) * 100)}%`;

    // append
    box.append(money, col);
    static.append(box, day);
    parent.append(static);


    // events
    static.onclick = () => {
      money.style.display= 'block';
    }
    static.onmouseleave = () => {
      money.style.display= 'none';
    } 
  }
}

getData();


// get max value
function max(arr) {
  let x = 0;

  for (let i of arr) {
    if (x < i) {
      x = i;
    }
  };

  return x;
}