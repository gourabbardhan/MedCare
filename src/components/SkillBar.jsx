import React, { useEffect, useState } from 'react'

const SkillBar = () => {

   const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const timer = setInterval(() => {
      count++;

      if (count >= 97) {
        count = 97;
        clearInterval(timer);
      }

      setProgress(count);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      
     <div className="skill-box">

      <div className="skill-wrap">
        <span
          className="skill-percent"
          style={{ left: `calc(${progress}% - 20px)` }}
        >
          {progress}%
        </span>

        <div className="skill-bar">
          <div
            className="skill-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>

    </>
  )
}

export default SkillBar
