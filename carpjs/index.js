(function(){
AOS.init();
}())

// efecto Scrol
let containerPrecipal = document.querySelector('.containerPrecipal');
// navbarNav
let prevScrollPos = window.pagaYOffset;
let botoArriba = document.querySelector('.botoArriba')
window.onscroll = () => {
	let currenScrollPos = window.pagaYOffset;

	if(prevScrollPos > currenScrollPos){


		containerPrecipal.style.top = "0";
	   containerPrecipal.style.transition = "0.5s";
	// console.log(currenScrollPos)
 }else{
 	containerPrecipal.style.top = "-60px";
	containerPrecipal.style.transition = "0.5s";
 }

 prevScrollPos = currenScrollPos;
 let arriba = window.pagaYOffset;

 if(arriba <= 600){
 	containerPrecipal.style.borderBottom = "none";
 	botoArriba.style.right = "-100%";

 }else{
 	containerPrecipal.style.borderBottom = "5px solid #C2185B";
		botoArriba.style.right = "0";
		botoArriba.style.transition = "0.5s";
 }
}

   botoArriba.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

   // let containerPrecipal

   // sector de formulario

   let inputs = document.getElementsByClassName('formulario__input');
for (let i = 0; i < inputs.length;  i++) {
	inputs[i].addEventListener('keyup', function(){
		if(this.value.length>=1) {
			this.nextElementSibling.classList.add('fijar')
		} else {
			this.nextElementSibling.classList.remove('fijar')
		}
	});
}
