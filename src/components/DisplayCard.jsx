function DisplayCard({ props }) {
  return (
    <div className="text-white w-48 justify-self-center cursor-pointer">
      <img src={props.imageUrl} className="rounded-xl w-48 h-56" />
      <p className="font-bold text-lg pt-2 text-center">{props.name}</p>
    </div>
  );
}

export default DisplayCard;
