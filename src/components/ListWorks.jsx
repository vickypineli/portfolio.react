import PropTypes from 'prop-types';
import { works } from "../data/works.jsx";

const ListWorks = ({ limite = works.length }) => {    
  return (
    <section className="works">
      {
        works.slice(0, limite).map(work => {
          return (
            <article key={work.id} className="work-item">
              <h2>{work.name}</h2>
              <h3>{work.tecnologias}</h3>
              <span>{work.categoria}</span>
              <img src={work.img} alt={work.name} />
              <a href={work.url}>Ver más</a>
              <p>{work.descripcion}</p>
            </article>
          );
        })
      }
    </section>
  );
};

ListWorks.propTypes = {
  limite: PropTypes.number
};

export default ListWorks;


