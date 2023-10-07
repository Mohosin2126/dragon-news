import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="mt-10 flex gap-2 items-center" >
            <button className="btn btn-warning btn-md ">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">Welcome to dragon news, breaking news you are here </Link>
                <Link className="mr-12" to="/">Welcome to dragon news, breaking news you are here </Link>
                
                <Link className="mr-12" to="/">Welcome to dragon news, breaking news you are here </Link>
                

                
            </Marquee>
        </div>
    );
};

export default BreakingNews;