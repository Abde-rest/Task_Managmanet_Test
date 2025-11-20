import { Button } from "@/components/ui/button";

import { ArrowBigRight, Play, Waypoints } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section className="text-center">
        <div className="relative mx-auto  px-6 py-20 sm:px-8 sm:py-12">
          <div>
            <h1 className="  text-amber-500  ">workflows</h1>

            <p className="mt-10 font-medium text-3xl">
              Build powerful automation workflows with our intuitive visual
            </p>
            <p className="  font-medium text-3xl ">
              {" "}
              interface. No coding required - just drag, drop, and automate.
            </p>
            <div className="mt-8 gap-4 flex  justify-center items-center">
              <Link href={"/"}>
                <Button className="bg-linear-to-r from-violet-200 to-pink-200 ">
                  <CardContent className="flex items-center gap-2">
                    <Play size={30} />
                    Get started Free
                  </CardContent>
                </Button>
              </Link>
              <Link href={"/"}>
                <Button className="flex items-center gap-1 bg-transparent text-black dark:text-white hover:bg-transparent shadow-sm">
                  <CardContent> View Doimantation</CardContent>
                  <ArrowBigRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* section Box  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center">
        <Card className="w-full max-w-sm  m-auto ">
          <div className="bg-gray-100/25 rounded-full m-auto  flex items-center justify-center w-fit p-5">
            <Waypoints size={30} />
          </div>
          <h1 className="mt-4 mb-3">Visual Workflow Builder</h1>
          <p className="px-3">
            Create complex automations with simple drag-and-drop interface
          </p>
        </Card>

        <Card className="w-full max-w-sm">
          <div className="bg-gray-100/25 rounded-full m-auto  flex items-center justify-center w-fit p-5">
            <Waypoints size={30} />
          </div>
          <h1 className="mt-4 mb-3">Real-time Execution</h1>
          <p className="px-3">
            Create complex automations with simple drag-and-drop interface
          </p>
        </Card>

        <Card className="w-full max-w-sm">
          <div className="bg-gray-100/25 rounded-full  m-auto flex items-center justify-center w-fit p-5">
            <Waypoints size={30} />
          </div>
          <h1 className="mt-4 mb-3">Secure & Scalable</h1>
          <p className="px-3">
            Create complex automations with simple drag-and-drop interface
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
