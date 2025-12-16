import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Subsection {
  id: string;
  title: string;
}

interface SectionConfig {
  [key: string]: Subsection[];
}

const sectionSubsections: SectionConfig = {
  '/controverse': [
    { id: 'intro', title: 'Introduction' },
    { id: 'transition', title: 'Une société déjà en transition' },
    { id: 'promesses', title: 'Les promesses' },
    { id: 'risques', title: 'Risques et dérives' },
    { id: 'controverse', title: 'La controverse' },
    { id: 'conclusion', title: 'Conclusion' }
  ],
  '/expert': [
    { id: 'interview', title: 'Interview de l\'expert' },
    { id: 'frise', title: 'Frise chronologique' },
    { id: 'acteurs', title: 'Identification d\'experts' }
  ],
  '/sources': [
    { id: 'biblio', title: 'Bibliographie' },
    { id: 'ia', title: 'Utilisation d\'IA' },
    { id: 'mentions', title: 'Mentions légales' },
    { id: 'equipe', title: 'Présentation de l\'équipe' }
  ],
  '/resume': [
    { id: 'summary', title: 'Résumé' }
  ]
};

export function LeftSidebar() {
  const location = useLocation();
  const [activeSubsection, setActiveSubsection] = useState('');
  
  const currentPath = location.pathname === '/' ? '/controverse' : location.pathname;
  const subsections = sectionSubsections[currentPath] || [];

  useEffect(() => {
    const handleScroll = () => {
      const subsectionElements = subsections.map(sub => 
        document.getElementById(sub.id)
      ).filter(Boolean);

      for (let i = subsectionElements.length - 1; i >= 0; i--) {
        const element = subsectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted threshold to better detect sections, especially the last one
          if (rect.top <= 220) {
            setActiveSubsection(subsections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [subsections, currentPath]);

  const scrollToSubsection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -200;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:block fixed left-0 top-[200px] w-64 h-[calc(100vh-200px)] bg-gray-50 border-r-2 border-gray-200 overflow-y-auto shadow-md">
      <div className="p-6">
        <h3 className="mb-6 text-gray-700 uppercase tracking-wider">Sections</h3>
        <nav className="space-y-2">
          {subsections.map((subsection) => (
            <button
              key={subsection.id}
              onClick={() => scrollToSubsection(subsection.id)}
              className={`w-full text-left px-5 py-3.5 rounded-lg transition-all duration-300 border ${
                activeSubsection === subsection.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full transition-all ${
                  activeSubsection === subsection.id ? 'bg-white' : 'bg-gray-400'
                }`} />
                <span className="text-sm">{subsection.title}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}