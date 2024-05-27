
function showMessages(){

let bodyElement = document.getElementById("parent");
const paragraph = document.createElement("p");
paragraph.innerHTML = "Wanna go see a movie?";
bodyElement.appendChild(paragraph);

}




//1.-Let's start with a constant named paragraph to store the element we want to create.

//2.-Create a specific element by coding its name surrounded by quotes. For example, code p in between the " to create a paragraph.

// 3.-The element stored in paragraph has no text so we need paragraph.innerHTML to change that.

// 4.-Now that we know how to create elements using JavaScript, we can learn how to nest and display them on a webpage.  When nesting an element like the p element inside the body element, body becomes the parent of p and p the child of body.

// 5.In the HTML code, set the body element's ID with id="parent" so we can nest a new element inside of it.

//.6 Inside the showMessages function we can create an empty variable to store the body element. Code bodyElement;.

//.7 Then, access the body element using document.getElementById("parent").

//.8 To nest an element inside the bodyElement, we use bodyElement.appendChild().

//.9 For example, we can nest paragraph inside bodyElement by placing the paragraph variable between the parentheses.