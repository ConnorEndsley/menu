
const menu = [
    {
        id: 1,
        title: "pasta",
        category: 'dinner',
        price: 15.00,
        img: './pasta.jpg',
        description: 'Al dente pasta in a tomato basil sauce topped with parmesan cheese',
    },

    {
        id: 2,
        title: "noodles",
        category: 'dinner',
        price: 15.00,
        img: './pasta.jpg',
        description: 'mewAl dente pasta in a tomato basil sauce topped with parmesan cheese',
    },

    {
        id: 3,
        title: "pizza",
        category: 'dinner',
        price: 15.00,
        img: './pasta.jpg',
        description: 'Al dente pasta in a tomato basil sauce topped with parmesan cheese',
    }
]

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded', function() {
    let displayMenu = menu.map(function(item) {
        // console.log(item)

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt="menu-item">
        <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.description}</p>
        </article>`;
    })
    // join into 1 string
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
});

function displayMenuItems(menuItems){
    
}