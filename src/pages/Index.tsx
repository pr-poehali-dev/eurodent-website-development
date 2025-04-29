import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import AdvantagesSection from "@/components/AdvantagesSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooth, Search, Stethoscope, Microscope, Medal, MapPin } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ЕвроДент - Стоматологическая клиника в Москве</title>
        <meta name="description" content="Современная стоматологическая клиника ЕвроДент предлагает полный спектр услуг для здоровья вашей улыбки. Запишитесь на консультацию уже сегодня!" />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы предлагаем полный спектр стоматологических услуг от профилактики до сложных хирургических вмешательств.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Диагностика" 
                description="Комплексное обследование, выявление проблем и планирование лечения" 
                icon={<Search size={24} />} 
                link="/services/diagnostic"
              />
              <ServiceCard 
                title="Терапия" 
                description="Лечение кариеса, пульпита, периодонтита и других заболеваний зубов" 
                icon={<Tooth size={24} />} 
                link="/services/therapy"
              />
              <ServiceCard 
                title="Ортопедия" 
                description="Протезирование, коронки, виниры, вкладки и другие ортопедические решения" 
                icon={<Stethoscope size={24} />} 
                link="/services/orthopedics"
              />
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-dental-primary hover:bg-dental-secondary">
                Все услуги
              </Button>
            </div>
          </div>
        </section>
        
        {/* Advantages */}
        <AdvantagesSection />
        
        {/* Doctors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши специалисты</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Наши врачи — опытные профессионалы с многолетним стажем работы и постоянным повышением квалификации.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DoctorCard 
                name="Иванов Иван Иванович" 
                specialty="Стоматолог-терапевт" 
                experience="15 лет" 
                imageUrl="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
              />
              <DoctorCard 
                name="Петрова Анна Сергеевна" 
                specialty="Стоматолог-ортопед" 
                experience="10 лет" 
                imageUrl="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop"
              />
              <DoctorCard 
                name="Сидоров Алексей Петрович" 
                specialty="Стоматолог-хирург" 
                experience="12 лет" 
                imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              />
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-dental-primary hover:bg-dental-secondary">
                Все специалисты
              </Button>
            </div>
          </div>
        </section>
        
        {/* Certifications */}
        <section className="py-16 bg-dental-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Medal className="text-dental-primary" size={28} />
                  <h2 className="text-3xl font-bold">Лицензии и сертификаты</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Наша клиника имеет все необходимые лицензии и сертификаты для оказания стоматологических услуг. Мы работаем с проверенными материалами и используем только сертифицированное оборудование.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-dental-accent mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-primary"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span>Лицензия на осуществление медицинской деятельности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-dental-accent mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-primary"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span>Сертификаты соответствия на оборудование и материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-dental-accent mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dental-primary"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span>Сертификаты повышения квалификации врачей</span>
                  </li>
                </ul>
                <Button variant="outline" className="border-dental-primary text-dental-primary hover:bg-dental-accent">
                  Подробнее о клинике
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Стоматологическая клиника" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Location */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="text-dental-primary" size={28} />
                <h2 className="text-3xl font-bold">Как нас найти</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы находимся в удобном месте, рядом с метро Улыбка. Просторная парковка для наших клиентов.
              </p>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 mb-8">
              {/* Здесь будет карта, для примера просто контейнер */}
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Карта расположения клиники</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Адрес</h3>
                <p className="text-gray-600">г. Москва, ул. Стоматологов, д. 5</p>
                <p className="text-gray-600">м. Улыбка, 5 мин пешком</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Режим работы</h3>
                <p className="text-gray-600">Пн-Пт: 9:00 - 21:00</p>
                <p className="text-gray-600">Сб-Вс: 10:00 - 20:00</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Контакты</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">info@eurodent.ru</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-dental-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Запишитесь на консультацию</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Наши специалисты проведут осмотр, расскажут о состоянии ваших зубов и предложат оптимальный план лечения
            </p>
            <Button className="bg-white text-dental-primary hover:bg-dental-accent hover:text-dental-secondary px-8 py-6 text-lg">
              Записаться на прием
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
