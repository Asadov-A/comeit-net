import { useState } from "react";
import "./App.css";
import technicWorks from "./assets/images/technic-works.webp";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);


  function closeLoginMenu(e) {
    e.preventDefault();

    if (userName.trim() && password.trim() && date.trim() && email.trim() && termsAccepted) {
      document.querySelector(".login-menu").style.display = "none";
      document.querySelector(".web-menu").style.display = "flex";
      alert(`Welcome ${userName}!`);
    } else {
      alert("please fill all fields");
    }
  }

  function myAccountMenuToggle() {
    const menu = document.querySelector(".my-account-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  function logout() {
    if (window.confirm("Are you sure you want to log out?")) {
      document.querySelector(".login-menu").style.display = "block";
      document.querySelector(".web-menu").style.display = "none";
      setUserName("");
      setPassword("");
      setDate("");
      setEmail("");
      setProfileMenuVisible(false);
      document.querySelector(".my-account-menu").style.display = "none";
      alert("You have been logged out.");
    } else {
      return;
    }
  }


  function maintenanceAlert() {
    alert("Settings page is under maintenance. Please try again later.");
  }

  return (
    <>
      <div className="login-menu">
        <h1>
          Welcome to{" "}
          <h2>
            <span>Come</span>It.net
          </h2>
        </h1>

        <form>
          <input
            maxLength={20}
            className="name-input"
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            required
            className="email-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="password-input"
            maxLength={12}
            type={passwordVisible ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <i
              className={`fa-regular ${
                passwordVisible ? "fa-eye" : "fa-eye-slash"
              }`}
            ></i>
          </button>

          <input
            className="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />


          <div className="main-checkbox--box">
            <input onChange={(e) => setTermsAccepted(e.target.checked)} type="checkbox" className="main--checkbox"/>
            <h4>I agree to the <a target="_blank" href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">terms</a> and <a target="_blank" href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">conditions</a></h4>
          </div>

          <button onClick={closeLoginMenu} className="submit" type="submit">
            Create an account
          </button>

          <p>( one-time entry! ) </p>
        </form>
      </div>

      <section className="web-menu">
        {profileMenuVisible && (
          <div className="profile-menu">
            <button
              onClick={() => setProfileMenuVisible(!profileMenuVisible)}
              className="profile-exit--btn"
            >
              <i className="fa-solid fa-x"></i>
            </button>

            <div className="profile-img">
              <p>{userName.slice(0, 1).toLocaleUpperCase()}</p>
            </div>
            <div className="profile-info">
              <h3>{userName}</h3>
              <p>{email}</p>
              <p>
                Date of birth: <span>{date}</span>
              </p>
            </div>
          </div>
        )}

        <button onClick={myAccountMenuToggle} className="my-account">
          <div className="user-photo">
            <p>{userName.slice(0, 1).toLocaleUpperCase()}</p>
          </div>

          <h3 className="user-name">{userName}</h3>
        </button>

        <div className="my-account-menu">
          <ul>
            <li>
              <button
                onClick={() => setProfileMenuVisible(!profileMenuVisible)}
                className="profile-btn"
              >
                <a href="#">Profile</a>
              </button>
            </li>
            <li>
              <button onClick={maintenanceAlert} className="settings-btn">
                <a href="#">Settings</a>
              </button>
            </li>
            <li>
              <button onClick={logout} className="logout-btn">
                <a href="#">Logout</a>
              </button>
            </li>
          </ul>
        </div>

        <img src={technicWorks} alt="technic-works!" />
        <h2>Sorry, the site is undergoing maintenance.</h2>
      </section>
    </>
  );
}

export default App;
