console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById('rubberDuck').addEventListener('mouseover', ()=>{

	const compliment1 = document.getElementById('compliment1').textContent
	const compliment2 = document.getElementById('compliment2').textContent
	const compliment3 = document.getElementById('compliment3').textContent
	const complimentsArr =  [compliment1, compliment2,compliment3]
	alert(complimentsArr[Math.floor(Math.random()*complimentsArr.length)])

})