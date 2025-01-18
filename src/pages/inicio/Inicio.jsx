

import styles from './style.module.css';

const Inicio = () => {
  return (
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.header}>
        <h1 className={styles.title}>Javier Shmin Infante Barrios</h1>
        <p className={styles.description}>
          Desarrollador Frontend | Apasionado por la tecnología y la creatividad
        </p>
      </header>

      {/* Sección de Gustos e Intereses */}
      <main className={styles.main}>
        <section className={styles.interests}>
          <h2 className={styles.sectionTitle}>Gustos e Intereses</h2>
          <div className={styles.grid}>
            {/* Gusto: Tecnología */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Tecnología</h3>
              <p className={styles.cardDescription}>
                La tecnología me inspira a crear soluciones innovadoras. Me apasiona especialmente el desarrollo frontend y la robótica.
              </p>
            </div>

            {/* Gusto: Música */}
            <div className={styles.card}>
        
              <h3 className={styles.cardTitle}>Música</h3>
              <p className={styles.cardDescription}>
                Disfruto componer música en mis ratos libres. Creo que la música es una forma única de expresar emociones y creatividad.
              </p>
            </div>

            {/* Gusto: Series y Anime */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Series y Anime</h3>
              <p className={styles.cardDescription}>
                Amo perderme en historias envolventes de series y animes. Mis géneros favoritos incluyen ciencia ficción y fantasía.
              </p>
            </div>


            {/* Gusto: Color Favorito */}
            <div className={styles.card}>
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: '#87CEEB' }}
              ></div>
              <h3 className={styles.cardTitle}>Azul Cielo</h3>
              <p className={styles.cardDescription2}>
                Mi color favorito me recuerda la calma y la inmensidad del cielo. Refleja optimismo y tranquilidad.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Inicio;
