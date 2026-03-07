import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="pt-20">
      <section className="px-6 pt-16 pb-6 text-center">
        <h1 className="mb-3 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Hi!
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          My name is Aiday Marlen Kyzy. Welcome to my portfolio!
        </p>
      </section>
      <Projects />
      <About />
      <Skills />
    </main>
  );
}
