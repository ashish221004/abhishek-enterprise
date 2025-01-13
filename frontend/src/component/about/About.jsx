import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import BottomTab from "../../more/BottomTab";
import image from "../../Assets/about img.jpg";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaUserShield } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { BiConversation } from "react-icons/bi";
const About = () => {
  const { loading } = useSelector((state) => state.profile);
  const features = [
    {
      icon: "% ",
      title: "Season Sale",
      description: "Get ready to refresh your wardrobe and beauty routine with our biggest seasonal sale of the year!"
    },
    {
      icon: <CiDeliveryTruck />,
      title: "Free Shipping",
      description: "Shopping just got even better with our exclusive free shipping offer! No minimum purchase required – simply shop your favorite items and we'll deliver them straight to your door at no extra cost."
    },
    {
      icon: <FaUserShield />,
      title: "Money Back Guarantee",
      description: "Your satisfaction is our top priority. That's why we offer a 100% Money-Back Guarantee on all purchases."
    }
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                <div className="w-full">
                  <div
                    className="w-full h-48 relative flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-cyan-600/80"></div>

                    <h1 className="text-white text-6xl font-semibold relative z-10">
                      About
                    </h1>
                  </div>

                  <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="text-cyan-500 mb-4">
                      Helping You Look Good
                    </div>

                    <h2 className="text-4xl font-bold ">
                      Let's Talk about Beauty
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 mb-6">
                            Welcome to Abhishek Enterprises, where style meets
                            sophistication and quality intertwines with
                            innovation. Founded in 2022, we have been dedicated
                            to providing our customers with exceptional shoes
                            and cosmetics that not only enhance their appearance
                            but also boost their confidence and express their
                            unique personalities.
                          </p>

                          <p className="text-gray-700 mb-8">
                            At Abhishek Enterprises, we believe that fashion and
                            beauty are powerful forms of self-expression. Our
                            diverse range of products is thoughtfully designed
                            and meticulously crafted to cater to the dynamic
                            lifestyles and evolving tastes of our global
                            clientele. From elegant footwear that complements
                            every occasion to luxurious cosmetics that celebrate
                            natural beauty, we are committed to delivering
                            excellence in every product we offer.
                          </p>

                          <div className="mt-8">
                            <h3 className="text-xl font-semibold text-cyan-600 mb-4">
                              Features of Our Services
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  <span>Quality Excellence</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  <span>Innovation</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  <span>Customer Satisfaction</span>
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  <span>Superior Comfort</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  <span>Diversity & Inclusion</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                  <span>Sustainability</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="bg-purple-700 rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt="Happy customer with shopping bags"
                            className="w-full h-[35rem] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <GiPriceTag className="text-8xl text-cyan-500" />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <GrNotes className="text-8xl text-cyan-500" />

                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <BiConversation  className="text-8xl text-cyan-500"/>
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white py-12 px-4">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center text-center p-6"
                        >
                          <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-cyan-100">
                            <span className="text-5xl text-cyan-500">{feature.icon}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-800">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default About;
