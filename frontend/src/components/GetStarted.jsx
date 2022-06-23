import CTA from "./CTA";

function GetStarted() {
  return (
    <section className="flex flex-col justify-items-center  place-items-center pt-20">
      <div className="pb-20 flex justify-center gap-20">
        <CTA label="Submit my project" />
        <CTA label="Book a meeting" />
      </div>
    </section>
  );
}
export default GetStarted;
