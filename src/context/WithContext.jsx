import React from 'react';
import { SearchConsumer } from './SearchContext';

function WithContext(WrappedComponent) {
  return ({ ...props }) => (
    <SearchConsumer>
      {({ userData, subscribeUser, unsubscribeUser }) => (
        <WrappedComponent
          userData={userData}
          subscribeUser={subscribeUser}
          unsubscribeUser={unsubscribeUser}
          {...props}
        />
      )}
    </SearchConsumer>
  );
}

export default WithContext;
