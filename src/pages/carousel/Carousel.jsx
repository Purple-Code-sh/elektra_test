import { useState } from 'react';
import styles from './style.module.css';

const interests = [
  { id: 1, title: 'Música', icon: '🎷' },
  { id: 2, title: 'Series y Anime', icon: '📺' },
  { id: 3, title: 'Tecnología', icon: '💻' },
  { id: 4, title: 'Robótica', icon: '🤖' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? interests.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === interests.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Hemos recibido tu mensaje.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      {/* Carousel */}
      <section className={styles.carousel}>
        <h2 className={styles.carouselTitle}>Mis Intereses</h2>
        <div className={styles.carouselWrapper}>
          <button className={styles.navButton} onClick={handlePrev}>
            &#8592;
          </button>
          <div className={styles.carouselContent}>
            <span className={styles.icon}>{interests[currentIndex].icon}</span>
            <h3 className={styles.carouselItemTitle}>
              {interests[currentIndex].title}
            </h3>
          </div>
          <button className={styles.navButton} onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </section>

      {/* Formulario de Contáctanos */}
      <section className={styles.contactForm}>
        <h2 className={styles.formTitle}>Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Carousel;
