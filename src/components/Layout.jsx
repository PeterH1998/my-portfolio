import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-[100dvh] bg-[#f1dcc9] flex items-center justify-center overflow-hidden">
      {/* FIXED: 
        - Mobile: h-[100dvh] forces the container to take up the full height of the phone.
        - Desktop: lg:h-auto lg:aspect-video snaps it back to the strict 16:9 stage.
      */}
      <div className="relative w-full max-w-[1920px] h-[100dvh] lg:h-auto lg:aspect-video shadow-2xl">
        {/* Fullscreen Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/bg-loop.mp4" type="video/mp4" />
        </video>

        {/* UI Overlay */}
        <div className="absolute inset-0 z-10 font-sans text-[#5c4d43]">
          <Header />

          {/* FIXED: 
            Changed padding on mobile (px-4, pt-20) so things aren't squeezed, 
            but kept your exact original padding (px-12, pt-24) for Desktop.
          */}
          <main className="w-full h-full pt-20 px-4 lg:pt-24 lg:px-12 pb-6 lg:pb-12">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
