

const slideImage = document.querySelectorAll('.slide');
console.log(slideImage);


let count = 1;
show(count)

function toggle(n){
  show(count += n)
}



  function show(n){
  if(n > slideImage.length){
    count = 1;
  }

  if(n < 1){
    count = slideImage.length;
  }
  for (i = 0; i < slideImage.length; i++){
    slideImage[i].style.display = 'none';
  }
  slideImage[count - 1].style.display = 'block';
  }