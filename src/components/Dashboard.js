import React, { Fragment } from "react";
import "../App.css";
import styles from "../components/Dashboard.module.css"
import Tutor from "./Tutor/tutor";
const Dashboard = ({ setAuth }) => {

  const logout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <Fragment>
      <div className={styles.centrecomic}>RATINGS SENPAI</div>
        <div className="App">
            <Tutor />
        </div>
        <div className="centre">
      <button className="btn btn-primary" onClick={(e) => logout(e)}>
        Logout
      </button>
      </div>
    </Fragment>
  );
};
export default Dashboard;
