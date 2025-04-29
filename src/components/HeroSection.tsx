import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-dental-dark mb-4">
            Красивая улыбка – <span className="text-dental-primary">ваше преимущество</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Современная стоматологическая клиника с передовым оборудованием и опытными специалистами для здоровья вашей улыбки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-dental-primary hover:bg-dental-secondary text-white px-8 py-6 text-lg">
              Записаться на прием
            </Button>
            <Button variant="outline" className="border-dental-primary text-dental-primary hover:bg-dental-accent px-8 py-6 text-lg">
              Наши услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
