/**
 * This file contains the data that the database will be initialized with.
 * During the interview, we'll provide a replacement copy with a larger dataset.
 */

const All = {
  id: 1,
  name: 'All',
}

const Crew = {
  id: 2,
  name: 'Crew',
};

const Passengers = {
  id: 3,
  name: 'Passengers',
};

const Veterans = {
  id: 4,
  name: 'Veterans',
};

exports.Groups = [All, Crew, Passengers, Veterans];
exports.Users = [
  { id: 1, name: "Malcolm Reynolds", username: "mal", Groups: [All, Crew, Veterans], isActivated: true, isBanned: false },
  { id: 2, name: "Zoe Alleyne Washburne", username: "zoe", Groups: [All, Crew, Veterans], isActivated: false, isBanned: false },
  { id: 3, name: "Hoban Washburne", username: "wash", Groups: [All, Crew], isActivated: false, isBanned: false },
  { id: 4, name: "Kaywinnet Lee Frye", username: "kaylee", Groups: [All, Crew], isActivated: false, isBanned: false },
  { id: 5, name: "Inara Serra", username: "inara", Groups: [All, Crew], isActivated: false, isBanned: false },
  { id: 6, name: "Jayne Cobb", username: "jayne", Groups: [All, Crew], isActivated: false, isBanned: false },
  { id: 7, name: "Derrial Book", username: "shepherd", Groups: [All, Passengers, Veterans], isActivated: false, isBanned: false },
  { id: 8, name: "Simon Tam", username: "doc", Groups: [All, Passengers], isActivated: false, isBanned: false },
  { id: 9, name: "River Tam", username: "river", Groups: [All, Passengers], isActivated: false, isBanned: false },
  { id: 10, name: "Bester", username: "bester", Groups: [All, Crew], isActivated: false, isBanned: true },
  { id: 11, name: "Saffron", username: "bridget", Groups: [All, Passengers], isActivated: false, isBanned: true },
]
