import Link from "next/link";

interface ArticleProps {
  description?: string;
  title: string;
  date: Date;
  id: string;
  slug: string;
}

export function Article(props: ArticleProps) {
  return (
    <article
      key={props.id}
      className="relative isolate flex flex-col gap-8 lg:flex-row dark:text-white"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          src="/blog-post-4.jpg"
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 dark:bg-gray-800 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset dark:ring-gray-100/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time
            dateTime={props.date.toDateString()}
            className="text-gray-500 dark:text-gray-400"
          >
            {props.date.toDateString()}
          </time>
          <a
            // href={post.category.href}
            className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Software Engineering
          </a>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
            <Link href={props.slug}>
              <span className="absolute inset-0" />
              {props.title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {props.description}
          </p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 dark:border-gray-700/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/19990580?v=4"
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-800"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900 dark:text-white">
                <a>
                  <span className="absolute inset-0" />
                  Stuart Bourhill
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
