import { useEffect, useState } from "react";

import { listGroups } from "./api";
import type { GroupInfo } from "./api";
import GroupSelect from "./GroupSelect";
import UserList from "./UserList";
import "./App.css";

export default function App() {
  const [groups, setGroups] = useState<GroupInfo[]>([]);

  useEffect(() => {
    listGroups().then(setGroups);
  }, []);

  return (
    <div className="App">
      <GroupSelect
        groups={groups}
        onChange={(val: string) => console.log(`new value: ${val}`)}
      />
      <UserList />
    </div>
  );
}
