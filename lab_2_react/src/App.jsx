import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTheme(currentHour >= 7 && currentHour < 21 ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 flex flex-col justify-between transition-colors duration-300">
      <div>
        <div className="max-w-5xl mx-auto px-4 pt-4 flex justify-end">
          <button 
            onClick={toggleTheme}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Перемкнути тему
          </button>
        </div>

        <Header />
        
        <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Experience />
            <Education />
            <Reviews />
          </div>
          
          <aside className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 transition-colors duration-300">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b dark:border-slate-700 pb-2 mb-3">Навички</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">React</span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">Tailwind</span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">Git</span>
              </div>
            </div>
          </aside>
        </main>
      </div>
      
      <Footer />
      <ContactForm />
    </div>
  );
}