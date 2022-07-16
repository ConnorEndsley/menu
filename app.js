
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
        category: 'breakfast',
        price: 15.00,
        img: './pasta.jpg',
        description: 'BREAKFAST ITEM',
    },

    {
        id: 3,
        title: "pizza",
        category: 'lunch',
        price: 15.00,
        img: './pasta.jpg',
        description: 'Al dente pasta in a tomato basil sauce topped with parmesan cheese',
    },
    {
        id: 4,
        title: "steak",
        category: 'steak',
        price: 15.00,
        img: './steak.jpg',
        description: 'Al dente pasta in a tomato basil sauce topped with parmesan cheese',
    }
]

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')





// load all items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

// function to return the HTML for an article for each of the items in the menu array
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {
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
}

function displayMenuButtons () {
    // reduce
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
return values
        // needs an initial value
    },['all']
    );
    console.log(categories)
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" 
        data-id=${category}>
        ${category}</button>`
    }).join('')
    console.log(categoryBtns)
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn')
    // filter items
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
   const category = e.currentTarget.dataset.id;
   const menuCategory = menu.filter(function(menuItem){

    if(menuItem.category === category){
        return menuItem;
    }
   })
   console.log(menuCategory)
   if(category === "all"){
    displayMenuItems(menu)
   } else{
    displayMenuItems(menuCategory);
   }
    })
})
}