let doc = document

let mainTitle = doc.querySelector('h1')
let allMenu = doc.querySelector('.main-menu')
let mainMenu = doc.querySelector('.main-menu-list')
let mainMenuList = doc.querySelectorAll('.list-items')
let subcategoryList = doc.querySelectorAll('.menu-subcategory-list')
let cities = doc.querySelector('.cities')
let city = doc.querySelectorAll('.city')
let form = doc.querySelector('form')
let categoryName

let userSelection = []
let chosenMainService 
let chosenSubcategoryService
let chosenCity

console.log(mainMenuList)

mainMenuList.forEach(function (item) {
    item.addEventListener('click' , openSubcategory)

    function openSubcategory() {
        chosenMainService = item.innerHTML
        // userSelection.append(chosenMainService)

        categoryName = item.dataset.name
        
        subcategoryList.forEach(function (category) {
            chosenSubcategoryService = category.innerHTML
            // userSelection.append(chosenSubcategoryService)

            console.log(category.dataset.name == categoryName)
            if (category.dataset.name == categoryName) {
                category.style.display = 'grid'
                mainMenu.style.display = 'none'
            }
            category.addEventListener('click' , function () {
                category.style.display = 'none'
                cities.style.display = 'grid'
            })
        })
    }
})

city.forEach(function (item){
    item.addEventListener('click' , function () {
        allMenu.style.display = 'none'
        form.style.display = 'flex'
        mainTitle.style.display = 'none'

        chosenCity = item.innerHTML
        // userSelection.append(chosenCity)
        console.log(chosenCity)
    })
})