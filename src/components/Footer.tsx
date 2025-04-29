import { Link } from "react-router-dom";
import { PhoneCall, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ЕвроДент</h3>
            <p className="text-gray-300 mb-4">
              Современная стоматологическая клиника, предоставляющая полный спектр услуг для здоровья вашей улыбки.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-dental-primary hover:text-dental-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-dental-primary hover:text-dental-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-dental-primary hover:text-dental-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <PhoneCall size={20} className="text-dental-primary mt-1" />
                <div>
                  <p className="font-medium">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-400">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-dental-primary mt-1" />
                <div>
                  <p className="font-medium">г. Москва, ул. Стоматологов, д. 5</p>
                  <p className="text-sm text-gray-400">м. Улыбка, 5 мин пешком</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-dental-primary mt-1" />
                <div>
                  <p className="font-medium">Режим работы</p>
                  <p className="text-sm text-gray-400">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-dental-primary mt-1" />
                <div>
                  <p className="font-medium">info@eurodent.ru</p>
                  <p className="text-sm text-gray-400">Для вопросов и предложений</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-dental-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-dental-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-dental-primary transition-colors">Врачи</Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-300 hover:text-dental-primary transition-colors">Цены</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-dental-primary transition-colors">О клинике</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-dental-primary transition-colors">Отзывы</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-dental-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} ЕвроДент. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
