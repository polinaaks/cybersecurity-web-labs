function Experience() {
  return (
    <section 
      id="experience" 
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 hover:shadow-md transition-shadow"
    >
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-500 pb-2 mb-4">
        Досвід роботи
      </h2>
      <article className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-700">
          Контент-менеджер
        </h3>
        <p className="text-sm font-medium text-indigo-600">
          <em>Digital Studio | Січень 2023 — Травень 2023</em>
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-600 leading-relaxed">
          <li>Наповнення сайтів текстовим та графічним контентом</li>
          <li>Форматування статей та блогів за допомогою HTML-розмітки</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;