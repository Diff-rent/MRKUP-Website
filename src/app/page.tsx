"use client";
import AnimatedText from "animated-text-letters";
import "animated-text-letters/index.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-[1400px] flex flex-col justify-center items-center min-h-screen gap-16 p-4">
      <header className="w-full flex items-center justify-between py-4">
        <h3>MRKUP</h3>

        <div className="w-max flex items-center justify-center gap-8">
          <a
            className="border-b-2 border-transparent hover:border-green-400 transition-all duration-200"
            href="#about"
          >
            About
          </a>
          <a
            className="border-b-2 border-transparent hover:border-green-400 transition-all duration-200"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="border-b-2 border-transparent hover:border-green-400 transition-all duration-200"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="w-full flex flex-col items-center justify-center mb-[26%] mt-[16%]">
        <h1 className="w-full lg:max-w-[80%] text-center font-bold text-6xl mb-24">
          <AnimatedText
            text="Take your artificial intelligence models to the next level"
            animation="slide-up"
            delay={42}
            easing="ease"
            animationDuration={1200}
            transitionOnlyDifferentLetters={true}
          />
        </h1>

        <button className="w-max px-4 py-2 rounded bg-indigo-500 font-bold text-white hover:scale-110 transition-all duration-300 shadow-lg">
          Request Access
        </button>
      </main>

      <section id="about" className="mb-64">
        <div className="w-full flex flex-col gap-56">
          <div className="w-full flex items-center justify-between gap-16">
            <img
              src="https://keymakr.com/blog/content/images/2021/05/boxes.jpg"
              alt="Feature 1"
              className="flex flex-1 w-full rounded-lg shadow-lg"
            />
            <div className="flex flex-1 w-full flex-col gap-4 items-start">
              <h3 className="text-4xl font-bold">
                Create, manage and share your work on datasets with others
              </h3>
              <p className="text-start">
                Using our simple and intuitive interface you can create and
                manage your datasets with ease. Add files, edit them and export
                everything for training with a single click.
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-16">
            <div className="flex flex-1 w-full flex-col gap-4 items-start">
              <h3 className="text-2xl font-bold">One tool to rule them all</h3>
              <p className="text-start">
                Using our simple and intuitive interface you can create and
                manage your datasets with ease. Add files, edit them and export
                everything for training with a single click.
              </p>
            </div>
            <img
              src="https://keymakr.com/blog/content/images/2021/05/boxes.jpg"
              alt="Feature 1"
              className="flex flex-1 w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full flex items-center justify-between gap-16">
            <img
              src="https://keymakr.com/blog/content/images/2021/05/boxes.jpg"
              alt="Feature 1"
              className="flex flex-1 w-full rounded-lg shadow-lg"
            />
            <div className="flex flex-1 w-full flex-col gap-4 items-start">
              <h3 className="text-2xl font-bold">Feature 1</h3>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mb-64">
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <h2 className="text-5xl font-black mb-8">Pricing</h2>
          <div className="w-full flex items-center justify-between gap-16">
            <div className="flex flex-1 items-center w-full flex-col gap-8">
              <h3 className="text-2xl font-bold">Decision Tree</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </div>
            <div className="flex flex-1 items-center w-full flex-col gap-8">
              <h3 className="text-2xl font-bold">Random Forest</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </div>
            <div className="flex flex-1 items-center w-full flex-col gap-8">
              <h3 className="text-2xl font-bold">AGI</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col items-center gap-2 mb-64">
        <h5 className="text-center text-3xl font-bold">
          If you have any questions, contact us.
        </h5>
        <h4 className="text-center text-6xl font-black text-violet-600">
          <strong>mrkup@different.tech</strong>
        </h4>
      </section>

      <footer className="w-full bg-gray-100 rounded mb-4">
        <div className="w-full flex items-center justify-center py-4">
          <p className="text-xs font-bold text-gray-700">
            MRKUP © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
