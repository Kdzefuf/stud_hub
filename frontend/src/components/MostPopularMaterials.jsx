import React, {useEffect, useState } from 'react';
import Material from './UI/Material/Material.jsx';
import GetPopularMaterials from '../API/GetPopularMaterials';
import classes from '../styles/MostPopularMaterials.module.css'

function MostPopularMaterials(props) {
  const [popularMaterials, setPopularMaterials] = useState([])

  const fetchPopularMaterials = async () => {
    const response = await GetPopularMaterials.getPopularMaterials();
    setPopularMaterials(response);
    console.log("Материалы получены");
  };

  useEffect(() => {
    fetchPopularMaterials();
  }, []);

  return (
    <div className={classes.MostPopularMaterialsContent}>
      <h2 className={classes.title}>Популярные материалы</h2>
      <ul className={classes.MaterialsList}>
        {popularMaterials.map(material => {
            console.log(material);
            return <Material
                name={material.name}
                description={material.description}
                author={material.author_id}
                rating={material.rating}
                key={material.id}
                fileType={material.file_type}
                id={material.id}
                title={material.title}
                currentClass="material"
              ></Material>
          }
        )}
      </ul>
    </div>
  )
}

export default MostPopularMaterials;