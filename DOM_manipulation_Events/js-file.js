// Get the container element
const container = document.getElementById('container');

// Create a <p> element with red text
const p = document.createElement('p');
p.textContent = "Hey I’m red!";
p.style.color = 'red';
container.appendChild(p);

// Create an <h3> element with blue text
const h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

// Create a <div> with a black border and pink background color
const div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';

// Create an <h1> element
const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";

// Create a <p> element
const innerP = document.createElement('p');
innerP.textContent = "ME TOO!";

// Append <h1> and <p> to the <div>
div.appendChild(h1);
div.appendChild(innerP);

// Append the <div> to the container
container.appendChild(div);
