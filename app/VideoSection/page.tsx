"use client";

import React, { useRef, useEffect } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100vh] sm:h-[80vh] md:h-[100vh]"
    >
      {/* Overlay label */}
      <p className="absolute top-14 left-4 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded">
        Sound On
      </p>
      <p className="absolute top-14 right-4 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded">
        Check on Youtube
      </p>

      <video
        ref={videoRef}
        src="/images/video.mp4"
        loop
        playsInline
        muted={false}
        controls
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoSection;
