
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideNews from "../../../components/LeftSideNews/LeftSideNews";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="p-3">
            <h2 className="font-semibold mb-5">All Category</h2>
            <h2 className="bg-slate-100 p-5 rounded-md text-center font-bold">National News</h2>
            {
                categories?.map(category=> <Link key={category.id} className="block pl-12 py-4" to={`/category/${category.id}`}>{category.name}</Link>)
            }
            <LeftSideNews></LeftSideNews>
        </div>
    );
};

export default LeftSideNav;