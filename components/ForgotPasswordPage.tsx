"use client"; 

import Header from "./Header";
import Footer from "./Footer";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <section className="flex-1 flex items-center justify-center p-4 md:p-10">
        <div className="bg-white p-8 md:p-12 w-full max-w-[550px] shadow-sm flex flex-col items-center">
          
          <h1 className="text-2xl font-bold text-black mb-2 uppercase tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-sm text-gray-600 text-center mb-8">
            Please enter the email account you first used to register.
          </p>

          <div className="mb-8">
             <div className="relative w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                <span className="text-4xl opacity-80">🔒</span>
                <div className="absolute bottom-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                  ?
                </div>
             </div>
          </div>

          <div className="w-full space-y-1">
            <label className="text-sm font-bold text-black block uppercase">Account</label>
            <input 
              type="email"
              placeholder="Email"
              className="w-full bg-white p-3 outline-none border border-gray-300 focus:border-red-600 transition-colors text-sm"
            />
            <p className="text-[11px] text-gray-400 pt-1 italic">Please enter your email</p>
          </div>

          <hr className="w-full border-gray-200 my-8" />

          <p className="text-[12px] text-gray-500 text-center px-2 mb-8 leading-relaxed">
            If you are using a social media account (e.g. Facebook or Google+) to log in, 
            please use the email account you used to register for the social media account. 
            We will send a verification email to your inbox.
          </p>

          
          <button className="w-full md:w-2/3 bg-red-600 hover:bg-red-700 text-white font-bold py-3 uppercase tracking-widest transition-all rounded-tl-xl rounded-br-xl shadow-md">
           Continue
          </button>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}