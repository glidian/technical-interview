import "./GroupSelect.css";

import type { GroupInfo } from "./api";

type GroupSelectProps = {
  onChange: (groupId: string) => void;
  groups: GroupInfo[];
};

export default function GroupSelect(props: GroupSelectProps) {
  const { groups, onChange } = props;

  return (
    <select
      className="GroupSelect"
      onChange={(event) => onChange(event.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Select a group to display
      </option>
      {groups.map((group) => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>
  );
}
