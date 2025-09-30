import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSwrB9YN_qchWeuBT-2AK9VkNS50fS8CiQw&s",
      rating: 5,
      review: "CEY Money Transfer has been a lifesaver for sending money to my family in India. The rates are competitive and transfers are incredibly fast. I've been using them for 2 years now!"
    },
    {
      name: "Michael Chen",
      location: "New York, USA",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "As a freelancer working with international clients, I needed a reliable way to receive payments. CEY's platform is user-friendly and their customer support is exceptional."
    },
    {
      name: "Priya Patel",
      location: "Mumbai, India",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "The transparency in fees and exchange rates is what I love most about CEY. No hidden charges, and I always know exactly how much my family will receive."
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "I've tried many money transfer services, but CEY stands out for their speed and reliability. My transfers to the Philippines always arrive within minutes."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Join thousands of satisfied customers who trust CEY Money Transfer for their international remittances.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial */}
          <Card className="shadow-[var(--shadow-elegant)] border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
                    "{testimonials[currentIndex].review}"
                  </blockquote>
                  
                  <div>
                    <div className="font-heading font-bold text-lg text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft size={16} />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight size={16} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Testimonials;