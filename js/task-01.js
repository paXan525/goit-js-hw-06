
const categoriesItemEl = document.querySelectorAll('.item')
console.log('Number of categories:', categoriesItemEl.length)

for (const categorie of categoriesItemEl) {
    console.log('Category:',categorie.firstElementChild.textContent)
    console.log('Elements:', categorie.lastElementChild.children.length)
}
