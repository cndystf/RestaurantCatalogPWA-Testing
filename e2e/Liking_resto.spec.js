const assert = require('assert');

Feature('Liking Resto');

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Empty Favorite Resto';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#fav-resto');
  I.see(emptyFavoriteRestoText, '#fav-resto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');

  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  // like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); 
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#fav-resto');
  
  I.amOnPage('/');
  I.seeElement('.card a');

  const firstRestoCard = locate('.card-content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  // unlike
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('#fav-resto');
  const noFavResto = await I.grabTextFrom('#fav-resto');

  // success to unlike
  assert.strictEqual(noFavResto,emptyFavoriteRestoText);
});
