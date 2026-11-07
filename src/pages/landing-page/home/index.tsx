import BackgroundImage from "@/assets/images/background.webp";
import { HomeModuleComponent } from "@/components/landing-page/ModuleComponents";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "cn";
import { AppWindowIcon, ArrowRight, Grid2X2CheckIcon } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-8">
      <section
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <div className="min-h-160 flex items-center max-w-300 mx-auto">
          <div className="max-w-2xl space-y-4 px-4">
            <div className="flex">
              <div className="bg-secondary border border-primary px-2 sm:py-1.5 py-1 sm:text-xs text-[10px] rounded-full font-semibold flex items-center gap-2 text-gray-500">
                <span className="bg-primary sm:p-1.5 p-1 rounded-full"></span>
                INDONESIA'S NEW GENERATION OF EDUTECH
              </div>
            </div>
            <h1 className="sm:text-6xl md:text-5xk text-4xl font-bold">
              A Single Ecosystem for All{" "}
              <span className="text-primary">Educational Operations</span>
            </h1>
            <p className="sm:text-base md:text-sm text-xs">
              A modern ERP & LMS platform featuring cutting-edge anime
              aesthetics, designed for schools, tutoring centers, and academies
              in Indonesia. Integrate academics, attendance, finance, and
              communication into one seamless workflow.
            </p>
            <div className="flex items-center space-x-3">
              <Button
                className={cn(
                  "h-10 px-4 sm:text-base md:text-sm text-xs hover:-translate-y-1 hover:shadow-lg duration-200 cursor-pointer text-white shadow-sm rounded-base",
                )}
              >
                Get Started
                <ArrowRight />
              </Button>
              <Button
                className={cn(
                  "bg-white h-10 px-4 sm:text-base md:text-sm text-xs hover:-translate-y-1 hover:shadow-lg duration-200 cursor-pointer shadow-sm rounded-base hover:bg-white hover:border-primary",
                )}
              >
                <AppWindowIcon className="text-primary" />
                Explore modules
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 space-x-2 space-y-2 max-w-350 mx-auto px-2">
        <div className="space-y-2">
          <div className="flex">
            <span className="flex items-center gap-2 text-primary font-semibold md:text-sm text-[10px] uppercase bg-secondary/60 px-2.5 py-1 rounded-full border border-primary">
              <Grid2X2CheckIcon size={16} />
              Modular Workspace Engine
            </span>
          </div>
          <h1 className="font-bold text-3xl">
            Highly Modular Centralized Interface
          </h1>
          <p className="md:text-base text-xs">
            Navigate every operational function of the organization without
            switching tabs, designed with the conciseness of a desktop interface
            and the fluidity of the cloud.
          </p>
        </div>
      </section>
      <section className="max-w-350 mx-auto px-2">
        <Card className="shadow-md bg-linear-to-br from-primary/20 via-white to-secondary/20 space-y-2 rounded-md!">
          <CardHeader className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className="flex gap-2">
                <span className="h-3 w-3 bg-red-800 rounded-full" />
                <span className="h-3 w-3 bg-purple-600 rounded-full" />
                <span className="h-3 w-3 bg-cyan-600 rounded-full" />
              </div>
              <span className="font-bold uppercase">
                {import.meta.env.VITE_APP_NAME || "MeiFaLabs"}
              </span>
            </div>

            <Link
              to="/modules"
              className="
                group relative md:inline-flex hidden items-center gap-2
                overflow-hidden rounded-full
                border border-primary/20
                bg-white/70 px-4 py-2
                text-sm font-semibold text-primary
                shadow-sm backdrop-blur-sm
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:border-primary/40
                hover:bg-linear-to-br hover:from-primary/20 hover:to-secondary/20
                hover:shadow-md hover:shadow-primary/20
                active:translate-y-0 active:scale-95
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-primary
                focus-visible:ring-offset-2
              "
            >
              <span>Explore All</span>

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </CardHeader>
          <CardContent>
            <HomeModuleComponent limit={5} />
            <div className="flex items-center justify-center mt-4">
              <Link
                to="/modules"
                className="
                  md:hidden group relative inline-flex items-center gap-2
                  overflow-hidden rounded-full
                  border border-primary/20
                  bg-white/70 px-4 py-2
                  text-sm font-semibold text-primary
                  shadow-sm backdrop-blur-sm
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  hover:border-primary/40
                  hover:bg-linear-to-br hover:from-primary/20 hover:to-secondary/20
                  hover:shadow-md hover:shadow-primary/20
                  active:translate-y-0 active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                <span>Explore All</span>

                <ArrowRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-350 mx-auto px-2"></section>
    </div>
  );
}
