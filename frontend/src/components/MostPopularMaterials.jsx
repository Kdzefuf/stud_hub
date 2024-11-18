import React, {useEffect, useState } from 'react';
import Material from './UI/Material/Material.jsx';
import GetPopularMaterials from '../API/GetPopularMaterials';
import classes from '../styles/MostPopularMaterials.module.css'
import { sort } from '../functions/sortFunctions.js';

function MostPopularMaterials( { searchResults, sortOrder } ) {
  const [Materials, setMaterials] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (searchResults.length === 0) {
        const response = await GetPopularMaterials.getPopularMaterials();
        setMaterials(response);
      } else {
        setMaterials(searchResults);
      }
    };

    fetchData();
  }, [searchResults]);

  useEffect(() => {
    const sortedMaterials = [...Materials];
    if (sortOrder.type) {
      const sorted = sort(sortedMaterials, sortOrder.type, sortOrder.ascending);
      setMaterials(sorted);
    }
  }, [sortOrder, searchResults]);

  return (
    <div className={classes.MostPopularMaterialsContent}>
      <ul className={classes.MaterialsList}>
        {Materials.map(material => {
          return <Material
            key={material.id}
            name={material.name}
            fileType={material.file_type}
            views_count={material.views_count}
            rating={material.rating}
            id={material.id}
            currentClass="material"
            />}
        )}
      </ul>
    </div>
  )
}

export default MostPopularMaterials;