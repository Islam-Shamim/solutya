"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adam Smith",
    position: "CEO at TechCorp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices feugiat lorem vitae posuere. Praesent euismod at lectus at feugiat.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director",
    quote:
      "Nullam eget quam nec metus semper interdum. Vivamus nec tincidunt ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Michael Roberts",
    position: "Product Manager",
    quote:
      "Cras vestibulum neque eu magna fermentum, in fringilla sem auctor. Donec in malesuada nisi, eget tincidunt arcu. In hac habitasse platea dictumst.",
    rating: 4,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Feedback</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with our software solution.
          </p>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={1} mode="wait">
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="testimonial-card bg-card p-8 rounded-xl shadow-xl border border-gray-800/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 italic mb-4">
                {testimonials[currentIndex].quote}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-card transition-colors border border-gray-800/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-card transition-colors border border-gray-800/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Testimonials;