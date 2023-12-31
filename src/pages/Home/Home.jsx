import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Latest from "./Latest";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-3xl">BLog side</h2>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
             </div>
        </div>
    );
};

export default Home;