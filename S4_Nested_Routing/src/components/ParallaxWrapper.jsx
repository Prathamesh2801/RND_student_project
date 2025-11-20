export default function ParallaxWrapper({ image, children }) {
  return (
    <section
      className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6 text-white">
        {children}
      </div>
    </section>
  );
}
