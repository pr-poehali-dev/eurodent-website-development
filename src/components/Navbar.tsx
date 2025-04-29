import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-dental-primary">ЕвроДент</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-dental-primary transition-colors">
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-dental-primary">
                Услуги
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/services/diagnostic" className="group grid h-auto w-full items-start gap-1 rounded-md p-3 hover:bg-dental-accent">
                    <div className="text-sm font-medium leading-none group-hover:text-dental-primary">Диагностика</div>
                    <div className="line-clamp-2 text-xs text-gray-500">Комплексное обследование полости рта</div>
                  </Link>
                  <Link to="/services/therapy" className="group grid h-auto w-full items-start gap-1 rounded-md p-3 hover:bg-dental-accent">
                    <div className="text-sm font-medium leading-none group-hover:text-dental-primary">Терапия</div>
                    <div className="line-clamp-2 text-xs text-gray-500">Лечение кариеса и заболеваний десен</div>
                  </Link>
                  <Link to="/services/surgery" className="group grid h-auto w-full items-start gap-1 rounded-md p-3 hover:bg-dental-accent">
                    <div className="text-sm font-medium leading-none group-hover:text-dental-primary">Хирургия</div>
                    <div className="line-clamp-2 text-xs text-gray-500">Удаление зубов и имплантация</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/doctors" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-dental-primary transition-colors">
                Врачи
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/prices" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-dental-primary transition-colors">
                Цены
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-dental-primary transition-colors">
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="hidden md:flex items-center gap-2 bg-dental-primary hover:bg-dental-secondary">
          <PhoneCall size={16} />
          <span>+7 (495) 123-45-67</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
