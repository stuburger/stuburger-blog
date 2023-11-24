import { allModules, allPosts, allTutorials } from "@/.contentlayer/generated";
import { Article } from "@/components/article";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            All the stuff
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Everything I&apos;ve written
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {allPosts
              .filter((post) => !post.draft)
              .map((post) => (
                <Article
                  id={post._id}
                  key={post._id}
                  date={new Date(post.date)}
                  description={post.description}
                  title={post.title}
                  slug={post.slug}
                />
              ))}
            {allModules
              .filter((post) => !post.draft)
              .map((post) => (
                <Article
                  id={post._id}
                  key={post._id}
                  date={new Date(post.date)}
                  description={post.description}
                  title={post.title}
                  slug={post.slug}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
