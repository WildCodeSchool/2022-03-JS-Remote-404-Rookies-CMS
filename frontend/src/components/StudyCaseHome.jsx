/* eslint-disable react/no-unescaped-entities */

export default function StudyCaseHome() {
  const object = [
    {
      title: "Marketing",
      sub_title: "Etude de marché",
      image_link:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQEnuytb7N4eHA/company-logo_200_200/0/1637244902902?e=1662595200&v=beta&t=1sUN3rirGsRS8zjy2s91V-P3e1vLbJRLnG6tQSY6ScU",
      image_alt: "La Biscuiterie Handi-Gaspi",
    },
    {
      title: "Marketing",
      sub_title: "Etude de marché",
      image_link:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQEnuytb7N4eHA/company-logo_200_200/0/1637244902902?e=1662595200&v=beta&t=1sUN3rirGsRS8zjy2s91V-P3e1vLbJRLnG6tQSY6ScU",
      image_alt: "La Biscuiterie Handi-Gaspi",
    },
    {
      title: "Marketing",
      sub_title: "Etude de marché",
      image_link:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQEnuytb7N4eHA/company-logo_200_200/0/1637244902902?e=1662595200&v=beta&t=1sUN3rirGsRS8zjy2s91V-P3e1vLbJRLnG6tQSY6ScU",
      image_alt: "La Biscuiterie Handi-Gaspi",
    },
  ];

  console.warn(object);

  const backGround = "https://i.ibb.co/qWx2PcX/Topic-Back-Ground.png";
  return (
    <div className=" flex ">
      <div className="px-16 w-1/2 flex flex-col justify-evenly mt-20">
        <h1>
          No matter your challenge{" "}
          <span className="underline decoration-8 decoration-green-400">
            Rookies can handle it
          </span>
        </h1>
        <p className="py-8">
          A talented team to help you in your journey on creating usefull and
          easy to use product
        </p>
        <button
          type="button"
          className="bg-green-400 rounded-xl p-2 self-center"
        >
          Let's Talk 💬
        </button>
      </div>
      <div
        className="w-1/2 mt-20"
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "90% 140%",
        }}
      >
        <div className="flex justify-center mr-24">
          <div className="flex flex-col bg-white w-2/5 my-12 p-8 rounded-2xl ">
            <h3>Multiple Topics</h3>
            {object.map((item) => {
              return (
                <div className="flex justify-between">
                  <img
                    src={item.image_link}
                    alt={item.image_alt}
                    className="w-4/12 aspect-square object-contain"
                  />
                  <div className="">
                    <h2>{item.title}</h2>
                    <h3>{item.sub_title}</h3>
                  </div>
                </div>
              );
            })}
            <p>And More ... </p>
          </div>
        </div>
      </div>
    </div>
  );
}
