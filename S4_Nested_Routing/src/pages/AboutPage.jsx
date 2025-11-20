
import ParallaxWrapper from "../components/ParallaxWrapper";
import aboutSlides from "../data/about";

export default function AboutPage() {
  return (
    <div className="w-full">
      {aboutSlides.map((slide) => (
        <ParallaxWrapper key={slide.id} image={slide.image} speed={0.25}>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-accent)] drop-shadow-lg mb-4">
            {slide.title}
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-soft)] max-w-2xl mx-auto leading-relaxed">
            {slide.description}
          </p>
        </ParallaxWrapper>
      ))}
    </div>
  );
}
