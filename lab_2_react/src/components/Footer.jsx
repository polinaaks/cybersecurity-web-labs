import { useState, useEffect } from 'react';

function Footer() { 
  
    const [sysInfo, setSysInfo] = useState('');

    useEffect(() => {
        const info = `ОС: ${navigator.platform}, Браузер: ${navigator.userAgent}`;
        localStorage.setItem('systemInfo', info);
        setSysInfo(localStorage.getItem('systemInfo'));
    }, []);
  return (
    <footer 
      id="contacts" 
      className="mt-12 bg-slate-900 text-slate-300 rounded-xl p-8 shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2 inline-block">
        Контактна інформація
      </h2>
      
      <address className="not-italic my-4">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-base">
          <li className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Email:</span>
            <a 
              href="mailto:polina.aksonova.kb.2025@lpnu.ua" 
              className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
            >
              polina.aksonova.kb.2025@lpnu.ua
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Телефон:</span>
            <a 
              href="tel:+380777777777" 
              className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
            >
              +38 (077) 777-77-77
            </a>
          </li>
        </ul>
      </address>

      <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-800">
        &copy; 2026 Аксьонова Поліна. Всі права захищено.
      </p>
    </footer>
  );
}

export default Footer;