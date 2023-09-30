// `pages/_app.js`:  cada página cargue algo de CSS
//La exportación predeterminada _app.jses un componente React de nivel superior que envuelve todas las páginas de su aplicación.
//Puede usar este componente para mantener el estado al navegar entre páginas o para agregar estilos globales
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
