"use client";
import storeLodingOverley from "@/store/storeLodingOverley";

const LoadingOverlay = () => {
  const { isOpen , message } = storeLodingOverley();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-lg font-medium animate-pulse">
          {message ? message : " جاري التحويل..."}
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
