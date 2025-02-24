import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
              {/* heeader section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-dark">Login</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setShowPopup(false )}
                  />
                </div>
              </div>
              {/* Login form section */}
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                />
                {/* login button section */}
                <div>
                  <button
                    className="w-full bg-primary text-white p-2 rounded-md"
                    onClick={() => setShowPopup(false)}
                  >
                    Login
                  </button>
                </div>
                {/* social login */}
                <div className="mt-4">
                  <p className="text-center">or login with</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <FaFacebook className="text-3xl hover:text-blue-500 duration-200" />
                    <FaGoogle className="text-3xl hover:text-primary duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
 