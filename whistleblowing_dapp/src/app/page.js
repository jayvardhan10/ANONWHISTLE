import Home from "./Components/Home"
import Problem from "./Components/Problem"
import SubmitProblem from "./Components/SubmitProblem"
// import dynamic from "next/dynamic"; 
// const Problem = dynamic(() => import("./Components/Problem"), { ssr: true });

export default function Main() {
  return (
    <div className= "w-full h-auto bg-slate-500 flex flex-col items-center justify-evenly mt-[7vh]">
      {/* <Home/> */}
      <div className="rounded-lg border-2 border-solid border-black w-[50%] h-[20vh]">
        <h1 className="sm:text-2.5xl text-wrap md:text-3.5xl text-5xl font-serif font-bold">Anonymous Whistleblowing Platform</h1>
      </div>
          {/* <Problem/> */}
      <SubmitProblem/>
    </div>
  );
}
