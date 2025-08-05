import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Cart Page Content */}
      <div className="w-full min-h-screen bg-[#E8E6DE] pt-[111px] pb-20 px-4">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[#503217] text-[48px] sm:text-[60px] md:text-[70px] leading-[1.2] font-medium font-['Poppins'] mb-4">
              Shopping Cart
              <svg className="inline-block ml-3 w-12 h-12 sm:w-15 sm:h-15 md:w-17 md:h-17" viewBox="0 0 24 24" fill="none" stroke="#503217" strokeWidth="2">
                <path d="M6 2l1.5 4h9L18 2" />
                <path d="M3 6h18l-1.5 14h-15L3 6z" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </h1>
            <p className="text-[#503217] text-[18px] sm:text-[20px] leading-[1.5] font-normal">
              Review your selected items and proceed to checkout
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16">
              <div className="mb-8">
                <svg className="mx-auto w-24 h-24 text-[#8F7D6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-[#503217] text-[24px] font-medium mb-4">Your cart is empty</h2>
              <p className="text-[#8F7D6A] text-[16px] mb-8">Add some products to get started</p>
              <button 
                onClick={handleContinueShopping}
                className="bg-[#503217] text-white px-8 py-3 rounded-md hover:bg-[#3a2411] transition cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            /* Cart Items */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2">
                <div className="bg-[#F2F2F2] rounded-lg p-4 md:p-6">
                  <h2 className="text-[#503217] text-[20px] md:text-[24px] font-medium mb-4 md:mb-6">Cart Items ({cartItems.length})</h2>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-lg p-4">
                        {/* Mobile Layout */}
                        <div className="md:hidden">
                          {/* Top Row: Image, Name, Remove */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-16 h-16 bg-[#E8E6DE] rounded-lg flex items-center justify-center flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-12 h-12 object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[#503217] text-[16px] font-medium mb-1">{item.name}</h3>
                              <div className="flex items-center gap-2">
                                <span className="text-[#503217] text-[14px] font-medium">${item.price.toFixed(2)}</span>
                                {item.originalPrice && (
                                  <span className="text-[#8F7D6A] text-[12px] line-through">${item.originalPrice.toFixed(2)}</span>
                                )}
                              </div>
                            </div>
                            <button 
                              onClick={() => updateQuantity(item.id, 0)}
                              className="text-[#8F7D6A] hover:text-[#503217] transition p-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          
                          {/* Bottom Row: Quantity and Total */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-[#8F7D6A] text-[14px] mr-2">Qty:</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 bg-[#E8E6DE] rounded-full flex items-center justify-center hover:bg-[#D3D1C9] transition text-[14px]"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-[#503217] font-medium text-[14px]">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 bg-[#E8E6DE] rounded-full flex items-center justify-center hover:bg-[#D3D1C9] transition text-[14px]"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="text-[#503217] text-[16px] font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Desktop Layout - Original */}
                        <div className="hidden md:flex items-center gap-4">
                          {/* Product Image */}
                          <div className="w-20 h-20 bg-[#E8E6DE] rounded-lg flex items-center justify-center flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-1">
                            <h3 className="text-[#503217] text-[18px] font-medium mb-1">{item.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-[#503217] text-[16px] font-medium">${item.price.toFixed(2)}</span>
                              {item.originalPrice && (
                                <span className="text-[#8F7D6A] text-[14px] line-through">${item.originalPrice.toFixed(2)}</span>
                              )}
                            </div>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-[#E8E6DE] rounded-full flex items-center justify-center hover:bg-[#D3D1C9] transition"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-[#503217] font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-[#E8E6DE] rounded-full flex items-center justify-center hover:bg-[#D3D1C9] transition"
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Item Total */}
                          <div className="text-right">
                            <div className="text-[#503217] text-[18px] font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                          
                          {/* Remove Button */}
                          <button 
                            onClick={() => updateQuantity(item.id, 0)}
                            className="text-[#8F7D6A] hover:text-[#503217] transition p-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#F2F2F2] rounded-lg p-4 md:p-6 lg:sticky lg:top-24">
                  <h2 className="text-[#503217] text-[20px] md:text-[24px] font-medium mb-4 md:mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-[#8F7D6A] text-[14px] md:text-[16px]">Subtotal</span>
                      <span className="text-[#503217] font-medium text-[14px] md:text-[16px]">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8F7D6A] text-[14px] md:text-[16px]">Shipping</span>
                      <span className="text-[#503217] font-medium text-[14px] md:text-[16px]">${shipping.toFixed(2)}</span>
                    </div>
                    <hr className="border-[#E8E6DE]" />
                    <div className="flex justify-between">
                      <span className="text-[#503217] font-medium text-[16px] md:text-[18px]">Total</span>
                      <span className="text-[#503217] font-medium text-[16px] md:text-[18px]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#503217] text-white py-2.5 md:py-3 rounded-md hover:bg-[#3a2411] transition cursor-pointer mb-3 md:mb-4 text-[14px] md:text-[16px] font-medium">
                    Proceed to Checkout
                  </button>
                  
                  <button 
                    onClick={handleContinueShopping}
                    className="w-full border border-[#503217] text-[#503217] py-2.5 md:py-3 rounded-md hover:bg-[#503217] hover:text-white transition cursor-pointer text-[14px] md:text-[16px] font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Cart;