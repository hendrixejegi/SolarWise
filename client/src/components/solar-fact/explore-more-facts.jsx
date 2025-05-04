import { Link } from "react-router-dom";

export function ExploreMore(props) {
  const uniqueFacts = new Set();
  const count = Math.min(3, props.moreFacts.length);

  while (uniqueFacts.size < count) {
    var randomNum = Math.floor(Math.random() * props.moreFacts.length);
    uniqueFacts.add(props.moreFacts[randomNum]);
  }

  return (
    <div className="border-t-1 pt-4">
      <h3 className="text-xl font-bold mb-4">Explore More Solar Facts</h3>
      <div className="flex gap-4">
        {[...uniqueFacts].map((fact) => (
          <div key={fact.id} className="basis-1/3 rounded-lg overflow-hidden">
            <Link
              to={`/solar-facts/${fact.id}`}
              className="bg-primary-50 p-4 flex flex-col gap-0.5 h-[106px]"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <span className="font-semibold text-primary-500">
                {fact.title}
              </span>
              <span>{fact.description}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
