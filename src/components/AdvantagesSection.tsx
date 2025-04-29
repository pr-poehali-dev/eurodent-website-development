import { CheckCircle, Clock, Award, Users } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <CheckCircle className="w-8 h-8 text-dental-primary" />,
      title: "Современное оборудование",
      description: "Используем передовые технологии и оборудование для эффективного лечения"
    },
    {
      icon: <Clock className="w-8 h-8 text-dental-primary" />,
      title: "Без очередей",
      description: "Прием строго по записи, уважаем ваше время и не заставляем ждать"
    },
    {
      icon: <Award className="w-8 h-8 text-dental-primary" />,
      title: "Квалифицированные врачи",
      description: "Наши стоматологи имеют высокую квалификацию и регулярно проходят обучение"
    },
    {
      icon: <Users className="w-8 h-8 text-dental-primary" />,
      title: "Более 5000 довольных пациентов",
      description: "Решаем стоматологические проблемы любой сложности"
    }
  ];

  return (
    <section className="py-12 bg-dental-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
