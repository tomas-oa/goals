import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goal.slice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleDateString("es-ES")}</div>
      <h2>{goal.title}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
