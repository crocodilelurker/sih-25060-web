import { Saira } from "next/font/google";
const saira = Saira({
  subsets: ["latin"],
  weight: ["600"],
});
import Link from "next/link";
export default function not_found() {
  return (
    <div className="relative flex flex-col justify-center bg-gradient-to-r from-blue-600 via-emerald-300 to-green-400   h-screen w-screen pl-8 font-aria bg-">
      <div className="text-[32px]  mb-12">404 Error</div>
      <div className={`text-[48px] text-gray-900 font-bold ${saira.className}`}>
        Page not found
      </div>
      <Link href="/">
        <div className="text-[18px] text-black font-extrabold mt-2 ">
          <button className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Take me to Home
          </button>
        </div>
      </Link>
    </div>
  );
}
