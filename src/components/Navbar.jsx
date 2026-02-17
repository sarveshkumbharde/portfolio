// export default function Navbar() {
//   return (
//     <nav className="fixed w-full bg-darkbg/80 backdrop-blur z-50 p-4 flex justify-between">
//       <h1 className="text-xl font-bold text-primary">Sarvesh Kumbharde</h1>
//       <div className="space-x-6">
//         <a href="#projects" className="hover:text-primary">Projects</a>
//         <a href="#experience" className="hover:text-primary">Experience</a>
//         <a href="#contact" className="hover:text-primary">Contact</a>
//       </div>
//     </nav>
//   );
// }


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-primary">Sarvesh</span> Kumbharde
        </h1>

        <div className="space-x-8 text-sm uppercase tracking-wider">
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-primary transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
