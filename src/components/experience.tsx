import { EXPERIENCE } from "@/utils/constants";

export default function ExperienceSection() {
  return (
    <div
      className="flex flex-col  my-20 2xl:my-40"
      id="journey"
      data-aos="fade-up"
    >
      <h3 className="text-center font-bold text-2xl sm:text-4xl text-primaryColor tracking-widest">
        My Work Experience
      </h3>

      <div className="w-full mt-10 2xl:mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-10">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="relative p-[2px]  rounded-lg overflow-hidden"
          >
            <div className="relative z-10 bg-gray-900  text-white p-4 2xl:p-8 rounded-lg flex flex-col gap-7">
              <div className="h-[7rem] xl:h-[8rem] 2xl:h-[7rem]">
                <exp.icon />
              </div>
              <div className="h-[16rem] sm:h-[14rem] lg:h-[11rem] xl:h-[17rem] 2xl:!h-[14rem]">
                <h2 className="text-lg 2xl:text-xl font-semibold text-primaryColor">
                  {exp.designation}
                </h2>
                <p className="opacity-70 ">{exp.company}</p>
                <p className=" mt-4 text-base">{exp.responsibility}</p>
              </div>
            </div>
            <div className="animate-rotate absolute  inset-0 h-full w-full rounded-full bg-[conic-gradient(#ff69b4_20deg,transparent_120deg)] "></div>

          </div>
        ))}
      </div>
    </div>
  );
}
