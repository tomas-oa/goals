function GoalItem({ goal }) {
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleDateString("es-ES")}</div>
      <h2>{goal.title}</h2>
    </div>
  );
}

export default GoalItem;
