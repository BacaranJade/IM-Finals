import Link from "next/link"; 
import localFont from 'next/font/local';


const rogFont = localFont({
    src: '../public/fonts/asusrog_regular.ttf',
    variable: '--font-rog',
});

export default function Header() {
    return (
        <header className="bg-[#000000] h-12 flex items-center px-4 md:px-10 border-b border-gray-900 shadow-none">
            <div className="max-w-[1200px] mx-auto w-full">
                <Link href="/" className="flex items-center gap-2 md:gap-3">
                    
                    <img
                        src="/logo.png"
                        alt="ROG Logo"
                        className="h-5 md:h-6 w-auto object-contain brightness-[0.85] contrast-[1.1]" 
                    />

                    
                    <div className={`${rogFont.className} flex flex-col leading-[0.85] text-red-600 antialiased`}>
                        <span className="text-[9px] md:text-[12px] uppercase tracking-tight italic">
                            Republic of
                        </span>
                        <span className="text-[9px] md:text-[12px] uppercase tracking-tight italic">
                            Gamers
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    );
}