import { useState, useEffect } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const variant = 1; // Твій варіант за журналом

    useEffect(() => {
        // Отримуємо дані
        fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Помилка:', error));
    }, []);

    return (
        <section className="card">
            <h2 style={{ color: 'inherit', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                Відгуки попередніх роботодавців
            </h2>
            
            {/* Рендеримо масив коментарів */}
            <div style={{ marginTop: '20px' }}>
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <strong>{review.email}</strong>
                        <p style={{ margin: 0 }}>{review.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}