import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div
          data-aos="fade-down"
          className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl"
        >
          <div>
            <h1 className="py-10 text-3xl font-bold text-yellow-50 text-center">
              Contact Us
            </h1>
            {/* grid section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
              {/* address section */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <IoLocationSharp className="text-5xl" />
                </div>
                <p>
                  #92, 3rd Main, Virgo Nagar, Post,
                  <br />
                  Seegehalli, Bengaluru, Karnataka 560049
                </p>
              </div>
              {/* emaiil section */}
              <div
                className="text-center
                           space-y-4"
              >
                <div className="flex justify-center">
                  <MdEmail className="text-5xl" />
                </div>
                <div>
                  <p>infogoodfood@gmail.com</p>
                  <p>hrgoodfood@gmail.com</p>
                </div>
              </div>
              {/* number section */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <FaPhone className="text-5xl" />
                </div>
                <div>
                  <p>+89 763452189 - Sales and Services</p>
                  <p>+98 7498762130 - Hiring Queries</p>
                  <p>+98 783478651 - Whatsapp</p>
                </div>
              </div>
            </div>
            {/* copyright section */}
            <div className="flex justify-between p-4 items-center">
              <p>👁‍🗨 2025 HN. All rights reserved</p>
              <div className="flex items-center flex-col">
                <a href="#">Privacy vPolicy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
