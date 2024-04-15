/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jiLMknQFsfY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import "./User.css";

export default function Component() {
  return (
    <div className="grid-container">
      <div className="grid-item border-t border-b bg-gray-100 dark:bg-gray-900"></div>
      <div className="grid-item">
        <div className="inner-grid">
          <div className="space-y-2">
            <img
              alt="User"
              className="rounded-full"
              height={250}
              src="/placeholder.svg"
              style={{
                aspectRatio: "250/250",
                objectFit: "cover",
              }}
              width={250}
            />
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">
                Alice Johnson
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Writer. Dreamer. Lover of books. On a mission to explore the
                world one story at a time.
              </p>
            </div>
          </div>
          <div className="inner-grid">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                The Power of Imagination
              </h2>
              <p className="text-gray-500 not-italic dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                Imagination is a powerful force that allows us to transcend
                reality and enter the realm of infinite possibilities. It is the
                spark that ignites creativity, the source of inspiration for
                artists, writers, and innovators. With imagination, we can dream
                of worlds beyond our own, envision a better future, and find
                solutions to the most challenging problems.
              </p>
              <span className="font-semibold underline" href="#">
                Read More
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Embracing Change: A Journey of Self-Discovery
              </h2>
              <p className="text-gray-500 not-italic dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                Change is inevitable. It is the only constant in life, the force
                that shapes our destiny and opens the door to new
                possibilities....
              </p>
              <span className="font-semibold underline" href="#">
                Read More
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                The Art of Storytelling: Weaving Magic with Words
              </h2>
              <p className="text-gray-500 not-italic dark:text-gray-400">
                Posted on August 24, 2023
              </p>
              <p>
                Storytelling is an ancient art that has been passed down through
                generations, enchanting audiences with tales of heroism,
                romance, and adventure. The storyteller weaves magic with words,
                painting vivid images in the minds of the listeners and...
              </p>
              <span className="font-semibold underline" href="#">
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
          <ul className="category-list">
            <li>
              <span className="font-medium" href="#">
                Inspiration
              </span>
            </li>
            <li>
              <span className="font-medium" href="#">
                Creativity
              </span>
            </li>
            <li>
              <span className="font-medium" href="#">
                Imagination
              </span>
            </li>
            <li>
              <span className="font-medium" href="#">
                Writing
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
