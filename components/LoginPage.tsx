import Link from "next/link";
import { EyeOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#F3F3F3]">
            <Header />

            <section className="flex-1 flex items-center justify-center p-4 md:p-8">
               
                <div className="bg-white p-6 md:p-10 w-full max-w-[450px] shadow-sm border border-gray-100">
                    <h2 className="text-center font-bold text-xl md:text-2xl mb-8 text-black tracking-tight uppercase">
                        Account Login
                    </h2>

                  
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 text-gray-800 uppercase">Account</label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full bg-white p-3 outline-none border border-gray-400 focus:border-red-600 text-sm transition-colors"
                        />
                        <p className="text-[11px] text-gray-500 mt-1 italic">Please enter your email</p>
                    </div>

                 
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2 text-gray-800 uppercase">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-white p-3 outline-none border border-gray-400 focus:border-red-600 text-sm transition-colors"
                            />
                            <EyeOff className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-red-600" size={18} />
                        </div>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-10">
                        <label className="flex items-center text-sm text-gray-800 cursor-pointer">
                            <input type="checkbox" className="mr-2 w-4 h-4 accent-red-600" /> Remember Me
                        </label>
                        <Link href="/forgot-password" virtual-link="true" className="text-sm text-red-600 font-medium hover:underline italic">
                            Forgot your password?
                        </Link>
                    </div>

                    
                    <button className="w-full bg-[#E10012] hover:bg-red-700 text-white font-bold py-4 text-sm uppercase tracking-widest transition-all rounded-tl-2xl rounded-br-2xl shadow-md active:scale-[0.98]">
                        SIGN IN
                    </button>

                    <div className="text-center text-sm mt-8 mb-8">
                        <span className="text-gray-600">Don't Have ASUS Account? </span>
                        <Link href="/signup" className="text-red-600 font-bold hover:underline italic">
                            Sign Up Now
                        </Link>
                    </div>

                    
                    <div className="flex items-center mb-6">
                        <div className="flex-1 h-[1px] bg-gray-200"></div>
                        <span className="px-4 text-[10px] md:text-[12px] text-gray-400 font-medium uppercase tracking-widest">Or Sign In With</span>
                        <div className="flex-1 h-[1px] bg-gray-200"></div>
                    </div>

                    
                    <div className="flex justify-center items-center gap-6 md:gap-8 border border-gray-200 rounded-lg p-5">
                        
                        <button className="hover:scale-110 transition-transform">
                            <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#00A4EF" d="M0 3.449L9.75 2.1V11.4h-9.75zM10.875 1.95L24 0v11.4h-13.125zM0 12.6h9.75v9.3L0 20.551zM10.875 12.6H24V24l-13.125-1.95z" /></svg>
                        </button>
                     
                        <button className="hover:scale-110 transition-transform">
                            <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </button>
                       
                        <button className="hover:scale-110 transition-transform">
                            <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.232-3.32 2.552-6.392 2.552-4.992 0-8.912-4.048-8.912-9.048s3.92-9.048 8.912-9.048c2.704 0 4.752 1.072 6.192 2.48l2.32-2.32C18.104 1.184 15.6 0 12.48 0 5.864 0 0 5.488 0 12.192S5.864 24.384 12.48 24.384c3.568 0 6.28-1.168 8.4-3.392 2.184-2.184 2.872-5.264 2.872-7.672 0-.728-.064-1.416-.184-2.016H12.48z" /></svg>
                        </button>
                       
                        <button className="hover:scale-110 transition-transform">
                            <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#000000" d="M17.057 12.781c.013 2.59 2.149 3.451 2.174 3.461-.021.068-.341 1.171-1.114 2.302-.67 1.01-1.365 1.979-2.433 1.979-1.085 0-1.428-.65-2.67-.65-1.239 0-1.618.63-2.653.63-1.072 0-1.892-1.054-2.546-2.025-1.341-1.956-2.364-5.526-1.012-7.876.671-1.168 1.874-1.91 3.167-1.91 1.037 0 1.957.697 2.572.697.601 0 1.742-.846 2.966-.846.52 0 1.983.189 2.913 1.55-.078.046-1.741.974-1.741 3.038zM14.512 4.148c.553-.668.927-1.602.825-2.528-.8.032-1.761.534-2.332 1.201-.512.59-.956 1.545-.834 2.451.891.069 1.78-.456 2.341-1.124z" /></svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}