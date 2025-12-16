import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const sections = [
    { name: 'Controverse', path: '/controverse' },
    { name: 'Expert', path: '/expert' },
    { name: 'Sources', path: '/sources' },
    { name: 'Resumé', path: '/resume' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/controverse' && location.pathname === '/');
  };

  return (
    <nav className="fixed top-40 left-0 right-0 z-30 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-8 py-5 px-4 md:px-8 overflow-x-auto">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className={`px-6 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 whitespace-nowrap ${
              isActive(section.path)
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
            }`}
          >
            {section.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}