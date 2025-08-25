/**
 * This file contains the data that the database will be initialized with.
 * During the interview, we'll provide a replacement copy with a larger dataset.
 */

const All = {
  id: 1,
  name: "All",
};

const Fellowship = {
  id: 2,
  name: "Fellowship",
};

const Hobbits = {
  id: 3,
  name: "Hobbits",
};

const Wizards = {
  id: 4,
  name: "Wizards",
};

const Elves = {
  id: 5,
  name: "Elves",
};

const Humans = {
  id: 6,
  name: "Humans",
};

const Groups = [All, Fellowship, Hobbits, Wizards, Elves, Humans];
const Users = [
  {
    id: 1,
    name: "Frodo Baggins",
    username: "frodo",
    Groups: [All, Hobbits, Fellowship],
    isActivated: true,
    isBanned: false,
  },
  {
    id: 2,
    name: "Samwise Gamgee",
    username: "sam",
    Groups: [All, Hobbits, Fellowship],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 3,
    name: "Meriadoc Brandybuck",
    username: "merry",
    Groups: [All, Hobbits, Fellowship],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 4,
    name: "Peregrine Took",
    username: "pippin",
    Groups: [All, Hobbits, Fellowship],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 5,
    name: "Aragorn, Son of Arathorn",
    username: "strider",
    Groups: [All, Fellowship, Humans],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 6,
    name: "Boromir, Son of Denethor",
    username: "boromir",
    Groups: [All, Fellowship, Humans],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 7,
    name: "Gimli, Son of Gloin",
    username: "gimli",
    Groups: [All, Fellowship],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 8,
    name: "Legolas Greenleaf",
    username: "legolas",
    Groups: [All, Fellowship, Elves],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 9,
    name: "Gandalf the Grey",
    username: "mithrandir",
    Groups: [All, Fellowship, Wizards],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 10,
    name: "Radagast the Brown",
    username: "radagast",
    Groups: [All, Wizards],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 11,
    name: "Arwen Undomiel",
    username: "arwen",
    Groups: [All, Elves],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 12,
    name: "Elrond Peredhel",
    username: "elrond",
    Groups: [All, Elves],
    isActivated: false,
    isBanned: false,
  },
  {
    id: 13,
    name: "Saruman the White",
    username: "saruman",
    Groups: [All, Wizards],
    isActivated: false,
    isBanned: true,
  },
  {
    id: 14,
    name: "Grima Wormtongue",
    username: "grima",
    Groups: [All, Humans],
    isActivated: false,
    isBanned: true,
  },
];

export { Groups, Users };
