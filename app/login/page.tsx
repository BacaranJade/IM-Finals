"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogOut, LayoutDashboard, User, ShieldAlert, ChevronDown, Laptop, Cpu, HardDrive, PlusCircle, Tag, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


interface ProductItem {
    id: string;
    name: string;
    category: "laptop" | "cpu" | "gpu";
    price: string;
    description: string;
}

export default function LoginPage() {
   
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState<"user" | "admin">("user");
    const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

    const [showPassword, setShowPassword] = useState(false);
    const [showGoogleModal, setShowGoogleModal] = useState(false);
    const [activeTab, setActiveTab] = useState("home");
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);

    const [products, setProducts] = useState<ProductItem[]>([
        { id: "1", name: "ROG Strix SCAR 18 (2026)", category: "laptop", price: "₱189,995.00", description: "Intel Core i9 with NVIDIA RTX 5080 Laptop GPU." },
        { id: "2", name: "ROG Maximus Z890 Hero", category: "cpu", price: "₱38,500.00", description: "Premium ATX motherboard engineered for extreme overclocking performance." },
        { id: "3", name: "ROG Strix GeForce RTX 5090 OC", category: "gpu", price: "₱134,900.00", description: "Next-gen architecture equipped with axial-tech cooling sets." }
    ]);

  
    const [newProdName, setNewProdName] = useState("");
    const [newProdCategory, setNewProdCategory] = useState<"laptop" | "cpu" | "gpu">("laptop");
    const [newProdPrice, setNewProdPrice] = useState("");
    const [newProdDesc, setNewProdDesc] = useState("");


    const [googleEmail, setGoogleEmail] = useState("");
    const [googlePassword, setGooglePassword] = useState("");

    const [nativeEmail, setNativeEmail] = useState("");
  
    const formatUserIdentity = (input: string) => {
        if (!input) return "ROG Elite Member";
        const reference = input.includes("@") ? input.split("@")[0] : input;
        const cleanName = reference.replace(/[._-]/g, " ").trim();
        return cleanName.toUpperCase();
    };

    const handleNativeSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        const inputData = nativeEmail.trim();

        if (inputData.toLowerCase().includes("admin")) {
            setUserRole("admin");
            setCurrentUser({
                name: "ADMINISTRATOR ROOT",
                email: inputData.includes("@") ? inputData : "admin@rog.asus.com"
            });
        } else {
            setUserRole("user");
            setCurrentUser({
                name: formatUserIdentity(inputData),
                email: inputData.includes("@") ? inputData : `${inputData.toLowerCase().replace(/\s+/g, "")}@gmail.com`
            });
        }
        setIsLoggedIn(true);
        setActiveTab("home");
    };

    const handleGoogleSignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!googleEmail) return;

        const mailTarget = googleEmail.trim();
        setUserRole("user");
        setCurrentUser({
            name: formatUserIdentity(mailTarget),
            email: mailTarget
        });
        setShowGoogleModal(false);
        setIsLoggedIn(true);
        setActiveTab("home");
    };

    
    const handleAddProduct = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProdName || !newProdPrice) return;

        const formattedPrice = newProdPrice.startsWith("₱") ? newProdPrice : `₱${parseFloat(newProdPrice).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

        const newProduct: ProductItem = {
            id: Date.now().toString(),
            name: newProdName,
            category: newProdCategory,
            price: formattedPrice,
            description: newProdDesc || "No additional setup specifications provided."
        };

        setProducts([newProduct, ...products]);

        
        setNewProdName("");
        setNewProdPrice("");
        setNewProdDesc("");
        alert(`Successfully deployed "${newProdName}" to the active catalog database!`);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setNativeEmail("");
        setGoogleEmail("");
        setGooglePassword("");
        setCurrentUser({ name: "", email: "" });
    };

  
    const laptopsList = products.filter(p => p.category === "laptop");
    const cpusList = products.filter(p => p.category === "cpu");
    const gpusList = products.filter(p => p.category === "gpu");

    if (isLoggedIn) {
        return (
            <main className="min-h-screen flex flex-col bg-[#05050b] text-white select-none">
              
                <nav className="bg-[#0b0b14] border-b border-red-600/20 px-6 py-4 sticky top-0 z-40 shadow-md">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                        <div className="flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
                            <button
                                onClick={() => { setActiveTab("home"); setShowProductsDropdown(false); }}
                                className={`transition-colors ${activeTab === "home" ? "text-red-500 underline decoration-2 underline-offset-8" : "text-gray-400 hover:text-white"}`}
                            >
                                Home
                            </button>

                            
                            <div className="relative">
                                <button
                                    onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors focus:outline-none"
                                >
                                    Products ({products.length}) <ChevronDown size={14} className={`transform transition-transform ${showProductsDropdown ? "rotate-180" : ""}`} />
                                </button>

                                {showProductsDropdown && (
                                    <div className="absolute left-0 mt-3 w-80 bg-[#0f0f1c] border border-gray-800 rounded shadow-2xl p-3 flex flex-col gap-3 z-50 max-h-[450px] overflow-y-auto">

                                        
                                        <div>
                                            <div className="px-2 py-1 text-[10px] uppercase text-red-500 font-black tracking-widest border-b border-gray-800 mb-1 flex items-center gap-1">
                                                <Laptop size={12} /> Gaming Laptops ({laptopsList.length})
                                            </div>
                                            {laptopsList.length === 0 ? <p className="text-[11px] text-gray-600 px-2 italic">Out of Stock</p> : laptopsList.map(p => (
                                                <div key={p.id} className="p-2 hover:bg-white/5 rounded text-left">
                                                    <div className="text-xs font-bold text-gray-200">{p.name}</div>
                                                    <div className="text-xs text-red-400 font-black mt-0.5">{p.price}</div>
                                                </div>
                                            ))}
                                        </div>

                                       
                                        <div>
                                            <div className="px-2 py-1 text-[10px] uppercase text-red-500 font-black tracking-widest border-b border-gray-800 mb-1 flex items-center gap-1">
                                                <Cpu size={12} /> Motherboards & CPUs ({cpusList.length})
                                            </div>
                                            {cpusList.length === 0 ? <p className="text-[11px] text-gray-600 px-2 italic">Out of Stock</p> : cpusList.map(p => (
                                                <div key={p.id} className="p-2 hover:bg-white/5 rounded text-left">
                                                    <div className="text-xs font-bold text-gray-200">{p.name}</div>
                                                    <div className="text-xs text-red-400 font-black mt-0.5">{p.price}</div>
                                                </div>
                                            ))}
                                        </div>

                                       
                                        <div>
                                            <div className="px-2 py-1 text-[10px] uppercase text-red-500 font-black tracking-widest border-b border-gray-800 mb-1 flex items-center gap-1">
                                                <HardDrive size={12} /> Graphics Cards & Cooling ({gpusList.length})
                                            </div>
                                            {gpusList.length === 0 ? <p className="text-[11px] text-gray-600 px-2 italic">Out of Stock</p> : gpusList.map(p => (
                                                <div key={p.id} className="p-2 hover:bg-white/5 rounded text-left">
                                                    <div className="text-xs font-bold text-gray-200">{p.name}</div>
                                                    <div className="text-xs text-red-400 font-black mt-0.5">{p.price}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => { setActiveTab("dashboard"); setShowProductsDropdown(false); }}
                                className={`flex items-center gap-1.5 transition-colors ${activeTab === "dashboard" ? "text-red-500 underline decoration-2 underline-offset-8" : "text-gray-400 hover:text-white"}`}
                            >
                                <LayoutDashboard size={15} />
                                {userRole === "admin" ? "Admin Console" : "My Dashboard"}
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2.5 bg-gray-900/40 px-3.5 py-1.5 rounded-full border border-gray-800">
                                <div className={`w-2 h-2 rounded-full ${userRole === "admin" ? "bg-amber-500 animate-pulse" : "bg-green-500"}`} />
                                <span className="text-xs text-gray-300 font-medium">
                                    {currentUser.name} <span className="text-[10px] text-gray-500 uppercase font-bold ml-1">({userRole})</span>
                                </span>
                            </div>
                            <button onClick={handleLogout} className="flex items-center gap-1.5 bg-red-600/10 hover:bg-red-600 border border-red-600/30 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded transition-all">
                                <LogOut size={13} /> Logout
                            </button>
                        </div>
                    </div>
                </nav>

                <section className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-10 relative">

                    
                    {activeTab === "home" && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div className="border border-red-500/10 bg-red-950/5 p-8 rounded-lg text-center md:text-left">
                                <h1 className="text-3xl font-black uppercase italic tracking-tight mb-2 text-red-500">SYSTEM HUB: {currentUser.name}</h1>
                                <p className="text-sm text-gray-400 max-w-2xl">
                                    Browse authorized gaming gear equipment and structural components below. Admin-added gear initializes in real-time.
                                </p>
                            </div>

                            
                            <div>
                                <h2 className="text-lg font-black uppercase tracking-wider mb-6 flex items-center gap-2 text-gray-300">
                                    <Layers size={18} className="text-red-500" /> Active Gear Marketplace Set ({products.length})
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {products.map((item) => (
                                        <div key={item.id} className="bg-[#0b0b14] border border-gray-800 hover:border-red-500/40 p-5 rounded transition-all flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-3">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-red-600/10 text-red-500 border border-red-500/20 rounded">
                                                        {item.category}
                                                    </span>
                                                    <span className="text-sm font-black text-emerald-400 tracking-tight">{item.price}</span>
                                                </div>
                                                <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">{item.name}</h3>
                                                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">{item.description}</p>
                                            </div>
                                            <button className="mt-5 w-full bg-red-600/10 border border-red-600/30 text-white font-bold uppercase text-[11px] py-2 tracking-widest hover:bg-red-600 transition-colors">
                                                Acquire Peripheral
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                   
                    {activeTab === "dashboard" && (
                        <div className="animate-in fade-in duration-300">
                            {userRole === "admin" ? (
                                
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-amber-500/20 pb-4">
                                        <ShieldAlert className="text-amber-500" size={32} />
                                        <div>
                                            <h2 className="text-2xl font-black uppercase tracking-tight text-amber-500 italic">Admin Command Hub</h2>
                                            <p className="text-xs text-gray-400">Add operational system assets & control consumer catalog parameters</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                        
                                        <form onSubmit={handleAddProduct} className="bg-[#0b0b14] border border-amber-500/20 p-6 rounded-lg space-y-4 lg:col-span-1">
                                            <h3 className="text-sm font-black text-amber-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                                                <PlusCircle size={16} /> Deploy New Hardware
                                            </h3>

                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-1">Item Component Name</label>
                                                <input
                                                    type="text" required value={newProdName} onChange={(e) => setNewProdName(e.target.value)}
                                                    placeholder="e.g. ROG Swift OLED PG32UCDM"
                                                    className="w-full bg-black/60 border border-gray-800 p-2.5 rounded text-sm text-white focus:border-amber-500 outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-1">System Category Classification</label>
                                                <select
                                                    value={newProdCategory} onChange={(e) => setNewProdCategory(e.target.value as any)}
                                                    className="w-full bg-black/60 border border-gray-800 p-2.5 rounded text-sm text-white focus:border-amber-500 outline-none"
                                                >
                                                    <option value="laptop">Gaming Laptop & Systems</option>
                                                    <option value="cpu">Motherboard & Processing Unit</option>
                                                    <option value="gpu">Graphics Component & Liquid Sets</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-1">Price Configuration</label>
                                                <div className="relative">
                                                    <Tag className="absolute left-3 top-3 text-gray-500" size={14} />
                                                    <input
                                                        type="text" required value={newProdPrice} onChange={(e) => setNewProdPrice(e.target.value)}
                                                        placeholder="Price value (e.g. 75000)"
                                                        className="w-full bg-black/60 border border-gray-800 p-2.5 pl-9 rounded text-sm text-white focus:border-amber-500 outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-1">Product Description Specs</label>
                                                <textarea
                                                    value={newProdDesc} onChange={(e) => setNewProdDesc(e.target.value)}
                                                    placeholder="Specify custom core clock speed, display array technology, or power metrics..." rows={3}
                                                    className="w-full bg-black/60 border border-gray-800 p-2.5 rounded text-sm text-white focus:border-amber-500 outline-none resize-none"
                                                />
                                            </div>

                                            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-black uppercase text-xs py-3 tracking-widest transition-colors rounded-xs">
                                                Add to Live Store Catalog
                                            </button>
                                        </form>

                                        
                                        <div className="lg:col-span-2 space-y-4">
                                            <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest">Live Database Asset Inventory Logs</h3>
                                            <div className="bg-[#0b0b14] border border-gray-800 rounded-lg overflow-hidden">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="border-b border-gray-800 bg-black/40 text-[10px] font-black uppercase text-gray-500 tracking-wider">
                                                            <th className="p-3">Name</th>
                                                            <th className="p-3">Category</th>
                                                            <th className="p-3 text-right">Price Value</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-800 text-xs">
                                                        {products.map(p => (
                                                            <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                                                                <td className="p-3 font-bold text-gray-200">{p.name}</td>
                                                                <td className="p-3 text-gray-400 uppercase text-[10px] tracking-wider font-medium">{p.category}</td>
                                                                <td className="p-3 text-right font-black text-amber-500">{p.price}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (

                                <div className="space-y-6">
                                    <div className="relative border border-red-500/20 bg-gradient-to-r from-red-950/20 to-transparent p-8 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
                                            <div className="w-20 h-20 rounded-full border-2 border-red-500 bg-gray-900 flex items-center justify-center text-white text-3xl font-bold shadow-[0_0_20px_rgba(225,0,18,0.4)]">
                                                <User size={36} />
                                            </div>
                                            <div>
                                                <h1 className="text-3xl font-black uppercase tracking-tight italic text-white">ROG ELITE REWARDS</h1>
                                                <h2 className="text-xl font-bold uppercase tracking-tight text-gray-200 mt-1">{currentUser.name}</h2>
                                                <p className="text-xs uppercase tracking-widest font-bold text-red-500 mt-0.5">EXPLORER TIER (100 / 600)</p>
                                                <p className="text-xs text-gray-400 mt-1">{currentUser.email}</p>
                                            </div>
                                        </div>

                                        <div className="relative z-10 bg-black/40 border border-gray-800 px-8 py-4 rounded text-center min-w-[140px]">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">My Points</span>
                                            <span className="text-4xl font-black italic text-red-500 mt-1 block drop-shadow-[0_0_15px_rgba(225,0,18,0.5)]">100</span>
                                        </div>
                                    </div>

                                    <div className="border border-gray-800 bg-[#0c0c16] rounded p-6">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-800 pb-2">Loyalty Reward Progress</h3>
                                        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden mb-2">
                                            <div className="bg-red-600 h-full w-[16.6%]" />
                                        </div>
                                        <p className="text-[11px] text-gray-500">Accumulate more system activity records to unlock premium desktop peripherals.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </section>
                <Footer />
            </main>
        );
    }


    return (
        <main className="min-h-screen flex flex-col bg-[#F3F3F3] relative">
            <Header />

            <section className="flex-1 flex items-center justify-center p-4">
                <div className="bg-white p-10 w-full max-w-[450px] shadow-sm border border-gray-100">
                    <h2 className="text-center font-bold text-2xl mb-8 text-black tracking-tight">Account Login</h2>

                    <form onSubmit={handleNativeSignIn}>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2 text-gray-800">Account</label>
                            <input
                                type="text"
                                required
                                value={nativeEmail}
                                onChange={(e) => setNativeEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full bg-white p-3 outline-none border border-gray-400 focus:border-black text-sm text-black"
                            />
                            <p className="text-[11px] text-gray-500 mt-1">Please enter your account profile username or email</p>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2 text-gray-800">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full bg-white p-3 outline-none border border-gray-400 focus:border-black text-sm pr-10 text-black"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-black focus:outline-none"
                                >
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-10">
                            <label className="flex items-center text-sm text-gray-800 cursor-pointer">
                                <input type="checkbox" className="mr-2 w-4 h-4 border-gray-400" /> Remember Me
                            </label>
                            <Link href="/forgot-password" className="text-sm text-red-600 font-medium hover:underline">
                                Forgot your password?
                            </Link>
                        </div>

                        <button type="submit" className="w-full bg-[#E10012] hover:bg-red-700 text-white font-bold py-3 text-sm uppercase tracking-widest transition-all rounded-tl-xl rounded-br-sm mb-8">
                            SIGN IN
                        </button>
                    </form>

                    <div className="text-center text-sm mb-8">
                        <span className="text-gray-600">Don't Have ASUS Account? </span>
                        <Link href="/signup" className="text-red-600 font-bold hover:underline">
                            Sign Up Now
                        </Link>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="flex-1 h-[1px] bg-gray-200"></div>
                        <span className="px-4 text-[12px] text-gray-400 font-medium">Or Sign In With</span>
                        <div className="flex-1 h-[1px] bg-gray-200"></div>
                    </div>

                    <div className="flex justify-around items-center border border-gray-200 rounded-md p-4">
                        <button type="button" className="hover:scale-110 active:scale-95 transition-all p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#00A4EF" d="M0 3.449L9.75 2.1V11.4h-9.75zM10.875 1.95L24 0v11.4h-13.125zM0 12.6h9.75v9.3L0 20.551zM10.875 12.6H24V24l-13.125-1.95z" /></svg>
                        </button>
                        <button type="button" className="hover:scale-110 active:scale-95 transition-all p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </button>
                        <button type="button" onClick={() => setShowGoogleModal(true)} className="hover:scale-110 active:scale-95 transition-all p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.232-3.32 2.552-6.392 2.552-4.992 0-8.912-4.048-8.912-9.048s3.92-9.048 8.912-9.048c2.704 0 4.752 1.072 6.192 2.48l2.32-2.32C18.104 1.184 15.6 0 12.48 0 5.864 0 0 5.488 0 12.192S5.864 24.384 12.48 24.384c3.568 0 6.28-1.168 8.4-3.392 2.184-2.184 2.872-5.264 2.872-7.672 0-.728-.064-1.416-.184-2.016H12.48z" /></svg>
                        </button>
                        <button type="button" className="hover:scale-110 active:scale-95 transition-all p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M17.057 12.781c.013 2.59 2.149 3.451 2.174 3.461-.021.068-.341 1.171-1.114 2.302-.67 1.01-1.365 1.979-2.433 1.979-1.085 0-1.428-.65-2.67-.65-1.239 0-1.618.63-2.653.63-1.072 0-1.892-1.054-2.546-2.025-1.341-1.956-2.364-5.526-1.012-7.876.671-1.168 1.874-1.91 3.167-1.91 1.037 0 1.957.697 2.572.697.601 0 1.742-.846 2.966-.846.52 0 1.983.189 2.913 1.55-.078.046-1.741.974-1.741 3.038zM14.512 4.148c.553-.668.927-1.602.825-2.528-.8.032-1.761.534-2.332 1.201-.512.59-.956 1.545-.834 2.451.891.069 1.78-.456 2.341-1.124z" /></svg>
                        </button>
                    </div>
                </div>
            </section>


            {showGoogleModal && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
                    <form onSubmit={handleGoogleSignUpSubmit} className="bg-[#f0f4f9] w-full max-w-[850px] min-h-[500px] rounded-[28px] shadow-2xl p-10 flex flex-col justify-between text-gray-900 animate-in fade-in zoom-in-95 duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="flex flex-col gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">Mag-sign in sa Google</span>
                                </div>
                                <h1 className="text-4xl font-normal text-gray-900 tracking-tight mt-4">Sign Up</h1>
                                <p className="text-sm text-gray-600">Gumamit ng iyong Google Account upang magpatuloy sa <span className="text-blue-600 font-medium hover:underline">asus.com</span></p>
                            </div>

                            <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col gap-5 shadow-xs">
                                <input
                                    type="text" required value={googleEmail} onChange={(e) => setGoogleEmail(e.target.value)}
                                    placeholder="Pangalan o Email"
                                    className="w-full bg-white border border-gray-300 rounded-lg p-4 outline-none focus:border-blue-500 text-black text-base"
                                />
                                <input
                                    type="password" required value={googlePassword} onChange={(e) => setGooglePassword(e.target.value)}
                                    placeholder="Ipasok ang iyong password"
                                    className="w-full bg-white border border-gray-300 rounded-lg p-4 outline-none focus:border-blue-500 text-black text-base"
                                />
                                <div className="flex items-center justify-between mt-6">
                                    <button type="button" className="text-sm text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50">Gumawa ng account</button>
                                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-lg shadow-xs">Susunod</button>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
                            <p className="max-w-xl text-center sm:text-left">Bago gamitin ang app na ito, puwede mong suriin ang <span className="text-blue-600 cursor-pointer hover:underline">Patakaran sa Privacy</span>.</p>
                            <div className="flex items-center gap-4 font-medium whitespace-nowrap text-gray-600">
                                <button type="button" onClick={() => setShowGoogleModal(false)} className="py-1 px-3 bg-gray-200 hover:bg-gray-300 text-xs rounded transition-colors text-black">Cancel</button>
                                <span>Tulong</span><span>Privacy</span>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <Footer />
        </main>
    );
}