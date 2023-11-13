import useAxios from "hooks/useAxios";
import { profileUrl } from "utils/constants";
import { Loader } from "rsuite";
import "./Profile.css";

function Profile() {
  const { data: dataUser, error, isLoading } = useAxios(profileUrl);

  const localStorageUser = JSON.parse(localStorage.getItem("systagram_user"));
  const username = localStorageUser.username;
  const email = localStorageUser.email;
  const domain = email.replace(username + "@", "");
  const initials = username.substring(0, 1) + domain.substring(0, 1);

  return (
    <div className="Profile">
      {dataUser && (
        <div className="container">
          <div className="picuser-container">
            <div className="propic">{initials}</div>
            <div className="info-container">
              <div className="username">{username}</div>

              <div className="name">{domain}</div>
            </div>
          </div>
          <div className="link-container">
            <div className="email">{email}</div>
            <div className="company">System Management S.p.A.</div>
          </div>
        </div>
      )}

      {error && "C'è stato un errore"}
      {isLoading && <Loader size="md" />}
    </div>
  );
}

export default Profile;
