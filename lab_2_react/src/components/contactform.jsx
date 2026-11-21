import { useState, useEffect } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Запускаємо таймер на 60000 мс (1 хв)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);
        
        // Очищаємо таймер, якщо компонент буде розмонтовано
        return () => clearTimeout(timer);
    }, []);

    // Умовний рендеринг: якщо закрито, нічого не повертаємо
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <h3 style={{ marginTop: 0 }}>Зворотний зв'язок</h3>
            <form action="https://formspree.io/f/xrppoyzo" method="POST">
                <input type="text" name="name" placeholder="Ім'я" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="tel" name="phone" placeholder="Номер телефону" />
                <textarea name="message" placeholder="Ваше повідомлення" rows="4" required></textarea>
                
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="submit" className="modal-btn">Надіслати</button>
                    <button 
                        type="button" 
                        className="modal-btn" 
                        style={{ background: '#64748b' }}
                        onClick={() => setIsOpen(false)}
                    >
                        Закрити
                    </button>
                </div>
            </form>
        </div>
    );
}