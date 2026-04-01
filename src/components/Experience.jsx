export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-slate-900">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Experience</h2>

      <div className="max-w-4xl mx-auto text-white">
        <h3 className="text-xl font-semibold text-primary">
          Backend Intern – Quick.AI-SAAS platform
        </h3>
        <p className="text-gray-400 mt-3">
          Developed backend of SAAS application with redis caching, rate limiting and OAuth authentication. Also integrate LLM for text generation,
          cloudinary api for image editing and clipdrop api for image creation.
        </p>
      </div>
    </section>
  );
}
