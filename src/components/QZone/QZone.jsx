import QZone1 from "../../assets/qZone1.png";
import QZone2 from "../../assets/qZone2.png";
import QZone3 from "../../assets/qZone3.png";
import learnBg from "../../assets/bg.png";

const QZone = () => {
  return (
    <>
      <div className="p-4 bg-slate-100">
        <h2 className="text-2xl font-semibold">Q-Zone</h2>
        <div>
          <img src={QZone1} alt="" />
          <img src={QZone2} alt="" />
          <img src={QZone3} alt="" />
        </div>
      </div>
      <div>
        <div
          className="hero max-h-screen"
          style={{
            backgroundImage:
              `url(${learnBg})`,
          }}
        >
          <div className="hero"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md py-8">
              <h1 className="mb-5 text-4xl font-bold">Create an Amazing Newspaper</h1>
              <p className="mb-5">
              Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
              </p>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QZone;
