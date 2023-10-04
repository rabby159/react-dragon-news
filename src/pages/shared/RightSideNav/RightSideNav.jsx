import FindOnUs from "../../../components/FindOnUs/FindOnUs";
import LoginWith from "../../../components/LoginWith/LoginWith";
import QZone from "../../../components/QZone/QZone";


const RightSideNav = () => {
    return (
        <div>
           <LoginWith></LoginWith>
           <FindOnUs></FindOnUs>
           <QZone></QZone>
        </div>
    );
};

export default RightSideNav;