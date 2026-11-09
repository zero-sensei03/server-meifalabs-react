import BackgroundImage from "@/assets/images/background.webp";
import Section2Image from "@/assets/images/home-2-section.webp";
import { HomeModuleComponent } from "@/components/landing-page/ModuleComponents";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "cn";
import { AppWindowIcon, ArrowRight, Grid2X2CheckIcon, Layers, RefreshCcw } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-16">
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
      <section className="max-w-350 mx-auto px-4 space-y-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 space-x-2 space-y-2 max-w-350 mx-auto px-2">
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
        </div>
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
      <section className="max-w-350 mx-auto px-4">
        <div className="grid lg:grid-cols-[6fr_5fr] grid-cols-1 xl:space-x-24 lg:space-x-12 space-y-6 items-center">
          <div className="space-y-4">
            <h1 className="font-bold md:text-4xl text-3xl mb-6">Technology That Adapts to the Way You Work.</h1>
            <p className="md:text-base text-sm">Every organization is unique, shaped by its own culture, operational tempo, and community. Yet traditional software frequently forces teams into rigid, one-size-fits-all molds that obstruct natural growth.</p>
            <p className="md:text-base text-sm">At Aozora Eduverse, we believe organizations should start with what matters most today, scale capabilities seamlessly as requirements evolve, and eliminate fragmented point solutions once and for all.</p>
            <div className="grid sm:grid-cols-2 sm:space-x-4 grid-cols-1 sm:space-y-0 space-y-2 mt-6">
              <Card className="bg-indigo-300/15 border border-indigo-300 rounded-md py-4">
                <CardContent className="grid grid-cols-[25%_auto] space-x-4 items-start px-2.5">
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-400/20 p-3 rounded-sm border border-indigo-400 text-indigo-600">
                      <Layers size={16} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-bold text-base">Modular Scaling</h2>
                    <span className="text-xs">Activate only what you need, expand without migration pain.</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-indigo-300/15 border border-indigo-300 rounded-md py-4">
                <CardContent className="grid grid-cols-[25%_auto] space-x-4 items-start px-2.5">
                  <div className="flex items-center justify-center">
                    <div className="bg-emerald-400/20 p-3 rounded-sm border border-emerald-400 text-emerald-600">
                      <RefreshCcw size={16} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-bold text-base">Unified Continuity</h2>
                    <span className="text-xs">Eliminate isolated data silos across departments.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="w-full bg-cover bg-center bg-no-repeat min-h-54 h-full rounded-lg relative overflow-hidden p-4 flex flex-col justify-end"
            style={{
              backgroundImage: `url(${Section2Image})`,
            }}
          >
            <div className="bg-black/20 absolute inset-0" />
            <div className="bg-white relative rounded-lg p-4 shadow-lg italic font-semibold md:text-base text-xs">
               “A harmonious convergence of human empathy and scalable modular computing.” 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
