import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../AppConfig/Api";
import { API_CONSTANT } from "../../AppConfig/APIConstants";
import {
  ICON_NAME,
  ROLES_CONSTANTS,
  STATUS_CONSTANTS,
  statusData,
} from "../../AppConfig/constants";
import toaster from "../../AppConfig/MessageToaster/actions";
import { setProjectList } from "../Project/actions";
import Card from "../Shared/Card";
import CustomIcon from "../Shared/CustomIcon";
import CustomTable from "../Shared/CustomTable";
import InputCheckbox from "../Shared/InputCheckbox";
import Layout from "../Shared/Layout";
import Selector from "../Shared/Selector";
import CreateTaskModal from "./CreateTaskModal";

/**
 * Used to show the Tasks of the users.
 * It allows the admin and manager to change the progress of the task.
 * It also allows developer to mark a task as completed.
 @returns {*}
 @param {{
 }} props
*/

const Task = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showTaskFormModal, setShowTaskFormModal] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.allProject);
  const handleProjectFilterChange = (evt) => {
    setSelectedProject(evt.target.value);
  };
  const user = JSON.parse(localStorage.getItem("user_details"));

  const refreshTasks = useCallback(() => {
      API.post(API_CONSTANT.getAllTasks, selectedProject ?  {
          projectId: parseInt(selectedProject)
      } : {})
        .then((result) => {
            if(result && result.length)
                setTasks(result.map(task => {
                    return {
                        id: task.taskId,
                        name: task.taskName,
                        description: task.taskDesc,
                        status: task.status ? STATUS_CONSTANTS.completed : STATUS_CONSTANTS.inProgress
                    }
                }))
        })
        .catch((error) => {
          dispatch(toaster.error(error.message));
        });
  }, [dispatch, setTasks, selectedProject]);

  const refreshProjects = useCallback(() => {
    const userDetail = JSON.parse(localStorage.getItem("user_details"));
    if (
      userDetail &&
      (userDetail.role === ROLES_CONSTANTS.manager ||
        userDetail.role === ROLES_CONSTANTS.admin)
    )
      API.get(API_CONSTANT.getAllProjects)
        .then((result) => {
          dispatch(setProjectList(result));
        })
        .catch((error) => {
          dispatch(toaster.error(error.message));
        });
  }, [dispatch]);

  useEffect(() => {
    refreshTasks();
    refreshProjects()
  }, [dispatch, refreshTasks, refreshProjects]);

  return (
    <Layout>
      {showTaskFormModal && (
        <CreateTaskModal
          open={Boolean(showTaskFormModal)}
          heading={"Create Task"}
          okText={"Create"}
          cancelText={"Cancel"}
          projects={projects}
          onCancelClick={() => {
            setShowTaskFormModal(null);
          }}
          onContinueClick={(updatedData, setButtonDisabled) => {
            if (!updatedData.taskName) {
              dispatch(toaster.error("Please enter Task Name"));
              return;
            }
            if (!updatedData.description) {
              dispatch(toaster.error("Please enter Description"));
              return;
            }
            if (!updatedData.assignedDeveloper) {
              dispatch(
                toaster.error(
                  "Please select a Developer to be assigned in task"
                )
              );
              return;
            }
            if (!updatedData.projectId) {
              dispatch(
                toaster.error(
                  "Please select a Project"
                )
              );
              return;
            }

            const payload = {
              taskName: updatedData.taskName,
              taskDesc: updatedData.description,
              assignedDeveloper: updatedData.assignedDeveloper,
              projectId: parseInt(updatedData.projectId)
            };

            API.post(API_CONSTANT.createTask, payload)
              .then(() => {
                dispatch(toaster.success(`Task successfully Created`));
                setShowTaskFormModal(false);
                refreshTasks();
              })
              .catch((error) => {
                dispatch(toaster.error(error.message));
                setButtonDisabled(false);
              });
          }}
        />
      )}
      <Card
        className="headerCardClass"
        style={{
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <span className="cardSubLabel">Tasks</span>
          {user &&
            (user.role === ROLES_CONSTANTS.manager ||
              user.role === ROLES_CONSTANTS.admin) && (
              <div
                style={{
                  minWidth: "130px",
                  maxWidth: "240px",
                  width: window.outerWidth * 0.3,
                }}
              >
                <Selector
                  label="Projects"
                  onChange={handleProjectFilterChange}
                  dataProvider={projects}
                  width="100%"
                  marginTop={2}
                  value={selectedProject}
                />
              </div>
            )}
        </div>
        {user && user.role === ROLES_CONSTANTS.manager && (
          <div
            className="createCardButton"
            onClick={() => {
              setShowTaskFormModal(true);
            }}
          >
            <CustomIcon name={ICON_NAME.create} />
          </div>
        )}
      </Card>
      <CustomTable
        data={tasks}
        columns={[
          { dataField: "name", label: "Name" },
          { dataField: "description", label: "Description" },
          { dataField: "action", label: "Action" },
        ]}
        columnComponents={{
          description: ({ column, data }) => {
            return (
              <div
                style={{
                  minWidth: "80px",
                  maxWidth: "500px",
                  width: window.outerWidth > 600 ? "200px" : "80px",
                }}
              >
                <span>{data[column.dataField]}</span>
              </div>
            );
          },
          action: ({ data }) => {
            if (!user && !user.id) {
              return null;
            }
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {user &&
                  (user.role === ROLES_CONSTANTS.admin ||
                    user.role === ROLES_CONSTANTS.manager) && (
                    <Selector
                      dataProvider={statusData}
                      label="Staus"
                      onChange={() => {
                        if(data["status"] !== STATUS_CONSTANTS.completed){
                            API.post(API_CONSTANT.updateTask,{
                                taskId: parseInt(data.id),
                                taskStatus: STATUS_CONSTANTS.completed
                            })
                            .then(result => {
                                dispatch(toaster.success(result.success))
                                refreshTasks()
                            })
                            .catch(error => {
                                dispatch(toaster.error(error.message))
                            })
                        } else {
                            API.post(API_CONSTANT.updateTask,{
                                taskId: parseInt(data.id),
                                taskStatus: STATUS_CONSTANTS.inProgress
                            })
                            .then(result => {
                                dispatch(toaster.success(result.success))
                                refreshTasks()
                            })
                            .catch(error => {
                                dispatch(toaster.error(error.message))
                            })
                        }
                      }}
                      width="80%"
                      value={data["status"]}
                    />
                  )}
                {user && user.role === ROLES_CONSTANTS.dev && (
                  <InputCheckbox
                    containLabel
                    label="Completed"
                    checkboxProps={{
                      checked: data["status"] === STATUS_CONSTANTS.completed,
                      onChange: () => {
                          if(data["status"] !== STATUS_CONSTANTS.completed){
                            API.post(API_CONSTANT.updateTask,{
                                taskId: parseInt(data.id),
                                taskStatus: STATUS_CONSTANTS.completed
                            })
                            .then(result => {
                                dispatch(toaster.success(result.success))
                                refreshTasks()
                            })
                            .catch(error => {
                                dispatch(toaster.error(error.message))
                            })
                          }
                      }
                    }}
                  />
                )}
              </div>
            );
          },
        }}
      />
    </Layout>
  );
};

export default Task;
