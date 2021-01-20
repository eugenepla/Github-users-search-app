import { createSelector } from 'reselect'

const _getRepositories = (state) => state.search;

export const getRepositoriesList = createSelector(
    [_getRepositories],
    (search) => search.repositoriesList
);

export const getSearchQuery = createSelector(
    [_getRepositories],
    (search) => search.searchQuery
)