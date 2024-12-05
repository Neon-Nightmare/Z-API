/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    {album_name: 'I was The Loner of Paradise Valley', artist: 'Vylet Pony', image: 'https://f4.bcbits.com/img/a2044261391_10.jpg', price: 10, type: 1, info: '"Paradise Valley”, for short, is a mixtape about homesickness, processing trauma, reflecting on life after changing as a person, and choosing how to remember your own past.', release: 20231225, label: 'Horse Friends Music', artists_id: 1},
    
    {album_name: 'Sweet Boy', artist: 'Malcolm Todd', image: 'https://t2.genius.com/unsafe/1250x0/https%3A%2F%2Fimages.genius.com%2F99479c1f31372181a3943d3eacc98f5c.1000x1000x1.png', price: 12, type: 1, info: 'Including a new arrangement of tracks filled with some of his most beloved tracks, Sweet Boy releases as a full album with both of the tracklists of the previous parts and the last singles.', release: 20240404, label: 'Columbia Records', artists_id: 2},

    {album_name: 'i dont wanna', artist: 'snuffles', image: 'https://f4.bcbits.com/img/a4240305117_10.jpg', price: 5, type: 2, info: 'this is a track inspired by the style of too late that i made back in 2021. enjoy!! :D', release: 20241018, label: 'snuffles', artists_id: 3}
  ]);
};
