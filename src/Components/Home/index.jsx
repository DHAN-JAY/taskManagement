import React from "react";
import { ROLES_CONSTANTS } from "../../AppConfig/constants";
import Card from "../Shared/Card";
import CustomIcon from "../Shared/CustomIcon";
import Layout from "../Shared/Layout";
import "./home.style.css";

/**
 * Used to show the basic Home of the app.
 @returns {*}
 @param {{
 }} props
*/

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user_details"));

  return (
    <Layout>
      <div className="homeMainContainer">
        <div className="homeContainer1">
          <CustomIcon
            style={{ width: "4em", height: "4em", fill: "grey" }}
            name="avatar"
          />
          <br />
          <section>
            <span>{`Hi `}</span>
            <span>
              <b>{user.username}</b>
            </span>
          </section>
          <br />

          <span>{`Welcome to Task Management System`}</span>
          <br />
          <section>
            <span>{`Your Role is defined as `}</span>
            <span>
              <b>{user.role}</b>
            </span>
          </section>
        </div>
        <Card className="cardStyle">
          <span>
            <b>What you can do:</b>
          </span>
          {user.role === ROLES_CONSTANTS.admin && (
            <ol>
              <li>You can create project</li>
              <li>You can edit and delete project</li>
              <li>You can assign Manager.</li>
              <li>You can view and change status of the task</li>
            </ol>
          )}
          {user.role === ROLES_CONSTANTS.manager && (
            <ol>
              <li>You can assign Developer.</li>
              <li>You can view and change status of the task</li>
            </ol>
          )}
          {user.role === ROLES_CONSTANTS.dev && (
            <ol>
              <li>You can view and change status of the task</li>
            </ol>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
