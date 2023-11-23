import { allTutorials } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Tutorials</h1>
      {allTutorials
        .filter((tut) => tut.type === "Tutorial")
        .filter((tut) => !tut.draft)
        .map((tut) => (
          <article key={tut._id}>
            <Link href={tut.slug}>
              <h2>{tut.title}</h2>
            </Link>
            {tut.description && <p>{tut.description}</p>}
          </article>
        ))}
    </div>
  );
}
