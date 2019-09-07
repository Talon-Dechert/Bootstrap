let a = 0;
let b = 0;
let c = 0;

function changeBackground() {
  const x = document.getElementById('bg');
  x.style.backgroundColor = 'rgb('+a+', '+b+', '+c+')';
  a += 1;
  b += a + 1;
  c += b + 1;
  if (a > 255) a -= b;
  if (b > 255) b = a;
  if (c > 255) c = b;
}