import useAxios from "hooks/useAxios";
import { profileUrl } from "utils/constants";
import { Loader } from "rsuite";
import "./Profile.css";

function Profile() {
  const { data: dataUser, error, isLoading } = useAxios(profileUrl);

  const localStorageUser = JSON.parse(localStorage.getItem("systagram_user"));
  const username = localStorageUser.username;
  const email = localStorageUser.email;

  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((chunk) => chunk.substring(0, 1))
      .join("");

    return initials;
  };

  return (
    <div className="Profile">
      {dataUser && (
        <div className="container">
          <div className="picuser-container">
            <div className="propic">{getInitials(dataUser.name)}</div>
            <div className="info-container">
              {/* <div className="username">{user.username}</div> */}
              <div className="username">{username}</div>

              <div className="name">{dataUser.name}</div>
            </div>
          </div>
          <div className="link-container">
            <div className="email">{email}</div>
            <div className="company">{dataUser.company.name}</div>
          </div>
        </div>
      )}

      {error && "C'è stato un errore"}
      {isLoading && <Loader size="md" />}
    </div>
  );
}

export default Profile;
