import { skills } from "../constants";


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Hasibul Hasan</span></h1>

      <div className="mt-5 flex flex-col text-slate-500">
        <p>Web Developer based in Bangladesh specilizing in technical education through hands on learning and applications</p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill)=>(
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" /> 
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={skill.imageUrl} alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default About;