import "./Home.scss";
import img01 from "../../assets/banner-img.png";
import img02 from "../../assets/Payment-Method-Transparent.png";
import img03 from "../../assets/laptops.png";

import Banner from "./Banner/Banner";
import Category from "../Category/Category";
import Products from "../Products/Products";

const Home = () => {
    return (<div className="home">
        <div className="slides">
        <Banner title="SCALE" description="Buy product from our store and get a flat discount upto 30%. " image={img01} />
        <Banner title="Payment" description="We accept different payment method and We Value good customer experience" image={img02} width="400px"/>
        <Banner title="Laptops" description="We make sure that the product, we sell are in good shape and is accourding to the advertisement" image={img03} />
        </div>
        <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products />
                </div>
        </div>
    </div>);

};

export default Home;
 