export default function Home() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center">
      <div className="tracking-tight text-xl px-56">
          <h3 className="text-secondary mt-5">
            Hello, I am
          </h3>
          <h1 className="font-bold text-7xl tracking-tighter text-primary mt-5">
            Lakshya Malik
          </h1>
          <h5 className="text-secondary mt-7 pr-20">
          I'm a <span className="font-semibold">Backend Developer</span> -- based in New Delhi, India. I love to write clean and understandable code. I build microservices, AI models and web applications. 
          <br />
          <br />
          When I'm not coding, I write poetry, read books and listen to music.
          </h5>
          <h3 className="font-bold text-tertiary mt-5">
            Get in touch <span className="font-normal">{"-->"}</span>
          </h3>
      </div>
    </main>
  )
}
