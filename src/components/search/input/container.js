import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { getRepositoriesList } from '../../../store/search/selectors'
import { fetchRepositories } from '../../../store/search/actions'

const mapStateToProps = (state) => {
  return {
    repositories: getRepositoriesList
  };
};

const mapDispatchToProps = {
  fetchRepositories
};

const SearchInput = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(View);

export { SearchInput };
