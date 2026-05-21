"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignupPage() {

    const [showPass, setShowPass] = useState(false);
    const [showRePass, setShowRePass] = useState(false);


    const [agreeAll, setAgreeAll] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);


    const handleAgreeAll = () => {
        const newState = !agreeAll;
        setAgreeAll(newState);
        setCheck1(newState);
        setCheck2(newState);
        setCheck3(newState);
        setCheck4(newState);
    };

    const years = Array.from({ length: 50 }, (_, i) => (2026 - i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

    return (
        <main className="min-h-screen flex flex-col bg-[#F3F3F3] text-gray-800">
            <Header />

            <section className="flex-1 flex items-center justify-center py-12 px-4">
                <div className="bg-white p-10 w-full max-w-[750px] shadow-sm border border-gray-100">
                    <h2 className="text-center font-bold text-2xl mb-2 text-black uppercase">Sign Up Now</h2>


                    <p className="text-center text-[11px] text-gray-500 mb-6">
                        Please note that ASUS account is same as ROG account. If you have either account, you can{" "}
                        <Link
                            href="/"
                            className="text-red-500 font-bold hover:underline italic cursor-pointer"
                        >
                            log in
                        </Link> directly without registering a new one.
                    </p>


                    <div className="bg-[#F8F8F8] border border-gray-100 p-4 mb-8">
                        <p className="text-center text-[10px] text-gray-600 leading-relaxed italic">
                            *Reminder: Choosing the 'Hide my email' option when using an Apple ID or Facebook account may result in missed notifications of exclusive offers and critical updates.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                        <SocialBtn label="Sign up with"><svg width="14" height="14" viewBox="0 0 24 24"><path fill="#00A4EF" d="M0 3.449L9.75 2.1V11.4h-9.75zM10.875 1.95L24 0v11.4h-13.125zM0 12.6h9.75v9.3L0 20.551zM10.875 12.6H24V24l-13.125-1.95z" /></svg></SocialBtn>
                        <SocialBtn label="Sign up with"><svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></SocialBtn>
                        <SocialBtn label="Sign up with"><svg width="14" height="14" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.232-3.32 2.552-6.392 2.552-4.992 0-8.912-4.048-8.912-9.048s3.92-9.048 8.912-9.048c2.704 0 4.752 1.072 6.192 2.48l2.32-2.32C18.104 1.184 15.6 0 12.48 0 5.864 0 0 5.488 0 12.192S5.864 24.384 12.48 24.384c3.568 0 6.28-1.168 8.4-3.392 2.184-2.184 2.872-5.264 2.872-7.672 0-.728-.064-1.416-.184-2.016H12.48z" /></svg></SocialBtn>
                        <SocialBtn label="Sign up with"><svg width="14" height="14" viewBox="0 0 24 24" fill="#000"><path d="M17.057 12.781c.013 2.59 2.149 3.451 2.174 3.461-.021.068-.341 1.171-1.114 2.302-.67 1.01-1.365 1.979-2.433 1.979-1.085 0-1.428-.65-2.67-.65-1.239 0-1.618.63-2.653.63-1.072 0-1.892-1.054-2.546-2.025-1.341-1.956-2.364-5.526-1.012-7.876.671-1.168 1.874-1.91 3.167-1.91 1.037 0 1.957.697 2.572.697.601 0 1.742-.846 2.966-.846.52 0 1.983.189 2.913 1.55-.078.046-1.741.974-1.741 3.038zM14.512 4.148c.553-.668.927-1.602.825-2.528-.8.032-1.761.534-2.332 1.201-.512.59-.956 1.545-.834 2.451.891.069 1.78-.456 2.341-1.124z" /></svg></SocialBtn>
                    </div>

                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="px-4 text-[11px] text-gray-400 font-medium">Or Sign In With</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    <form className="space-y-6">

                        <div>
                            <label className="block text-xs font-bold italic text-gray-700">* Account</label>
                            <input type="text" className="w-full border border-gray-400 p-2 text-sm focus:border-black outline-none" />
                            <p className="text-[10px] text-gray-400 mt-1 italic">Please enter your email</p>
                        </div>


                        <div>
                            <label className="block text-xs font-bold italic text-gray-700">* Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    className="w-full border border-gray-400 p-2 pr-10 text-xs focus:border-black outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-2.5 text-gray-400 hover:text-black"
                                >
                                    {showPass ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                            <p className="text-[9px] text-gray-400 mt-1 leading-tight">
                                Combination of 8~25 (upper/lowercase) letters, numbers, and symbols without space. <br />
                                <span className="text-blue-500 hover:underline cursor-pointer font-bold">Password Guide</span>
                            </p>
                        </div>


                        <div>
                            <label className="block text-xs font-bold italic text-gray-700">* Re-enter Password</label>
                            <div className="relative">
                                <input
                                    type={showRePass ? "text" : "password"}
                                    className="w-full border border-gray-400 p-2 pr-10 text-xs focus:border-black outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowRePass(!showRePass)}
                                    className="absolute right-3 top-2.5 text-gray-400 hover:text-black"
                                >
                                    {showRePass ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1 italic">Input your password again.</p>
                        </div>


                        <div>
                            <label className="block text-xs font-bold mb-2 text-gray-700 uppercase">Date of Birth:</label>
                            <div className="flex">
                                <InteractiveDOB label="Year" options={years} />
                                <InteractiveDOB label="Month" options={months} />
                                <InteractiveDOB label="Day" options={days} />
                            </div>
                        </div>


                        <div className="space-y-3 pt-6 border-t border-gray-100">
                            <label className="flex items-center text-xs font-bold text-gray-800 cursor-pointer">
                                <input type="checkbox" checked={agreeAll} onChange={handleAgreeAll} className="mr-2 h-4 w-4 accent-red-600" />
                                I agree to all the following items and Privacy Policy.
                            </label>

                            <div className="pl-6 space-y-3">
                                <CheckboxItem label="* I acknowledge and agree to ASUS " link="Privacy Policy" checked={check1} setChecked={setCheck1} />
                                <CheckboxItem label="* I acknowledge and agree to ASUS Cloud " link="Privacy Policy" checked={check2} setChecked={setCheck2} />
                                <CheckboxItem label="Keep me up to date by eDMs and notice with ASUS news, latest product and service information." checked={check3} setChecked={setCheck3} />
                                <CheckboxItem label="Keep me up to date by eDMs with ASUS Cloud news, latest product and service information." checked={check4} setChecked={setCheck4} />
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-[9px] text-gray-500 italic leading-tight text-center">
                                * Please rest assured the information collected will only be used for the purpose of registering and managing your accounts.<br />
                                Once your member is registered successfully, we will also assist you in registering as an ASUS Cloud Member owned by ASUS Cloud Corporation with the same account and password.
                            </p>
                        </div>

                        <button className="w-[180px] block mx-auto bg-[#FFB5B5] hover:bg-red-500 text-white font-bold py-3 text-xs rounded-sm uppercase mt-10 transition-colors shadow-sm">
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}



function CheckboxItem({ label, link, checked, setChecked }: any) {
    return (
        <label className="flex items-start text-[11px] text-gray-700 cursor-pointer">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="mr-2 mt-0.5 h-3.5 w-3.5 accent-red-600" />
            <span>
                {label}
                {link && <span className="text-red-600 font-bold hover:underline italic">"{link}"</span>}
            </span>
        </label>
    );
}

function SocialBtn({ children, label }: { children: React.ReactNode; label: string }) {
    return (
        <button type="button" className="flex items-center justify-center gap-1 border border-red-600 py-1 px-2 hover:bg-red-50 transition-colors">
            <span className="text-[9px] text-gray-600 font-medium">{label}</span>
            {children}
        </button>
    );
}

function InteractiveDOB({ label, options }: { label: string; options: string[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(label);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: any) => { if (!ref.current?.contains(e.target)) setIsOpen(false); };
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, []);

    return (
        <div className="relative flex-1" ref={ref}>
            <div onClick={() => setIsOpen(!isOpen)} className="border border-gray-400 border-r-0 last:border-r flex items-center justify-between px-3 py-2 cursor-pointer bg-white group">
                <span className={`text-xs font-medium ${selected === label ? 'text-red-600' : 'text-black'}`}>{selected}</span>
                <ChevronDown size={14} className="text-red-600 group-hover:scale-110 transition-transform" />
            </div>
            {isOpen && (
                <div className="absolute left-0 top-full w-full max-h-40 overflow-y-auto bg-white border border-gray-400 z-50 shadow-lg">
                    {options.map(o => (
                        <div key={o} onClick={() => { setSelected(o); setIsOpen(false); }} className="px-3 py-2 text-xs hover:bg-red-50 cursor-pointer">{o}</div>
                    ))}
                </div>
            )}
        </div>
    );
}