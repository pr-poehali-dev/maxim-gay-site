const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[clamp(3rem,15vw,12rem)] font-black tracking-tighter text-black animate-fade-in leading-none">
          МАКСИМ ГЕЙ
        </h1>
        
        <div className="mt-8 animate-scale-in">
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
        <p className="text-sm text-gray-400 tracking-widest uppercase">
          Minimal Portfolio 2025
        </p>
      </div>
    </div>
  );
};

export default Index;
