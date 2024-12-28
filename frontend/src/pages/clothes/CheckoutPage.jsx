import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCreateOrderMutation } from "../../redux/features/orders/ordersApi";
import Swal from "sweetalert2";


const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const currentUser = useSelector((state) => state.user?.currentUser);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const {currentUser}=useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const[createOrder,{isLoading,error}]=useCreateOrderMutation()
  const navigate=useNavigate()

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async(data) => {
    // console.log("Form Data:", data);
    const newOrder={
        name:data.name,
        email: currentUser?.email,
        address:{
            city:data.city,
            country:data.country,
            state:data.state,
            zipcode:data.zipcode
        },

        phone:data.phone,
        productIds: cartItems.map(item => item._id),
        totalPrice:totalPrice,
    }
    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: "Confirm order?",
        text: "Order placed successfully!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, OK!"
      });
      navigate("/orders")
    } catch (error) {
      console.error("Error to place order",error);
      alert("Failed to place order")
    }
  };

  if(isLoading)return <div>Loading....</div>
  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">
              Cash On Delivery
            </h2>
            <p className="text-gray-500 mb-2">Total Price: Tk{totalPrice}</p>
            <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    {/* Full Name */}
                    <div className="md:col-span-5">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        {...register("name", { required: "Full Name is required" })}
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        {...register("email", { required: "Email is required" })}
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                  
                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        {...register("phone", { required: "Phone Number is required" })}
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="+123 456 7890"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Address */}
                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        {...register("address", { required: "Address is required" })}
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    {/* City */}
                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        {...register("city", { required: "City is required" })}
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                      )}
                    </div>

                    {/* Country */}
                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <input
                        type="text"
                        {...register("country", { required: "Country is required" })}
                        id="country"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                      )}
                    </div>

                    {/* State
                    <div className="md:col-span-2">
                      <label htmlFor="state">State / Province</label>
                      <input
                        type="text"
                        {...register("state", { required: "State is required" })}
                        id="state"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.state && (
                        <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
                      )}
                    </div>

                    {/* Zipcode */}
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        {...register("zipcode", { required: "Zipcode is required" })}
                        id="zipcode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.zipcode && (
                        <p className="text-red-500 text-xs mt-1">{errors.zipcode.message}</p>
                      )}
                    </div> 

                    {/* Terms & Conditions */}
                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          onChange={() => setIsChecked(!isChecked)}
                          id="billing_same"
                          className="form-checkbox"
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          I agree to the{" "}
                          <Link className="underline underline-offset-2 text-blue-600">
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link className="underline underline-offset-2 text-blue-600">
                            Shopping Policy
                          </Link>
                          .
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-5 text-right">
                      <button
                        type="submit"
                        disabled={!isChecked}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;










// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const CheckoutPage = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const totalPrice = cartItems
//     .reduce((acc, item) => acc + item.newPrice, 0)
//     .toFixed(2);

//   const currentUser = true;
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const [isChecked, setIsChecked] = useState(false);
//   const onSubmit = (data) => console.log("Form Data:", data);

//   return (
//     <section>
//       <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
//         <div className="container max-w-screen-lg mx-auto">
//           <div>
//             <div>
//               <h2 className="font-semibold text-xl text-gray-600 mb-2">
//                 Cash On Delivery
//               </h2>
//               <p className="text-gray-500 mb-2">Total Price: $0</p>
//               <p className="text-gray-500 mb-6">Items:0</p>
//             </div>

//             <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//               <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
//               >
//                 <div className="text-gray-600">
//                   <p className="font-medium text-lg">Personal Details</p>
//                   <p>Please fill out all the fields.</p>
//                 </div>

//                 <div className="lg:col-span-2">
//                   <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                     <div className="md:col-span-5">
//                       <label htmlFor="full_name">Full Name</label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                       />
//                     </div>

//                     <div className="md:col-span-5">
//                       <label html="email">Email Address</label>
//                       <input
//                         type="text"
//                         name="email"
//                         id="email"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         disabled
//                         defaultValue={currentUser?.email}
//                         placeholder="email@domain.com"
//                       />
//                     </div>
//                     <div className="md:col-span-5">
//                       <label html="phone">Phone Number</label>
//                       <input
//                         type="number"
//                         name="phone"
//                         id="phone"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         placeholder="+123 456 7890"
//                       />
//                     </div>

//                     <div className="md:col-span-3">
//                       <label htmlFor="address">Address / Street</label>
//                       <input
//                         type="text"
//                         name="address"
//                         id="address"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         placeholder=""
//                       />
//                     </div>

//                     <div className="md:col-span-2">
//                       <label htmlFor="city">City</label>
//                       <input
//                         type="text"
//                         name="city"
//                         id="city"
//                         className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         placeholder=""
//                       />
//                     </div>

//                     <div className="md:col-span-2">
//                       <label htmlFor="country">Country / region</label>
//                       <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                         <input
//                           name="country"
//                           id="country"
//                           placeholder="Country"
//                           className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
//                         />
//                         <button
//                           tabIndex="-1"
//                           className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
//                         >
//                           <svg
//                             className="w-4 h-4 mx-2 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                           </svg>
//                         </button>
//                         <button
//                           tabIndex="-1"
//                           className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
//                         >
//                           <svg
//                             className="w-4 h-4 mx-2 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <polyline points="18 15 12 9 6 15"></polyline>
//                           </svg>
//                         </button>
//                       </div>
//                     </div>

//                     <div className="md:col-span-2">
//                       <label htmlFor="state">State / province</label>
//                       <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                         <input
//                           name="state"
//                           id="state"
//                           placeholder="State"
//                           className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
//                         />
//                         <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
//                           <svg
//                             className="w-4 h-4 mx-2 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                           </svg>
//                         </button>
//                         <button
//                           tabIndex="-1"
//                           className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
//                         >
//                           <svg
//                             className="w-4 h-4 mx-2 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <polyline points="18 15 12 9 6 15"></polyline>
//                           </svg>
//                         </button>
//                       </div>
//                     </div>

//                     <div className="md:col-span-1">
//                       <label htmlFor="zipcode">Zipcode</label>
//                       <input
//                         type="text"
//                         name="zipcode"
//                         id="zipcode"
//                         className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                         placeholder=""
//                       />
//                     </div>

//                     <div className="md:col-span-5 mt-3">
//                       <div className="inline-flex items-center">
//                         <input
//                           type="checkbox"
//                           name="billing_same"
//                           id="billing_same"
//                           className="form-checkbox"
//                         />
//                         <label htmlFor="billing_same" className="ml-2 ">
//                           I am aggree to the{" "}
//                           <Link className="underline underline-offset-2 text-blue-600">
//                             Terms & Conditions
//                           </Link>{" "}
//                           and{" "}
//                           <Link className="underline underline-offset-2 text-blue-600">
//                             Shoping Policy.
//                           </Link>
//                         </label>
//                       </div>
//                     </div>

//                     <div className="md:col-span-5 text-right">
//                       <div className="inline-flex items-end">
//                         <button
//                           disabled={!isChecked}
//                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         >
//                           Place an Order
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CheckoutPage;