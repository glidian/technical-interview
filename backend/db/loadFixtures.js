/*********************************************************************************
 * This file is used to populate the database with initial data, found in ./fixtures
 *********************************************************************************/

import { Groups, Users } from "./fixtures.js";

async function loadFixtures(models) {
  await models.Group.bulkCreate(Groups);
  await models.User.bulkCreate(Users);
  const userGroups = Users.flatMap((user) => {
    return user.Groups.map((group) => ({ UserId: user.id, GroupId: group.id }));
  });
  await models.UserGroup.bulkCreate(userGroups);
}

export default loadFixtures;
