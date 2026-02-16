import UserCard from "./UserCard";
import users from "../../data/users";
import "./UserList.css";

const UserList = () => {
  return (
    <div className="user-grid">
      {users.map(({ id, name, email, role }) => (
        <UserCard 
          key={id}
          name={name}
          email={email}
          role={role}
        />
      ))}
    </div>
  );
};

export default UserList;
