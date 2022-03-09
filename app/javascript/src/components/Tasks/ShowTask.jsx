import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Container from "components/Container";
import PageLoader from "components/PageLoader";
import tasksApi from "apis/tasks";

const ShowTask = () => {
  const { slug } = useParams();
  const [task, setTask] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  let history = useHistory();

  const updateTask = () => {
    history.push(`/tasks/${task.slug}/edit`);
  };

  const fetchTaskDetails = async () => {
    try {
      const response = await tasksApi.show(slug);
      setTask(response.data.task);
    } catch (error) {
      logger.error(error);
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <h1 className="border-b mt-3 mb-3 border-gray-500 pb-3 pl-3 text-lg leading-5 text-gray-800">
        <span className="text-gray-600">Task Title : </span> {task?.title}
      </h1>
      <div className="rounded mt-2 mb-4 bg-bb-env px-2">
        <i
          className="transition duration-300ease-in-out ri-edit-line cursor-pointer text-center text-2xl hover:text-bb-yellow"
          onClick={updateTask}
        ></i>
      </div>
      <h2 className="border-b mt-3 mb-3 border-gray-500 pb-3 pl-3 text-lg leading-5 text-gray-800">
        <span className="text-gray-600">Assigned To : </span>
        {task?.assigned_user.name}
      </h2>
    </Container>
  );
};

export default ShowTask;
