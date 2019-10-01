
const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;

  //h1.textContent = `${x}, ${y}`;
  h1.textContent = x + ", " + y;

  const red = x / width * 100;
  const blue = y / height * 100;
  const green = ((x / width * 100) + (y / height * 100)) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${blue}%, ${green}%)`
});



/*const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  h1.textContent = e.clientX + ", " + e.clientY;


})*/