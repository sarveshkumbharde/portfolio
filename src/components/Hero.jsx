export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-5xl font-bold mb-6">
        Backend-Focused Full Stack Developer
      </h2>
      <p className="max-w-2xl text-gray-400 text-lg">
        Building real-time systems, scalable APIs, and SaaS platforms using 
        Node.js, PostgreSQL, MongoDB, Redis, and WebSockets.
      </p>

      <div className="mt-8 flex gap-6">
        <a href="https://github.com/sarveshkumbharde" className="bg-primary px-6 py-3 rounded-lg">
          GitHub
        </a>
        <a href="/Sarvesh_Kumbharde_Resume.pdf" className="border border-primary px-6 py-3 rounded-lg">
          Resume
        </a>
      </div>
    </section>
  );
}
