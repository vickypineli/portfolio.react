import works from "../data/works.jsx"

  const Portolio = () => {    
  console.log('works', works)
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>
      {
        works.map(work => {
          return(
            <article  key={work.id} className="work">
              <h2>{work.name}</h2>
              <h3>{work.tecnologias}</h3>
              <span>{work.categoria}</span>
              <img src={work.img} alt={work.name} />
              <a href={work.url}>Ver mas</a>
            </article>
          );      
        })
      }
    </div>
  )
}

export default Portolio

