function highlight() {
    //Write your code here
	let strongElements = document.querySelectorAll('strong')
	
	strongElements.forEach(function(element) {
		element.style.color = 'rgb(0, 128, 0)'
	})

}


function return_normal() {
    //Write your code here
	let strongElements = document.querySelectorAll('strong')

	strongElements.forEach(function (element) {
		element.style.color = 'rgb(0, 0, 0)'
	})
    
}
