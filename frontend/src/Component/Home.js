import { BiSearch } from "react-icons/bi";
import { TbToolsKitchen2 } from "react-icons/tb";
import {
    FaPizzaSlice
} from "react-icons/fa";
const Home = () => {
    return (
        <div className="home-page">
            <h1><TbToolsKitchen2 />Recipe App</h1>

            <div className="search-bar">
                <span><BiSearch /></span><input type={"text"} />
            </div>

            <div className="add-recipe">
                <button>
                    <p><FaPizzaSlice/></p>
                    <p>New</p>
                </button>
            </div>
            <h2>All recipe</h2>

            <div className="all-recipe-show">
                    <div className="recipe-card">
                            
                    </div>
            </div>

            {/* <img src={image} key={index} alt="logo" /> */}

        </div>
    )
}
export default Home