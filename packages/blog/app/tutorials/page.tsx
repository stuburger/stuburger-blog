import { allTutorials } from "@/.contentlayer/generated";
import { Article } from "@/components/article";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tutorials
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A collection of step-by-step guides
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {allTutorials
              // .filter((tut) => !tut.draft)
              .map((tut) => (
                <Article
                  id={tut._id}
                  key={tut._id}
                  date={new Date()}
                  description={tut.description}
                  title={tut.title}
                  slug={tut.slug}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
