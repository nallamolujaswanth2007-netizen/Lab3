import "./UserCard.css";

const UserCard = ({ name, email, role }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
      <span className="role">{role}</span>
    </div>
  );
};

export default UserCard;
