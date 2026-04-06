import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingBag,
} from "react-icons/fa";
import image1 from "../../../assets/photo-cloth.avif";
import image2 from "../../../assets/photo-1523381210434-271e8be1f52b.avif";
import image3 from "../../../assets/photo-1606760227091-3dd870d97f1d.avif";

const slides = [
  {
    image: image1,
    title: "Production-Grade Quality",
    subtitle: "Audited stitching, fabric consistency, and on-time delivery.",
  },
  {
    image: image2,
    title: "Scalable Bulk Orders",
    subtitle: "From sample runs to large manufacturing batches.",
  },
  {
    image: image3,
    title: "Transparent Workflow",
    subtitle: "Track each order from approval to shipment.",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative my-6 lg:my-10 py-6 lg:py-4 lg:min-h-[60vh] flex items-center overflow-visible">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium mb-4"
            >
              Garments Production
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Build, Track, and Deliver
              <span className="block text-indigo-600">Every Order Faster</span>
            </h1>
            <p className="mt-4 text-base md:text-lg app-muted max-w-xl mx-auto lg:mx-0">
              Centralize buyer requests, manager approvals, and admin control in
              one production-ready workflow with secure role-based access.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/all-products"
                className="inline-flex items-center justify-center px-7 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-red-800 transition-all"
              >
                <FaShoppingBag className="mr-2" />
                Explore Products
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 border app-border app-surface font-semibold rounded-full hover:bg-slate-100"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[340px] md:h-[420px] lg:h-[52vh] rounded-4xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-bold">
                  {slides[activeSlide].title}
                </h3>
                <p className="text-sm text-white/90 mt-1">
                  {slides[activeSlide].subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
              >
                <FaChevronRight />
              </button>

              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full ${
                      activeSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
