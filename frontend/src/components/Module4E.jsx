import "../css/summary.css";

function Module4E(jason) {
  return (
    <section className="bg4E flex justify-evenly py-16 ">
      <div className=" w-1/3 flex flex-col justify-between">
        <h2 className="tc4E text-3xl font-bold py-4 ">{jason[0].name}</h2>
        <h3 className="text-5xl py-4 font-bold">{jason[0].gender}</h3>
        <p className="text-xl py-4 text-justify">{jason[0].about}</p>
        <button type="button" className="w-min p-2 bg4e-button rounded-3xl">
          {jason[0].email}
        </button>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
        <details className="bc4E border-2  p-3 my-4">
          <summary className="ds4E font-semibold">adress</summary>
          {jason[0].address}
        </details>
        <details className="bc4E border-2  p-3 my-4">
          <summary className="ds4E font-semibold">about</summary>
          {jason[0].about}
        </details>
        <details className="bc4E border-2  p-3 my-4">
          <summary className="ds4E font-semibold">phone</summary>
          {jason[0].phone}
        </details>
      </div>
    </section>
  );
}
export default Module4E;
