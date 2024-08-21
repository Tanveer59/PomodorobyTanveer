import PomoTimer from "@/components/pomoTimer";
import TextArea from "@/components/Textarea";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";



export default function Home() {

  return (
    <main className="flex flex-col justify-between">
      <div className="flex min-h-screen flex-col items-center text-white relative target">
        <div className="pt-4 pb-3 w-[90%] md:w-[85%] lg:w-[30%] flex justify-between items-center border-b border-opacity-25 border-gray-800">
          <div>
            <a href="">
              <img
                src="./tanveerlg.svg"
                className="w-12 h-12 md:w-12 md:h-12"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex gap-2">
            <div>
              <a
                href="#"
                className="text-sm transition-opacity Roboto-Light hover:text-black border text-white pl-2 pr-2 pt-2 pb-2 hover:cursor-pointer hover:bg-white"
              >
                Settings
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm border Roboto-Light text-white pl-2 pr-2 pt-2 pb-2 hover:bg-white transition-opacity hover:text-black"
              >
                Add Music   
              </a>
            </div>
          </div>
        </div>

        <PomoTimer />
        <div className="flex pt-4 w-[90%] md:w-[85%] lg:w-[30%]">
          <p className="Roboto-Light items-center text-gray-100">
            <span className="inline-flex items-center">Pomodoro | Focus Time&nbsp;<PiArrowRight /> &nbsp;</span>
            <span className="inline-flex items-center"> Short Break | Time to Rest&nbsp;<PiArrowRight /> &nbsp;</span>
            <span className="inline-flex items-center"> Pomodoro&nbsp;<PiArrowRight /> &nbsp;</span>
            <span className="inline-flex items-center"> Short Break&nbsp;<PiArrowRight /> &nbsp;</span>
            <span className="inline-flex items-center"> Long Break&nbsp;<PiArrowRight /> &nbsp;</span>
            <span className="inline-flex items-center"> Repeat ... &nbsp;</span>
          </p>
        </div>
        <TextArea />
      </div>

      <div className="bg-white p-4 md:pl-[15%] md:pr-[15%] pt-[5%] mt-4 gap-4">
        <h1 className="mb-4 text-2xl md:text-5xl Roboto-bold">Boost Your Productivity with Our Pomodoro Time Management App</h1>
        
        <div className="flex flex-col">
          <div className="mt-10 mb-10 flex flex-col md:flex-row gap-4">
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">What is the Pomodoro Technique?</p>
              <p className="text-gray-500 dark:text-gray-400">The Pomodoro Technique breaks work into focused intervals, typically 25 minutes, followed by short breaks. After completing four sessions, users enjoy a longer break, helping maintain high productivity while avoiding burnout.</p>
            </div>
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">How Our App Enhances Your Productivity?</p>
              <p className="text-gray-500 dark:text-gray-400">The Pomodoro Technique breaks work into focused intervals, typically 25 minutes, followed by short breaks. After completing four sessions, users enjoy a longer break, helping maintain high productivity while avoiding burnout.</p>
            </div>
          </div>
          <div className=" mb-10 flex flex-col md:flex-row gap-4">
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Start Optimizing Your Workflow Today?</p>
              <p className="text-gray-500 dark:text-gray-400">With a user-friendly interface and seamless automation, our Pomodoro app ensures you stay in the zone, prioritize tasks, and achieve more. Dive into a smarter way of working—download and get started today!</p>
            </div>
          </div>
        </div>
        <h1 className="mb-4 mt-10 text-2xl md:text-5xl Roboto-bold">Key Features of Our Pomodoro Time Management App</h1>
        <div className="flex flex-col">
          <div className="mt-10 mb-10 flex flex-col md:flex-row gap-4">
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Customizable Time Intervals</p>
              <p className="text-gray-500 dark:text-gray-400">Tailor your productivity sessions with customizable time intervals. Set your Pomodoro work sessions and breaks according to your preferences, ensuring the perfect balance between focused work and relaxation. Whether you prefer 25-minute intervals or longer periods, our app adapts to your needs.</p>
            </div>
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Automated Pomodoro Cycles</p>
              <p className="text-gray-500 dark:text-gray-400">Experience seamless productivity with our automated Pomodoro cycles. The app manages the sequence of work sessions and breaks for you—Pomodoro, short break, long break—so you can stay focused without the hassle of manual tracking.</p>
            </div>
          </div>
          <div className=" mb-10 flex flex-col md:flex-row gap-4">
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Progress Tracking and Insights</p>
              <p className="text-gray-500 dark:text-gray-400">Monitor your productivity with detailed progress tracking and insights. Our app provides visual charts and statistics to help you understand your work patterns, set goals, and measure your efficiency over time.</p>
            </div>
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">User-Friendly Interface</p>
              <p className="text-gray-500 dark:text-gray-400">Enjoy an intuitive and easy-to-navigate interface designed for a smooth user experience. The app’s clean design ensures you can quickly set up and manage your Pomodoro sessions without any technical difficulties.</p>
            </div>
          </div>
          <div className=" mb-10 flex flex-col md:flex-row gap-4">
            <div>
              <p className="mb-3 text-gray-800 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Notifications and Reminders</p>
              <p className="text-gray-500 dark:text-gray-400">Stay on track with customizable notifications and reminders. Get alerts when it’s time to start or end a Pomodoro session, take a short break, or begin your long break, keeping you organized and on schedule.</p>
            </div>

          </div>
          <div className=" mb-10 flex flex-col md:flex-row gap-4">
            <div>
              <h1 className="mt-10  mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">Effective  <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Time Management</mark> with the Pomodoro Technique</h1>
              <h3 className="text-lg font-bold mb-6 text-gray-500 lg:text-xl dark:text-gray-400">How the Pomodoro Timer Works</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col ">
                  <h4 className="font-bold text-gray-900 ">Automated Pomodoro Cycles</h4>
                  <p>Experience effortless productivity with automated Pomodoro cycles that manage your work sessions and breaks.</p>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-bold text-gray-900 ">Notifications and Reminders</h4>
                  <p>Stay organized with customizable notifications and reminders for each phase of your Pomodoro cycle.</p>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-bold text-gray-900 ">Customize Your Work and Break Cycles</h4>
                  <p>Adjust your Pomodoro sessions and breaks to fit your personal workflow for optimal efficiency.</p>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-bold text-gray-900 ">Distraction-Free Mode</h4>
                  <p>Enhance focus with a distraction-free mode that minimizes interruptions during your work sessions.</p>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-bold text-gray-900 ">Progress Tracking and Insights</h4>
                  <p>Visualize your productivity with detailed charts and statistics that help you monitor and improve your work habits.</p>
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-bold text-gray-900 ">Sync Across Devices</h4>
                  <p>Keep your Pomodoro sessions in sync across all your devices for seamless productivity management.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="p-10 bg-black">
        <h1 className="text-white text-center text-2xl md:text-5xl capitalize ">Developed BY <Link target="_blank" className="underline text-blue-600" href={'https://www.linkedin.com/in/tanveer-ahmad-9620a12b5/'}><span className="inline-flex items-center"><FaLinkedin /> Tanveer Ahmad</span></Link></h1>
      </div>
    </main>
  );
}
