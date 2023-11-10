


// FETCH ALL CARDS 

const fetchShortcuts = async () => {
    let data = await fetch("/data/shortcuts.json");
    let res = await data.json();
    shortcuts(res);
};

fetchShortcuts();

// INSERT CARDS 
const insertCards = document.querySelector(".design_cards");


const shortcuts = (shortcut) => {
    console.log(shortcut);
    shortcut.data.design.forEach(desCard => {
        let design = `
           <div class="card" data-page="${desCard.os_mac.split("-")[0]}" data-category="Design">
              <div class="card-header">
                <img src="/assets/img/platform-logo-apple.png" alt="" />
                <img src="/assets/img/platform-logo-windows.png" alt="" />
              </div>
              <div class="brand_logo">
                <img src="${desCard.img}.png" alt="" />
              </div>
              <p>${desCard.title}</p>
            </div>    
        `;


        insertCards.insertAdjacentHTML("beforeend", design);
    });
    // ALL CARDS
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(card => {
        card.addEventListener("click", () => {
            let dataPage = card.getAttribute("data-page");

            let dataDesign = card.getAttribute("data-category");
            localStorage.setItem("setOs", dataPage);
            localStorage.setItem("setCategory", dataDesign);
            location.href = "shortcuts.html";
        });
    });
};


