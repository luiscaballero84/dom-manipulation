// exercise 1
const p = document.createElement('p');

p.style.color = 'red';
p.textContent = 'I am red!'
p.classList.add('p');

container.appendChild(p);

// exercise 02
const h3Blue = document.createElement('h3');
h3Blue.style.color ='blue';
h3Blue.textContent = 'I am blue!'
container.appendChild(h3Blue);


// exercise 03
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

// div.style.cssText = 'border: black; background: white';
// div.textContent = 'I am a div';
// div.style.border = "thick solid #0000FF";
// div.style.backgroundColor = "red";
div.style.cssText = 'border: thick solid black; background: pink';
h1.textContent = 'I am a h1!'
h1.style.paddingLeft = '20px';
p2.textContent = 'Me too!';
p2.style.paddingLeft = '20px';
div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);

// Adding a css class
// const container = document.querySelector('#container');
container.classList.add('box');









