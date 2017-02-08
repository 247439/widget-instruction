'use strict';
let list = [];

function fetchList () {
  const deffered = $.Deferred();

  $.ajax({
    url: '/json/list.json'
  })
    .done((response) => {
      list = response.items;
      deffered.resolve(list);
    })
    .fail((jqXHR) => {
      deffered.reject(jqXHR);
    });

  return deffered
}

function filterList (query) {
  return list.filter((item) => {
    return item.title.includes(query);
  })
}


$(() => {
  const list = fetchList();
  list
    .done((resolve) => {
      console.log(resolve);
    });
});