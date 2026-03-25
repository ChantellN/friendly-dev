const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/headshot1.jpeg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Chantell 👋🏽
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Story</h2>
        <p className="text-gray-300 leading-relaxed">
          After six years in education and customer service, I made a bold
          decision to pivot into tech - I started this journey knowing almost
          nothing about code and it's been the best decision I've ever made. My
          path wasn't traditional, and that's exactly why I document my learning
          journey - because you don't have to fit a mold to start something new.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'Tailwind CSS',
          'React',
          'React Native',
          'React Router',
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
