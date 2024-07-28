

const Navigation = () => {
  return (
    <section className="navegacion">
      <nav>
        <ul>
          <li>
            <a href="#header">
              <h2>
                <i className='bx bx-home'></i>
                <span>Inicio</span>
              </h2>
            </a>
          </li>
          <li>
            <a href="#contact-info">
              <h2>
                <i className='bx bx-user'></i>
                <span>Datos personales</span>
              </h2>
            </a>
          </li>
          <li>
            <a href="#education">
              <h2>
                <i className='bx bx-book-bookmark'></i>
                <span>Educación</span>
              </h2>
            </a>
          </li>
          <li>
            <a href="#work-experience">
              <h2>
                <i className='bx bxs-shopping-bags'></i>
                <span>Trabajo</span>
              </h2>
            </a>
          </li>
          <li>
            <a href="#references">
              <h2>
                <i className='bx bxs-bookmarks'></i>
                <span>Referencias</span>
              </h2>
            </a>
          </li>
          <li>
            <a href="#contact">
              <h2>
                <i className='bx bx-phone'></i>
                <span>Contacto</span>
              </h2>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
