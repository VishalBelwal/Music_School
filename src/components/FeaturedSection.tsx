'use client'
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/button";
import { BackgroundGradient } from "./ui/background-gradient";
import { buttonVariants } from "@/components/ui/button"


interface Course {
  id: number;
  title: String;
  slug: String;
  description: String;
  price: number;
  instructor: String;
  isFeatured: boolean;
  image: String;
}

export default function FeaturedSection() {
  const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className=" text-teal-600 font-semibold tracking-wide uppercase text-lg">
            Featured Courses
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {
            featuredCourses.map((course:Course) => {
                return(
                    <div key={course.id} className="flex justify-center sm:mx-6 md:mx-4">
                        <BackgroundGradient className="lex flex-col rounded-[22px]  bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                            <p className="text-xl sm:text-2xl font-semibold text-black mt-4 mb-2 dark:text-neutral-400">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-500  flex-grow">{course.description}</p>
                            <Link href={`/courses/${course.slug}`} className="mt-7 p-2">
                              <Button variant={"secondary"}>
                                <h2 className="p-6">Enroll Now</h2>  
                              </Button> 
                            </Link>
                          </div>
                        </BackgroundGradient>
                    </div>
                )
            })
          }
        </div>
      </div>
      <div className="mt-20 text-center hover:">
        <Button
          variant="secondary"
          className="hover:bg-black rounded-xl p-6 bg-gray-700"
        >
          <Link href="/courses" className="text-center text-lg font-semibold ">
            View all courses
          </Link>
        </Button>
      </div>
    </div>
  );
}
