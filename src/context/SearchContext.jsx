import React from 'react';
import PropTypes from 'prop-types';

const SearchContext = React.createContext({ username: '' });

class SearchProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.subscribeUser = this.subscribeUser.bind(this);
    this.unsubscribeUser = this.unsubscribeUser.bind(this);
  }

  subscribeUser(username) {
    this.setState({ username });
  }

  unsubscribeUser() {
    this.setState({ username: '' });
  }

  render() {
    const { children } = this.props;
    const { username } = this.state;

    return (
      <SearchContext.Provider
        value={{
          username,
          subscribeUser: this.subscribeUser,
          unsubscribeUser: this.unsubscribeUser,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  }
}

const SearchConsumer = SearchContext.Consumer;

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchProvider, SearchConsumer };
