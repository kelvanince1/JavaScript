import Search from './models/Search';

import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

const controlSearch = async () => {
    // Get query from view
    const query = searchView.getInput();
    console.log('QUERY', query);

    if (query) {
        state.search = new Search(query);

        await state.search.getResults();

        console.log('STATE', state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});