export default function Home() {
  var statsData = [
    {
      iconSvg: <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 2C6.50098 2 2.00098 6.5 2.00098 12C2.00098 17.5 6.50098 22 12.001 22C17.501 22 22.001 17.5 22.001 12C22.001 6.5 17.551 2 12.001 2ZM15.751 16.65C13.401 15.2 10.451 14.8992 6.95014 15.6992C6.60181 15.8008 6.30098 15.55 6.20098 15.25C6.10098 14.8992 6.35098 14.6 6.65098 14.5C10.451 13.6492 13.751 14 16.351 15.6C16.701 15.75 16.7501 16.1492 16.6018 16.45C16.4018 16.7492 16.0518 16.85 15.751 16.65ZM16.7501 13.95C14.051 12.3 9.95098 11.8 6.80098 12.8C6.40181 12.9 5.95098 12.7 5.85098 12.3C5.75098 11.9 5.95098 11.4492 6.35098 11.3492C10.001 10.25 14.501 10.8008 17.601 12.7C17.9018 12.8508 18.051 13.35 17.8018 13.7C17.551 14.05 17.101 14.2 16.7501 13.95ZM6.30098 9.75083C5.80098 9.9 5.30098 9.6 5.15098 9.15C5.00098 8.64917 5.30098 8.15 5.75098 7.99917C9.30098 6.94917 15.151 7.14917 18.8518 9.35C19.301 9.6 19.451 10.2 19.201 10.65C18.9518 11.0008 18.351 11.1492 17.9018 10.9C14.701 9 9.35098 8.8 6.30098 9.75083Z" fill="#1DB954" ></path></svg>,
      subtitle: "Listening to",
      title: "Not Angry by Chris James"
    },
    {
      iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="white"/></svg>,
      subtitle: "Total contributions",
      title: "999 commits"
    },
    {
      iconSvg: <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="25px" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="#7389F4"/></svg>,
      subtitle: "Currently reading",
      title: "Dark Matter by Blake Crouch"
    },
  ]
  return (
    <main className="bg-gradient-to-br from-background-primary to-background-secondary min-h-screen flex flex-col items-center justify-center">
      <div className="tracking-tight text-xl px-56">
          <h3 className="text-secondary mt-5 text-2xl">
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
            <a href="mailto:officiallakshya@gmail.com" className="group">
              Get in touch <div className="group-hover:translate-x-2.5 transition font-normal inline-block">{"-->"}</div>
            </a>
          </h3>
      </div>

      <div className="grid grid-cols-3 mt-16 w-4/6">
        <div>
            <div className="flex items-center">
              <div className="flex justify-center items-center" style={{border: "0.8px solid #d0d0e1", borderRadius: "100%", width: "50px", height: "50px", boxShadow: "0px 0px 10px #d0d0e1"}}>
                {statsData[0].iconSvg}
              </div>
              <div className="px-5">
                <h6 className="text-secondary text-xs font-light">
                  {statsData[0].subtitle}
                </h6>
                <h5 className="text-primary text-base font-normal">
                  {statsData[0].title}
                </h5>
              </div>
            </div>
        </div>
        <div>
            <div className="flex items-center">
              <div className="flex justify-center items-center" style={{border: "0.8px solid #d0d0e1", borderRadius: "100%", width: "50px", height: "50px", boxShadow: "0px 0px 10px #d0d0e1"}}>
                {statsData[1].iconSvg}
              </div>
              <div className="px-5">
                <h6 className="text-secondary text-xs font-light">
                  {statsData[1].subtitle}
                </h6>
                <h5 className="text-primary text-base font-normal">
                  {statsData[1].title}
                </h5>
              </div>
            </div>
        </div>
        <div>
            <div className="flex items-center">
              <div className="flex justify-center items-center" style={{border: "0.8px solid #d0d0e1", borderRadius: "100%", width: "50px", height: "50px", boxShadow: "0px 0px 10px #d0d0e1"}}>
                {statsData[2].iconSvg}
              </div>
              <div className="px-5">
                <h6 className="text-secondary text-xs font-light">
                    {statsData[2].subtitle}
                </h6>
                <h5 className="text-primary text-base font-normal">
                    {statsData[2].title}
                </h5>
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}
