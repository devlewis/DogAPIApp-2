'use strict';

function getDogImage() {
  const rslt = $('#input').val()
  $('#input').val('')
  fetch('https://dog.ceo/api/breed/'.concat(rslt,'/images/random'))
  .then(response => {
    if(!response.ok){
    throw Error(alert("we couldn't find that breed!"))}
    return response.json()})
  .then(responseJson => 
      displayResults(responseJson))
  .catch(error => alert(response.statusText));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`);
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});