import React, { useState, useEffect } from "react";
import GetMaterial from "../API/GetMaterial.js";
// import images from '../images';

function MaterialContent(props) {
  const [materialData, setMaterialData] = useState({});
  const { id } = props;

  
  useEffect(() => {
    const fetchMaterialData = async () => {
      const data = await GetMaterial.getMaterial(id);
      setMaterialData(data);
    };

    fetchMaterialData();
  }, [id]);

  return (
    <div>
      <h1>{materialData.name}</h1>
      <p><strong>Description:</strong> {materialData.description}</p>
      <p><strong>Author ID:</strong> {materialData.author_id}</p>
      <p><strong>Link:</strong> <a href={materialData.link} target="_blank" rel="noopener noreferrer">{materialData.link}</a></p>
      <p><strong>Views:</strong> {materialData.views_count}</p>
      <p><strong>Rating:</strong> {materialData.rating}</p>
      <p><strong>Reviews:</strong> {materialData.reviews}</p>
      <p><strong>Tags:</strong> {materialData.tags}</p>
      <p><strong>File Type:</strong> {materialData.file_type}</p>
    </div>
  );
}

export default MaterialContent;
