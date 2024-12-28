
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";
// import { HiUser } from "react-icons/hi";
// import { CiShoppingCart } from "react-icons/ci";
// import { useSelector } from "react-redux";
// import { useAuth } from "../context/AuthContext";
// import avatarImg from "../assets/avatar.png";

// const navigation = [
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "Orders", href: "/order" },
//   { name: "Cart Page", href: "/cart" },
//   { name: "Check Out", href: "/checkout" },
// ];

// const Timer = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="bg-gray-400 text-gray-800 text-lg font-bold py-2 text-center">
//       Local Time: {time.toLocaleTimeString()}
//     </div>
//   );
// };

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const { currentUser, logout } = useAuth();

//   const handleLogOut = () => {
//     logout();
//   };

//   const  filteredNavigation=currentUser?.role==="admin"
//     ?navigation
//     :navigation.filter((item)=>item.name!="Dashboard");

//   return (
//     <header className="w-full bg-blue-200 px-4 py-2">
//       {/* <div className="text-white bg-primary text-center py-4">
//         <h1 className="text-3xl md:text-4xl font-bold">
//           Welcome to Your Dream Shop – Where Quality Meets Convenience!
//         </h1>
//         <p className="mt-2 text-lg md:text-xl">
//           Discover the Best Deals on Your Favorite Products! Explore, Shop, and Enjoy – Your Ultimate Shopping Destination!
//         </p>
//         <p className="mt-2 text-lg md:text-xl">
//           Shop the Latest Trends, Delivered Right to Your Door!
//         </p>
//         <p className="mt-2 text-lg md:text-xl font-semibold">
//           Unbeatable Offers Await – Start Shopping Today!
//         </p>
//       </div>

//       <Timer /> */}

//       <nav className="flex justify-between items-center mt-4">
//         {/* Left Section */}
//         <div className="flex items-center gap-4">
//           <Link to="/">
//             <FaBars className="text-gray-700 text-xl" />
//           </Link>
//           {/* <div className="relative w-full max-w-xs">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search here"
//               className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div> */}
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {currentUser ? (
//             <div className="relative">
//               <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//                 <img
//                   src={avatarImg}
//                   alt="User Avatar"
//                   className="w-8 h-8 rounded-full ring-2 ring-blue-500"
//                 />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                   <ul className="py-2">
//                     {navigation.map((item) => (
//                       <li key={item.name}>
//                         <Link
//                           to={item.href}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                     <li>
//                       <button
//                         onClick={handleLogOut}
//                         className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100"
//                       >
//                         Logout
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to="/login">
//               <HiUser className="text-gray-700 text-xl" />
//             </Link>
//           )}

//           {/* <Link to="/favorites">
//             <FaRegHeart className="text-gray-700 text-xl" />
//           </Link> */}
//           <Link
//             to="/cart"
//             className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             <CiShoppingCart className="mr-2" />
//             <span>{cartItems.length || 0}</span>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { HiUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import avatarImg from "../assets/avatar.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };
  console.log("Current User:", currentUser);

  const filteredNavigation =
    currentUser?.role === "admin"
      ? navigation
      : navigation.filter((item) => item.name !== "Dashboard");

  return (
    <header className="w-full bg-blue-200 px-4 py-2">
      <nav className="flex justify-between items-center mt-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <FaBars className="text-gray-700 text-xl" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatarImg}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full ring-2 ring-blue-500"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                  <ul className="py-2">
                    {filteredNavigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <HiUser className="text-gray-700 text-xl" />
            </Link>
          )}

          <Link
            to="/cart"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            <CiShoppingCart className="mr-2" />
            <span>{cartItems.length || 0}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
