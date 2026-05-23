import Nav from "./nav";

export default function About() {
  return (
    <>
      <Nav />
      <div className="min-h-svh w-full flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-yellow-500/30 hover:shadow-yellow-500/5">
          <div className="border-b border-slate-800/80 pb-6 mb-8">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
              About Me
            </h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
              Full Stack Web Developer
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              Full-Stack Software Engineer with 4 years of experience as an
              individual contributor owning feature development and production
              deployments. Integrates strong analytical skills and stakeholder
              communication models refined within the healthcare and research
              sectors to deliver reliable, technical solutions. I blend strong
              analytical problem-solving with product ownership to build, test,
              and scale user-focused features.
            </p>

            <p className="text-sm font-medium text-slate-400 flex items-center flex-wrap gap-2">
              Open source contributor to
              <a
                href="https://github.com/backstage/backstage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-bold tracking-wide text-red-500 hover:text-yellow-500 transition-colors duration-300 group"
              >
                Backstage OSS
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1">
                  &rarr;
                </span>
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-800/60">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Languages
              </h3>
              <p className="text-yellow-500 font-medium text-sm sm:text-base leading-relaxed">
                JavaScript, TypeScript, Java, Ruby
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Frameworks
              </h3>
              <p className="text-yellow-500 font-medium text-sm sm:text-base leading-relaxed">
                Rails, React, Spring Boot, Node.js
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Tools & Cloud
              </h3>
              <p className="text-yellow-500 font-medium text-sm sm:text-base leading-relaxed">
                Docker, Kubernetes, Amazon Elastic Cloud Services, Azure Active
                Directory, Google Kubernetes Engine, Tailwind, Jira, Concourse,
                Material UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
