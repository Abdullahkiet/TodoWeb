import { useDispatch } from "react-redux";
import { deletetask } from "../features/tasks/taskSlice";

function taskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <div>{new Date(task.createdAt).toLocaleString("en-US")}</div>
      <h2>{task.text}</h2>
      <button onClick={() => dispatch(deletetask(task._id))} className="close">
        X
      </button>
    </div>
  );
}

export default taskItem;
