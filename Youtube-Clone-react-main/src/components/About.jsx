import React from "react";

const About = () => {
  return (
    <div className="w-full h-[calc(100%-56px)] bg-[#121212] text-white flex flex-col items-center justify-center px-6 md:px-14 text-center">
      <div className="text-xl mb-2">About</div>I am a full-stack MERN developer
      with a passion for building beautiful and functional websites and web
      applications. I have experience working with the MERN stack (MongoDB,
      Express.js, React, and Node.js) and am skilled in both front-end and
      back-end web development. I am a creative problem-solver and quick
      learner, always eager to stay updated with the latest technologies and
      trends in the industry. Let's Talk
      <a href="https://github.com/iambasilp" className="my-4 px-4 py-2 bg-red-800 rounded-sm">Github</a>
    </div>
    
  );
};

export default About;
