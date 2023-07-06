import SquigglyLines from "./SquigglyLines";

export default function Hero() {
  return (
    <div className="my-10 sm:my-20 justify-center items-center">
      <div className="flex flex-wrap xl:flex-nowrap container mx-auto justify-center items-center py-10 sm:py-20 z-50">
        <div className="flex sm:mt-10 flex-col justify-center text-center sm:text-left px-4 sm:px-2">
          <h1 className="text-4xl sm:text-6xl font-bold leading-none w-full sm:w-2/3">
            Writing Articles in Seconds{" "}
            <span className="relative whitespace-nowrap text-indigo-600">
              <SquigglyLines />
              <span className="relative text-indigo">With AI</span>
            </span>{" "}
          </h1>

          <h1 className="text-2xl sm:text-3xl font-semibold my-6">
            Try it now and unlock the potential of AI in writing!
          </h1>
          <p className="max-w-lg">
            Welcome to our website where you can experience the power of AI-driven article writing.
            Whether you need content for your blog, website, or publication, our AI-powered writing assistant is here to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
