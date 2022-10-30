const assert = require('assert');

Feature('Liking A Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', async ({ I }) => {
  I.see('Favorite restaurant not yet available', '.no-favorites');
});

Scenario('showing liking one resto and unlike resto', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-list .card .detail-btn', 5);
  I.seeElement('.resto-list .card .detail-btn');
  const firstResto = locate('.resto-list .card .detail-btn').first();
  const firstRestoId = await I.grabAttributeFrom(firstResto, 'id');
  I.click(firstResto);

  // ada sedikit masalah dibagian ini kak, terkadang tombol yg memiliki id="favoriteButton" berhasil ditemukan dan terkadang tidak ditemukan(yang membuat test dibawahnya ikut error). sampai sekarang saya belum menemui solusinya.
  I.waitForElement('#favoriteButton', 5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-list .card .detail-btn', 5);
  I.seeElement('.resto-list .card .detail-btn');

  const favoritedRestoId = await I.grabAttributeFrom('.resto-list .card .detail-btn', 'id');
  assert.strictEqual(firstRestoId, favoritedRestoId);

  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-list .card .detail-btn', 5);
  I.seeElement('.resto-list .card .detail-btn');
  I.click('.resto-list .card .detail-btn');
  I.waitForElement('#favoriteButton', 5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.no-favorites', 5);
  I.see('Favorite restaurant not yet available', '.no-favorites');
});
