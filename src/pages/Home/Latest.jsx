import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex bg-slate-100 p-2 rounded-md my-7">
      <button className="btn btn-secondary">Latest</button>
      <Marquee className="" pauseOnHover={true} speed={100}>
        <p className="mr-10">
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p>
          I can be a React component, multiple React components, or just some
          text.
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
