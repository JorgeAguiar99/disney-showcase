import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function Collapse({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-6 text-white">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-bold">{title}:</h1>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <ul className="pl-5">
          {items.length > 0 ? (
            items.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhum</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Collapse;
