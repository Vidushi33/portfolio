import { EXPERIENCE } from "@/utils/constants";

export default function ExperienceSection() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col h-Screen mb-40">
=======
    <div className="flex flex-col  my-40"  id="journey" data-aos="fade-up">
>>>>>>> 5270672 (adding data to repo)
      <h1 className="text-center font-bold text-4xl text-primaryColor tracking-widest">
        My Work Experience
      </h1>

<<<<<<< HEAD
      <div className="w-full mt-12 grid grid-cols-3 gap-10">
=======
      <div className="w-full mt-12 grid grid-cols-4 gap-10">
>>>>>>> 5270672 (adding data to repo)
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="relative p-[2px]  rounded-lg overflow-hidden"
          >
            <div className="relative z-10 bg-gray-900 h-[22rem] text-white p-8 rounded-lg flex flex-col gap-7">
              <div>
                <exp.icon />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{exp.designation}</h2>
                <p className="opacity-70 ">{exp.company}</p>
                <p className=" mt-4 text-sm">{exp.responsibility}</p>
              </div>
            </div>
            <div className="animate-rotate absolute  inset-0 h-full w-full rounded-full bg-[conic-gradient(#ff69b4_20deg,transparent_120deg)] "></div>

            {/* <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
