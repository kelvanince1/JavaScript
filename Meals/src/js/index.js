import Search from './models/Search';

const state = {};

const controlSearch = async () => {
    // Get query from view
    const query = 'pizza';

    if (query) {
        state.search = new Search(query);

        await state.search.getResults();

        console.log('STATE', state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});