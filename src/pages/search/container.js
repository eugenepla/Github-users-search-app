import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

import {
    getRepositoriesList
} from '../../store/search/selectors'

const mapStateToProps = (state) => ({
    repositoriesList: getRepositoriesList(state)
})

const mapDispatchToProps = null;

const PageSearch = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(View);

export { PageSearch };
