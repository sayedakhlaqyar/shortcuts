// SWITCH BUTTONS

// Get all switchable buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked button
        button.classList.add('active');
    });
});

// FETCH CONTENT 

let getOs = localStorage.getItem("setOs");
let getCategory = localStorage.getItem("setCategory");


let path = `/data/${getCategory}/toolspage-${getOs}-windows`;
let toolPath = `/tools/toolspage-adobeaftereffects.md`;

const insertContent = document.querySelector(".content");

window.addEventListener("load", () => {
    fetch(`${path}.html`).then(res => res.text().then(data => {
        insertContent.innerHTML = data;
    }));

    fetch(`${toolPath}`).then(res => res.text().then(data => {
        const html = markdown.parse(data);
        console.log(html);
    }));
})

