import "../css/module9E.css";
// eslint-disable-next-line import/extensions
import jason from "../data/generated.jsx";

function Module9E() {
  return (
    <section className="bg-slate-100 flex flex-col items-center justify-evenly py-16 ">
      <div className="w-1/2 flex flex-col text-center justify-between">
        <h2 className="tc4E text-xl font-bold py-4 ">{jason[0].greeting}</h2>
        <h3 className="text-4xl py-4 font-bold text-gray-800">
          {jason[0].gender}
        </h3>
      </div>
      {jason.map((question) => {
        return (
          <div className="w-1/2 flex flex-col content-center justify-between">
            <details className="bc9E border-b-2 border-gray-200 text-gray-800 p-3 my-4">
              <summary className="ds4E font-semibold">{question.name}</summary>
              {question.about}
            </details>
          </div>
        );
      })}
    </section>
  );
}

export default Module9E;
