import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-[100dvh] bg-[#f1dcc9] flex items-center justify-center overflow-hidden">
      <div className="relative h-[100dvh] w-full max-w-[1920px] overflow-hidden bg-[#d7b597] shadow-2xl lg:h-auto lg:aspect-video">
        <img
          src="/assets/hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 z-[1] bg-[#f1dcc9]/25" />

        <div className="absolute inset-0 z-10 font-sans text-[#5c4d43]">
          <Header />

          <main className="h-full w-full px-4 pb-6 pt-20 sm:px-6 lg:px-12 lg:pb-12 lg:pt-24">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
