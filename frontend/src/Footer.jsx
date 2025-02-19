import React from "react";
import { Link } from "react-router-dom";
import BacktoTop from "./BacktoTop";
const Footer = () => {
  return (
    <>
      <div
        className="Footer flex flex-col items-center text-center pz__15 p-6 md:p-10 "
        style={{
          borderTop: ".3px solid rgba(21,21,21,0.5)",
          backgroundImage: "url('https://www.lorealparis.co.in/-/media/project/loreal/brand-sites/oap/shared/baseline/defaults/footer-images/footer_mobile_dark.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "50vh"
        }}
      >
        <div>
          <h2 className="text-5xl font-bold text-white uppercase">BECAUSE YOU'RE WORTH IT</h2>
          <h3 className="text-xl font-semibold mt-2">Abhishek Enterprises</h3>
        </div>

        <div className="mobile flex justify-start w-full">
          <div className="footer-links grid grid-cols-2 md:grid-cols-2 gap-8 text-left ml-20 ">

            <div>
              <h5 className="font-bold text-white">Account</h5>
              <ul className="space-y-2 ">
                <li className="text-white"><Link to="/login">Log In</Link></li>
                <li className="text-white"><Link to="/register">Sign In</Link></li>
                <li className="text-white"><Link to="/register">Registration</Link></li>
                <li className="text-white"><Link to="/password/forgot">Forgot Password</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white">Follow Us</h5>
              <ul className="space-y-2">
                <li className="text-white"><Link to="/facebook">Facebook</Link></li>
                <li className="text-white"><Link to="/youtube">YouTube</Link></li>
                <li className="text-white"><Link to="/instagram">Instagram</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white">Business</h5>
              <ul className="space-y-2">
                <li className="text-white"><Link to="/creator">Create A Seller Account</Link></li>
                <li className="text-white"><Link to="/seller-rules">Seller Rules</Link></li>
                <li className="text-white"><Link to="/products">View Shop</Link></li>
                <li className="text-white"><Link to="/support">Report Us</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white">Rules</h5>
              <ul className="space-y-2">
                <li className="text-white"><Link to="/faq">FAQ</Link></li>
                <li className="text-white"><Link to="/contact">Contact Us</Link></li>
                <li className="text-white"><Link to="/about">About Us</Link></li>
                <li className="text-white"><Link to="/live-chat">Live Chat</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <BacktoTop />
      </div>
      <div
        className="footer-bottom border-t py-6 text-center text-white bg-black text-xs"
      >
        <div className="flex justify-end space-x-4 flex-wrap mr-10">
          <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms&Condition" className="hover:underline">Terms & Conditions</Link>
          <Link to="/return-refund" className="hover:underline">
          Returns & Refund
          </Link>
          <Link className="text-xs">© 2025 Abhishek Enterprise</Link>
        </div>
      </div>


    </>
  );
};

export default Footer;
