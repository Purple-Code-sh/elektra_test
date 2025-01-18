import { useState } from 'react';
import styles from './style.module.css';

const RandomUsers = () => {
  const [users, setUsers] = useState([]);

  // Función para obtener usuarios desde la API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10'); // Obtiene 10 usuarios
      const data = await response.json();
      const usernames = data.results.map((user) => ({
        username: user.login.username,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
      }));
      setUsers(usernames); // Actualiza el estado con los usuarios obtenidos
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Título */}
      <h1 className={styles.title}>Usuarios Aleatorios</h1>

      {/* Párrafo descriptivo */}
      <p className={styles.description}>
        Esta sección utiliza una API pública para generar una lista de usuarios aleatorios. Haz clic en el botón para cargar los datos y ver los nombres de usuario, nombres completos y correos electrónicos en la tabla.
      </p>

      {/* Botón para obtener usuarios */}
      <button onClick={fetchUsers} className={styles.fetchButton}>
        Cargar Usuarios
      </button>

      {/* Tabla para mostrar los usuarios */}
      {users.length > 0 && (
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Nombre Completo</th>
              <th>Correo Electrónico</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RandomUsers;
