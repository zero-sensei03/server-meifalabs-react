import AuthHero from "@/assets/images/auth-hero.webp";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function SignIn() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex items-center justify-center px-4">
      <div className="mx-auto max-w-7xl w-full p-4 shadow-lg bg-white rounded-lg grid md:grid-cols-[3fr_2fr] grid-cols-1 space-x-2">
        <div className="p-4 h-full flex flex-col justify-between space-y-2">
          <div>
            <Link
              to={"/"}
              className="flex items-center gap-2 text-sm hover:-translate-y-1 duration-200 hover:text-primary"
            >
              <ArrowLeft size={12} />
              Return to Main Page
            </Link>
          </div>
          <div>ksa</div>
          <div></div>
        </div>
        <div className="p-4 md:block hidden">
          <img src={AuthHero} alt="" className="rounded-lg min-h-full w-auto" />
        </div>
      </div>
    </div>
  );
}
