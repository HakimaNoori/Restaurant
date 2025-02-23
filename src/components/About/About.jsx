import { FaUser } from "react-icons/fa";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
  position: "relative",
};

const About = () => {
  return (
    <>
      <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
            About Us
          </h1>
          {/* card section */}
          <div className="bg-white/80 p-10 my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            molestiae accusamus illo atque omnis! Illum eum cumque placeat nulla
            asperiores qui, vel nihil doloribus ad laudantium laboriosam dicta!
            Dignissimos aspernatur suscipit nemo provident fuga! Quia veritatis
            suscipit, aut dolores dolore ea! Explicabo, exercitationem magni?
            Vero mollitia iure necessitatibus accusamus animi porro quibusdam
            similique, esse iusto nostrum eligendi laboriosam dicta! Dignissimos
            aspernatur suscipit nemo provident dolore exercitationem quisquam
            dolores dolore ea! Explicabo, exercitationem magni? Vero mollitia
            iure necessitatibus accusamus animi porro quibusdam similique, esse
            iusto nostrum eligendi dolore exercitationem quisquam dolores dolore
            ea! Explicabo, exercitationem magni? Vero mollitia iure
            necessitatibus accusamus laboriosam dicta!.
            <div className="pt-10 flex justify-center">
              <button className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>
        {/* wave vector */}
        <div className="absolute top-0 right-0 w-full">
          <img src={Vector} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
