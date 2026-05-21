export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-[10px] md:text-xs min-h-[60px] md:h-14 flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 md:py-0 border-t border-white/10">
      
     
      <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors mb-2 md:mb-0">
        <span className="text-sm">🌐</span>
        <span className="uppercase tracking-wider">Philippines/English</span>
      </div>

     
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-right">
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
        
        <span className="opacity-50 hidden md:inline">|</span>
        
        <span className="opacity-60">
          ©ASUSTeK Computer Inc. All rights reserved.
        </span>
      </div>
      
    </footer>
  );
}