import moment from "moment/moment";
import logo from "../../assets/logo.png"


const Header = () => {
    return (
        <div className="text-center mt-10">
            <img className="mx-auto" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format('dddd  MMMM  Do YYYY, h:mm:ss a')}</p>
          
        </div>
    );
};

export default Header;