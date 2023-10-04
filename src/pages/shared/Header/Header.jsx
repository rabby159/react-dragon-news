import logo from "../.././../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex justify-center my-3">
          <img src={logo} alt="" />
        </div>
        <div className="text-center text-xl">
          <p className=" text-slate-500">
            Journalism Without Fear or Favour
          </p>
          <p>
            {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
