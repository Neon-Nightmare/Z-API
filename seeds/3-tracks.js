/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tracks').del()
  await knex('tracks').insert([

    {name: 'Narcissus', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'By The Seaside: A Boardwalk, a Garden Party, and a Fly', explicit: 1, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'In The Absence of Comfort', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'The Death of All Magic', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'ECR', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'Hudson Bay and the Ballad of the One Hundred Warships', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'Cross(I Believe In You)', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'Paintbucket', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'Paradise Valley', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},
    {name: 'Brother, Are You Proud of Me?', explicit: 0, featured: '', artist: 'Vylet Pony', album_id: 1},

    {name: 'Earrings', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Roommates', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'On My Shoulder', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Thailand', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Ladygirl', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Sweet Boy', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Rodrick Rules', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: '4Me 4Me', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Art House', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Sore Throat', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Rockstar Boyfriend', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'New Friends', explicit: 0, featured: 'Eem Triplin', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Accutane', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Hot in NY', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Pillow', explicit: 0, featured: '', artist: 'Malcolm Todd', album_id: 2},
    {name: 'Mr. Incorrect', explicit: 1, featured: '', artist: 'Malcolm Todd', album_id: 2},

    {name: 'i dont wanna', explicit: 0, featured: '', artist: 'snuffles', album_id: 3},

  ]);
};
