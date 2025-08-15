/*********************************************************************************
 * This file is used to populate the database with initial data, found in ./fixtures
 *********************************************************************************/

const fixtures = require("./fixtures");

async function loadFixtures(models) {
  await models.Group.bulkCreate(fixtures.Groups);
  await models.User.bulkCreate(fixtures.Users);
  const userGroups = fixtures.Users.flatMap((user) => {
    return user.Groups.map((group) => ({ UserId: user.id, GroupId: group.id }));
  });
  await models.UserGroup.bulkCreate(userGroups);
}

module.exports = loadFixtures;
