import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/abhishek bg.png";
// import bg2 from "../../Assets/background2.jpg";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";
import { Box } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RecyclingIcon from "@mui/icons-material/Recycling";
import cosmetic from "../../Assets/1.png";
import cosmetic2 from "../../Assets/cosmetic2.jpg";
import shoes from "../../Assets/shoes.webp";
import shoes2 from "../../Assets/shoes 2.jpeg";

const recommendationSection = [
  {
    id: 1,
    title: "Iphone 14",
    desc: "Juicy, farm-fresh fruits delivered straight from the orchard to you.",
    bgImage:
      "https://arunenterprise.com/wp-content/uploads/2024/08/pexels-rovenimages-com-344613-949590-scaled.jpg",
  },
  {
    id: 2,
    title: "Iphone 15",
    desc: "Naturally grown, farm-fresh vegetables for healthy meals and vibrant flavors.",
    bgImage:
      "https://arunenterprise.com/wp-content/uploads/2024/08/pexels-zaktech90-1027130-300x300.jpg",
  },
  {
    id: 3,
    title: "Iphone 16",
    desc: "Wholesome, sustainable organic legumes for healthy and eco-friendly meals.",
    bgImage:
      "https://arunenterprise.com/wp-content/uploads/2024/08/3-300x300.webp",
  },
];

const categories = [
  {
    id: 1,
    image: cosmetic,
  },
  {
    id: 2,
    image: cosmetic2,
  },
  {
    id: 3,
    image: shoes,
  },
  {
    id: 4,
    image: shoes2,
  },
];

const RecommendationCard = ({ content }) => {
  return (
    <div className="relative h-[366px] p-0 rounded-lg overflow-hidden shadow-lg group">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg transition-transform duration-500"
        style={{
          backgroundImage: `url(${content.bgImage})`,
          backgroundColor: "#ffffff",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white bg-opacity-90 p-6 rounded-b-lg">
        <h3 className="text-2xl font-bold text-gray-800">{content.title}</h3>
        <button
          type="submit"
          className="w-full h-12 border-none bg-green-500 text-white cursor-pointer flex items-center justify-center gap-2.5 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          <FaShoppingCart size={20} />
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Home" />
          <Header />
          {/* Carousel */}
          <div className="banner">
            <Carousel>
              <img src={bg} className="bgImg" />
              {/* <img src={bg2} className="bgImg" /> */}
            </Carousel>
            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "15rem",
                  marginRight: "15rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Segoe Script",
                    fontSize: "3em",
                    fontWeight: "500",
                  }}
                >
                  Buy 2 Get
                </h2>
                <span
                  style={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    margin: "0px 10px",
                    textAlign: "center",
                    width: "150px",
                    height: "40px",
                    color: "#26c",
                    fontFamily: "Segoe Script",
                    fontSize: "2.4em",
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: ".7",
                    alignItems: "center",
                  }}
                >
                  1 Free
                </span>
              </div>
              <div
                style={{
                  marginRight: "20rem",
               
                }}
              >
                <div>
                  <h2
                    style={{
                      fontWeight: "400",
                      fontFamily: "Poppins,sans-serif",
                      color: "#111",
                      fontSize: "1em",
                      paddingTop: "10px",
                    }}
                  >
                    Get Free Shipping on all orders over $99.00
                  </h2>
                </div>
                {/* <FaShoppingCart size={24} /> */}

                <button class="btn btn3">View More</button>
              </div>
            </div>
          </div>
          {/* Features section starts here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-black rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 cursor-pointer mt-20">
            {/* Feature Cards */}
            <div className="flex items-center bg-gray-800 text-white p-10 rounded-lg">
              <LocalShippingIcon className="text-lime-500 text-[2.5rem] mr-3" />
              <div>
                <h4 className="font-semibold text-xl">Free Shipping*</h4>
                <p className="text-sm">Above Rs. 1000 only</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-800 text-white p-6 rounded-lg">
              <VerifiedUserIcon className="text-lime-500 text-[2rem] mr-3" />
              <div>
                <h4 className="font-semibold text-xl">Certified Enterprise</h4>
                <p className="text-sm">100% Guarantee</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-800 text-white p-6 rounded-lg">
              <LocalAtmIcon className="text-lime-500 text-[2.5rem] mr-3" />
              <div>
                <h4 className="font-semibold text-xl">Huge Savings</h4>
                <p className="text-sm">At Lowest Price</p>
              </div>
            </div>

            <div className="flex items-center bg-gray-800 text-white p-6 rounded-lg">
              <RecyclingIcon className="text-lime-500 text-[2.5rem] mr-3" />
              <div>
                <h4 className="font-semibold text-xl">Easy Returns</h4>
                <p className="text-sm">No Questions Asked</p>
              </div>
            </div>
          </div>

          {/* Features section ends here */}
          <h2 className="homeHeading text-black  font-bold terx-5xl  ">
            Best Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="text-center mb-8">
              <h2 className="text-4xl  text-black tracking-wider font-medium ">
                SHOP BY CATEGORY
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-90 "
                  />
                </div>
              ))}
            </div>
          </section>
          <h2 className="text-black text-4xl flex justify-center items-center  tracking-wider font-medium">
            BUDGET FRIENDLY DEALS
          </h2>
          <div className="py-24 bg-[#f8f6f3] lg:mt-10">
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {recommendationSection.map((content) => (
                <RecommendationCard key={content.id} content={content} />
              ))}
            </div>
          </div>
          <Box bgcolor={"#000000"} py={"60px"}>
            <Box
              maxWidth={"1100px"}
              mx={"auto"}
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <div
                className="text-white text-5xl font-semibold"
                color={"#ffffff"}
              >
                Get 25% Off On Your First Purchase!
              </div>

              <button
                type="submit"
                className="w-40 h-16 border-none bg-green-500 my-2 text-white cursor-pointer flex items-center justify-center gap-2.5 rounded-md shadow-md hover:bg-green-600 transition duration-300"
              >
                <FaShoppingCart size={24} />
                SHOP NOW
              </button>
            </Box>
          </Box>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
