// ### **Ejercicio 2 (React): Generador de Usuarios Aleatorios**

// Este ejercicio consiste en crear una aplicación en React que obtenga y muestre información de un usuario aleatorio de una API.

// #### **¿Cómo funciona la aplicación?**
// 1. **Botón para obtener un usuario aleatorio:**
//    - Cuando el usuario haga clic en un botón, se debe hacer una petición a la API https://randomuser.me/api/.
//    - Esta API devuelve un usuario con datos como nombre, correo electrónico y foto de perfil.

// 2. **Mostrar la información del usuario:**
//    - La aplicación debe mostrar:
//      - Imagen de perfil.
//      - Nombre completo (nombre y apellido).
//      - Correo electrónico.

// 3. **Botón para obtener otro usuario:**
//    - Al hacer clic en el botón, se debe hacer otra petición para obtener un usuario diferente y actualizar la información mostrada.

// 4. **Manejo de estados en React:**
//    - Se debe usar useState para almacenar los datos del usuario.
//    - Se debe usar useEffect para cargar un usuario automáticamente cuando se abre la aplicación.

// 5. **Manejo de carga y errores:**
//    - Mientras se está obteniendo el usuario, la aplicación debe mostrar un mensaje como "Cargando usuario...".
//    - Si ocurre un error (por ejemplo, si la API no responde), la aplicación debe manejarlo adecuadamente y mostrar un mensaje como "Error al cargar el usuario".

// 💡 **Ejemplo práctico:**
// - Cuando el usuario abre la aplicación, automáticamente se muestra un usuario aleatorio con su imagen, nombre y correo.
// - Si hace clic en el botón, la información cambia y se muestra otro usuario diferente.

// ---
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Error al cargar el usuario");
      }
      const data = await response.json();
      setUser(data.results[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchUser} disabled={loading}>
        {loading ? "Cargando usuario..." : "Obtener usuario"}
        Obtener usuario
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <img src={user.picture.large} alt="Foto de perfil" />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
