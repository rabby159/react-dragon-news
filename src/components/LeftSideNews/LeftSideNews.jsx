import png1 from '../../assets/1.png'
import png2 from '../../assets/2.png'
import png3 from '../../assets/3.png'
import moment from "moment";

const LeftSideNews = () => {
  return (
    <div className='space-y-10'>
      <div className="card">
        <figure>
          <img
            src={png1}
            alt="img"
          />
        </figure>
        <div className="pt-3">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
          <div className='flex justify-between text-lg font-medium pt-2'>
            <h3>Sports</h3>
            <p>
            {moment().format("MMM D, YYYY")}
          </p>
          </div>
        </div>
      </div>
      <div className="card">
        <figure>
          <img
            src={png2}
            alt="img"
          />
        </figure>
        <div className="pt-3">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
          <div className='flex justify-between text-lg font-medium pt-2'>
            <h3>Sports</h3>
            <p>
            {moment().format("MMM D, YYYY")}
          </p>
          </div>
        </div>
      </div>
      <div className="card">
        <figure>
          <img
            src={png3}
            alt="img"
          />
        </figure>
        <div className="pt-3">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
          <div className='flex justify-between text-lg font-medium pt-2'>
            <h3>Sports</h3>
            <p>
            {moment().format("MMM D, YYYY")}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNews;
