import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../style.css";

export default function User() {
  let [activeUserIndex, setActiveUserIndex] = useState(0);
  let [userInfo, setUserInfo] = useState(null);
  let users = ["nnnkit", "prank7", "facebook"];

  useEffect(() => {
    fetch(`https://api.github.com/users/${users[activeUserIndex]}`)
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
      });
    return () => {};
  }, [activeUserIndex]);

  return (
    <div>
      <center>
        <h1>Github User</h1>
        {users.map((user, index) => (
          <button onClick={() => {
              setActiveUserIndex(index);
          }}>{user}</button>
        ))}
        <div className="img-container">
            {
                userInfo && <img src={userInfo.avatar_url}></img>
            }
        </div>
      </center>
    </div>
  );
}
