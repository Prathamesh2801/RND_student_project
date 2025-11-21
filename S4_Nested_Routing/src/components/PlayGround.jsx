import src from "../assets/img/a2.jpg";
export default function PlayGround() {
  //   const aboutUs = ["Our Goal", "Our Vision", "Our Reach"];
  //   const firstIntro = aboutUs[0];
  //   const secondIntro = aboutUs[1];
  //   const thirdIntro = aboutUs[2];
  // const [I1,I2,I3] = aboutUs
  //   console.log("About Us : ", aboutUs);
  //   const aboutUsObj = {
  //     id: 1,
  //     title: "Our Story",
  //     image: src,
  //     description:
  //       "We started with a mission to make events easier, smarter, and more enjoyable for everyone — from organizers to attendees.",
  //   };

  //   const { title, description,image } = aboutUsObj;

  const original = {
    id: 1,
    title: "First Title",
    subtitle: "First Sub Title",
    desc: "First Description",
  };

  //   const { id,desc, ...remain } = original;

  //   console.log("Description :", desc);
  //   console.log("Remain : ", remain);

  const copy = { ...original };
  return (
    <>
      <div className="mx-auto  text-white font-bold w-1/2 bg-teal-600 text-center p-6  my-32 rounded-2xl">
        <ul className="space-y-6 ">
          {/* <li>{I1}</li>
            <li>{I2}</li>
            <li>{I3}</li> */}
          {/* {aboutUs.map(data => (
                <li>{data}</li>
            ))} */}
          {/* <li> Content : {firstIntro}</li>
          <li> Content : {secondIntro}</li>
          <li> Content : {thirdIntro}</li> */}
          {/* <img src={image} alt="" />
          <h1 className="text-2xl">Title : {title}</h1>
          <p>Description : {description}</p> */}
        </ul>
      </div>
    </>
  );
}
