import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div className="counter-section" ref={ref}>
      
      <div className="counter-box">
        <div className="counter-wrap">
            <div className="first-counter">
                <h2>
                  {inView && <CountUp start={0} end={15} duration={3} />}Y
               </h2>
            </div>
            <div className="plus">+</div>
        </div>
        <p>Years of Experience</p>
      </div>

      <div className="counter-box">
        <div className="counter-wrap">
            <div className="first-counter">
                <h2>
                  {inView && <CountUp start={0} end={1256} duration={3} />}
                </h2>
            </div>
            <div className="plus">+</div>
        </div>
        <p>Number of Clients Served</p>
      </div>

      <div className="counter-box">
        <div className="counter-wrap">
            <div className="first-counter">
                <h2>
                   {inView && <CountUp start={0} end={88} duration={3} />}%
                </h2>
            </div>
            <div className="plus">+</div>
        </div>
        <p>Therapy Success Rate</p>
      </div>

      <div className="counter-box">
        <div className="counter-wrap">
            <div className="first-counter">
                <h2>
                  {inView && <CountUp start={0} end={98} duration={3} />}%
                </h2>
            </div>
            <div className="plus">+</div>
        </div>
        <p>Positive Reviews</p>
      </div>

    </div>
  );
};

export default Stats;