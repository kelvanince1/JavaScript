import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => (
    elements.searchInput.value = ''
);

export const clearResults = () => (
    elements.searchResultList.innerHTML = '',
    elements.searchResPages.innerHTML = ''
);

export const highlightSelected = id => {
    const results = Array.from(document.querySelectorAll('.results__link'));
    results.forEach(el => {
        el.classList.remove('results__link--active');
    })

    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
}

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, current) => {
            if (acc + current.length <= limit) {
                newTitle.push(current);
            }
            return acc + current.length;
        }, 0);

        return `${newTitle.join(' ')}`
    }

    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle- ${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
    <!--
    <button class="btn-inline results__btn--prev">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn-inline results__btn--next">
        <span>Page 3</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>
    </button>
    -->
`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if (page === 1 && pages > 1) {
        button = createButton(page, 'next');
    } else if (page < pages) {
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(el => renderRecipe(el));

    renderButtons(page, recipes.length, resPerPage);
}