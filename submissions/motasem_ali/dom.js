// Task 1: DOM Archaeologist
/*
Instructions:

    Starting from document.body, write code that logs (in order):

    The tag name of the last element child of
    , using only navigation properties (no query selectors).

    The number of element children in
    (not text nodes).

    The difference in length between childNodes and children of
    . Explain why they differ.

    Determine:

    What is the nodeType and nodeName of the first node in document.body.childNodes?

    Is the first paragraph a sibling of the second, or a descendant?

Twist:
Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.
*/

// logs the tag name of the last element child of document.body
console.log(document.body.lastElementChild.tagName);
console.log(document.body.children.length); // Logs the number of element children in document.body
console.log(document.body.childNodes.length - document.body.children.length); // Logs the difference in length between childNodes and children of document.body
// The difference is due to text nodes (like whitespace) that are counted in childNodes but not in children.
console.log(document.body.childNodes[0].nodeType);
console.log(document.body.childNodes[0].nodeName);
console.log(
  document.body.children[0].nextElementSibling === document.body.children[1]
); // Checks if the first paragraph is a sibling of the second

// Task 2: Synthetic DOM Injection
/*
Using only DOM methods, construct this structure in memory, then attach it to the page:

<div class="card" data-role="admin">
  <h2>Access Panel</h2>
  <p>Authenticated</p>
</div>

After appending it to the document body:

    Log the value of the data-role as a JS property, not via .getAttribute.

    Change the paragraph text to "Welcome back, Admin" using a property, not a method.

    Add two classes to the div: "authenticated" and "highlight" using classList.

Challenge:
Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.
*/
const card = document.createElement("div");
card.className = "card";
card.setAttribute("data-role", "admin");

const heading = document.createElement("h2");
heading.textContent = "Access Panel";
const paragraph = document.createElement("p");
paragraph.textContent = "Authenticated";

card.appendChild(heading);
card.appendChild(paragraph);

document.body.appendChild(card);
console.log(card.dataset.role);
paragraph.textContent = "Welcome back, Admin";
card.classList.add("authenticated", "highlight");
if (card.classList.contains("card")) {
  card.classList.remove("card");
}

// logs the class list to verify the changes
console.log(card.classList);
