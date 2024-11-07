export default function ExperienceSection() {
  return (
    <div className="flex flex-col h-Screen mb-40">
      <h1 className="text-center font-bold text-4xl text-primaryColor tracking-widest">
        My Work Experience
      </h1>

      <div className="w-full mt-12 grid grid-cols-3 gap-10">
        <div className="relative p-[2px] rounded-lg overflow-hidden">
          <div className="relative z-10 bg-gray-800 text-white p-8 rounded-lg">
            Your content goes here
          </div>
          <div className="animate-rotate absolute  inset-0 h-full w-full rounded-full bg-[conic-gradient(#ff69b4_20deg,transparent_120deg)] "></div>

          {/* <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div> */}
        </div>
      </div>
    </div>
  );
}
