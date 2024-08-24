"use client";



import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaClock, FaThumbsUp, FaMoneyBill, FaPuzzlePiece } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-[length:400%_400%] animate-gradient-background"></div>
      <div className="relative z-10">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <a  className="" href="/">
                <Image src={"/logo.png"} alt="logo" width={80} height={100} />
              </a>
              <span className="ml-3 text-base font-bold text-[#8046fd] font-mono">
                AI CONTENT GENERATOR
              </span>
            </div>
            <button
              onClick={() => router.push("/dashboard")}
              className="inline-flex hover:scale-105 transition-all items-center shadow-lg border hover:bg-gray-100 py-1 px-3 focus:outline-none text-white hover:text-[#8046fd] bg-[#8046fd] rounded text-lg font-mono font-bold mt-4 md:mt-0"
            >
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xl text-indigo-100 tracking-widest font-medium title-font mb-1">
                AI Content Generator Powered by SKILLZEE
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Generate content, keywords, and descriptions with Contentful AI
                Content Generator
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Unlock your creative potential with our AI content generator.
                Designed for writers, marketers, and content creators, our
                advanced tool uses cutting-edge technology to generate
                high-quality, personalized content in seconds. Whether you need
                engaging blog posts, compelling ad copy, or captivating social
                media updates, our AI assists you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg bg-white">
                <FaClock size={32} className="text-blue-500" />
                <br />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Time Efficiency
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Save hours on content creation. Our AI generates high-quality,
                  relevant content in seconds, allowing you to focus on other
                  important tasks.
                </p>
              </div>
              <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg bg-white">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  <FaThumbsUp size={24} className="text-green-500" />
                  <br />
                  Consistency and Quality
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Maintain a consistent tone and high-quality output across all
                  your content. The AI ensures that every piece meets your
                  standards, providing a seamless and professional experience
                  for your audience.
                </p>
              </div>
              <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg bg-white">
                <FaMoneyBill size={40} className="text-red-500" />
                <br />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Cost-Effective
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Reduce the need for extensive human resources. With our AI
                  content generator, you get premium content without the high
                  costs associated with hiring multiple writers and editors.
                </p>
              </div>
              <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg bg-white">
                <FaPuzzlePiece size={28} className="text-purple-500" />
                <br />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  Versatility
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Adapt to any content need, from blog posts and social media
                  updates to marketing copy and SEO articles. The AI is designed
                  to handle diverse content requirements, making it a one-stop
                  solution for all your writing needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
