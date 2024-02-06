import { experiences, skills } from "../constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const About = () => {
  return (
    <section className="max-container">

      {/* introduction part */}
      <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Hasibul Hasan</span></h1>

      <div className="mt-5 flex flex-col text-slate-500">
        <p>Web Developer based in Bangladesh specilizing in technical education through hands on learning and applications</p>
      </div>

    {/* skills part */}
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

      <div className="py-16">
        <h3 className="head-text">
          Expreience
        </h3>
        <div className="mt-5 flex flex-col text-slate-500">
        <p>Web Developer based in Bangladesh specilizing in technical education through hands on learning and applications</p>
      </div>

      {/* time line */}
      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience)=>(
            <VerticalTimelineElement 
            key={experience.company_name}
            date={experience.date}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
              </div>
            }
            iconStyle={{background:experience.iconBg}}
            contentStyle={{
              borderBottom: '8px ',
              borderStyle:'solid',
              borderBottomColor: experience.iconBg,
              boxShadow:'none',

            }}
            >
              <div>
                <h3 className="text-black text-xl font-semibold">
                  {experience.title}
                </h3>
                <p className="text-black-500 font-medium font-base" style={{margin:0}}>{experience.company_name}</p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index)=>{
                    <li key={`experience-point-${index}`} className="text-black-500/50 pl-1 text-sm font-normal">
                      {point}
                    </li>
                  })}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      </div>


    </section>
  );
};
export default About;