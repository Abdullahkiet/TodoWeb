import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { gettasks, reset } from "../features/tasks/taskSlice";

function Dashboard() {
  const dispatch = useDispatch();

  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(gettasks());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome </h1>
        <p>Todo Dashboard</p>
      </section>

      <taskForm />

      <section className="content">
        {tasks.length > 0 ? (
          <div className="tasks">
            {tasks.map((task) => (
              <taskItem key={task._id} task={task} />
            ))}
          </div>
        ) : (
          <h3>You have not set any Tasks</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
