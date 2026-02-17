export default function Skills() {
  const skills = [
    "Node.js", "Express", "PostgreSQL", "MongoDB",
    "Redis", "Socket.IO", "JWT Auth",
    "React", "Stripe", "OAuth"
  ];

  return (
    <section className="py-24 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-slate-800 px-4 py-2 rounded-lg text-gray-400">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
