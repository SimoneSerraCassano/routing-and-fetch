import useAxios from "hooks/useAxios";
import { profileUrl } from "utils/constants";
import { Loader } from "rsuite";
import "./Profile.css";

function Profile() {
  const { data: user, error, isLoading } = useAxios(profileUrl);

  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((chunk) => chunk.substring(0, 1))
      .join("");

    return initials;
  };

  return (
    <div className="Profile">
      {user && (
        <div className="container">
          <div className="picuser-container">
            <div className="propic">{getInitials(user.name)}</div>
            <div className="info-container">
              <div className="username">{user.username}</div>
              <div className="name">{user.name}</div>
            </div>
          </div>
          <div className="link-container">
            <div className="email">{user.email}</div>
            <div className="company">{user.company.name}</div>
          </div>
        </div>
      )}

      {error && "C'è stato un errore"}
      {isLoading && <Loader size="md" />}
    </div>
  );
}

export default Profile;
