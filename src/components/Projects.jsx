// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 px-8">
//       <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

//       <div className="grid md:grid-cols-2 gap-12">

//         <div className="bg-slate-800 p-8 rounded-xl">
//           <h3 className="text-xl font-semibold text-primary mb-4">
//             CODECOLAB – Real-time Collaborative Editor
//           </h3>
//           <p className="text-gray-400">
//             Built conflict-free collaborative editing using YJS CRDTs and Monaco Editor.
//             Integrated WebSocket synchronization, multi-language execution using Piston API,
//             and real-time chat with persistent storage.
//           </p>
//         </div>

//         <div className="bg-slate-800 p-8 rounded-xl">
//           <h3 className="text-xl font-semibold text-primary mb-4">
//             QUICK.AI – AI SaaS Platform
//           </h3>
//           <p className="text-gray-400">
//             Multi-service AI platform with JWT auth, Stripe subscriptions,
//             Redis caching, rate limiting, and database-driven entitlements.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }


export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-card backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              CODECOLAB
            </h3>
            <p className="text-gray-400">
              Real-time collaborative editor powered by YJS CRDTs, Monaco,
              multi-language execution via Piston API, and WebSocket sync.
              Designed for concurrency without conflicts.
            </p>
          </div>

          <div className="bg-card backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              QUICK.AI
            </h3>
            <p className="text-gray-400">
              Multi-service AI SaaS with Stripe subscriptions, Redis caching,
              JWT-based auth, role-based entitlements and API rate limiting.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
