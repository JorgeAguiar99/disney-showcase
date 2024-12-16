import { useNavigate } from "react-router-dom";

function DisplayCard({ props }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/CaracterDetails/${props._id}`);
  }
  return (
    <div className="text-white w-48 justify-self-center cursor-pointer" onClick={onSeeDetailsClick}>
      <img src={props.imageUrl} className="rounded-xl w-48 h-56" />
      <p className="font-bold text-lg pt-2 text-center">{props.name}</p>
    </div>
  );
}

export default DisplayCard;
