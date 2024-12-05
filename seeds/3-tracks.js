/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tracks').del()
  await knex('tracks').insert([

    {song_name: 'Narcissus', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'By The Seaside: A Boardwalk, a Garden Party, and a Fly', explicit: 1, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'In The Absence of Comfort', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'The Death of All Magic', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'ECR', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'Hudson Bay and the Ballad of the One Hundred Warships', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'Cross(I Believe In You)', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'Paintbucket', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'Paradise Valley', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {song_name: 'Brother, Are You Proud of Me?', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},

    {song_name: 'Earrings', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Roommates', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'On My Shoulder', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Thailand', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Ladygirl', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Sweet Boy', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Rodrick Rules', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: '4Me 4Me', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Art House', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Sore Throat', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Rockstar Boyfriend', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'New Friends', explicit: 0, featured: 'Eem Triplin', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Accutane', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Hot in NY', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Pillow', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {song_name: 'Mr. Incorrect', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},

    {song_name: 'i dont wanna', explicit: 0, featured: '', artist: 'snuffles', album_id: 3},

  ]);
};
