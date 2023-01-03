import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goal.slice";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, loading, error, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (error) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, error, message, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1> Hola {user.name}!</h1>
        <p>Dashboard de tus metas</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3> Aún no tienes metas </h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
