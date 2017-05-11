import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter >
      <div>
        <Switch> {/*el switch del route entra al primer path que coincida*/}
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter >
  </Provider>
  , document.querySelector('.container'));
