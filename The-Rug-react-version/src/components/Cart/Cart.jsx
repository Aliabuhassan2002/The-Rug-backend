import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../ProductSlice";
import { Minus, Plus, ShoppingBag, CreditCard, Truck } from 'lucide-react';

function Cart() {
      const cartt=useSelector((state)=>state.product.cart);
      console.log(cartt);
      
  return (
//   <div className="font-sans max-w-4xl mx-auto p-4 pt-35">
//   <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>

//   {/* الحاوية الرئيسية لجعل العناصر بجانب بعض */}
//   <div className="flex flex-col md:flex-row gap-4 mt-8">
    
//     {/* صندوق المنتجات */}
//     <div className="md:w-2/3 space-y-4">
//       {cartt.map((c) => (
//         <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-md">
//           <div className="flex gap-4">
//             <div className="w-28 h-28 shrink-0">
//               <img src="https://readymadeui.com/images/watch1.webp" className="w-full h-full object-contain" />
//             </div>
//             <div className="flex flex-col gap-4">
//               <h3 className="text-sm sm:text-base font-bold text-gray-800">{c.name}</h3>
//               <p className="text-sm font-semibold text-gray-500 flex items-center gap-2">
//                 Color: <span className="inline-block w-5 h-5 rounded-md bg-[#ac7f48]"></span>
//               </p>
//               <div className="flex items-center gap-3">
//                 <button className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">-</button>
//                 <span className="font-bold text-sm">2</span>
//                 <button className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">+</button>
//               </div>
//             </div>
//           </div>
//           <h3 className="text-sm sm:text-base font-bold text-gray-800 ml-auto">{c.price}</h3>
//         </div>
//       ))}
//     </div>

//     {/* صندوق الدفع */}
//     <div className="md:w-1/3 bg-white p-6 rounded-md shadow-md">
//       <h2 className="text-lg font-bold text-gray-800">Payment Summary</h2>
//       <div className="flex justify-between mt-4">
//         <span>Subtotal:</span>
//         <span className="font-bold">$200.00</span>
//       </div>
//       <div className="flex justify-between mt-2">
//         <span>Tax:</span>
//         <span className="font-bold">$20.00</span>
//       </div>
//       <div className="flex justify-between mt-2 border-t pt-2">
//         <span>Total:</span>
//         <span className="font-bold">$220.00</span>
//       </div>
//       <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">Checkout</button>
//     </div>

//   </div>
// </div>
 <div className="min-h-screen bg-[#fbe7c6]/20 pt-35">
      <div className="max-w-7xl mx-auto p-6 pt-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-[#d4a373]" />
          <h1 className="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="lg:w-2/3 space-y-6">
            {cartt.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="flex gap-6 p-6">
                  <div className="w-32 h-32 rounded-lg overflow-hidden bg-[#fbe7c6]/30">
                    <img 
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4 flex items-center gap-2">
                      Color: <span className="inline-block w-6 h-6 rounded-full bg-[#d4a373]"></span>
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-full bg-[#fbe7c6] hover:bg-[#d4a373] transition-colors duration-300">
                        <Minus className="w-4 h-4 text-gray-700" />
                      </button>
                      <span className="font-bold text-lg">2</span>
                      <button className="p-2 rounded-full bg-[#fbe7c6] hover:bg-[#d4a373] transition-colors duration-300">
                        <Plus className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-800">{`${item.price}JD`}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-[#d4a373]" />
                Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-lg">$249.98</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Shipping</span>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#d4a373]" />
                    <span className="font-bold text-lg">Free</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-bold text-lg">$25.00</span>
                </div>
              </div>

              <div className="bg-[#fbe7c6]/30 p-6 rounded-lg mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-gray-800">$274.98</span>
                </div>
              </div>

              <button className="w-full bg-[#d4a373] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#ab815c] hover:shadow-lg transform hover:-translate-y-1">
                Proceed to Checkout
              </button>

              <p className="text-center text-gray-500 mt-6 text-sm">
                Free shipping on all orders over $200
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart