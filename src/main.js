'use strict';

import './less/main.less';
import {render} from './js/routes';
import {fetchList} from './js/list';

$(() => {
    // This is how the navigation of our app happens.
  $(window).on('hashchange', function(){
    // On every hash change the render function is called with the new hash.
    render(decodeURI(window.location.hash));
  });
});
