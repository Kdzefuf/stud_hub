import React, { useState, useEffect } from "react";
import classes from '../styles/MaterialsContent.module.css'
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import MostPopularMaterials from "./MostPopularMaterials";
import SearchMaterial from "../API/SearchMaterial";

import buttonImg from "../images/File.svg"

function MaterialsContent() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const DownloadMaterial = () => {
    window.location.assign('/downloadMaterials');
  }

  // Функция поиска внутри поискового поля
  // UPD: работает
  const searchInput = (e) => { setSearchValue(e.target.value) }
  const forSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await SearchMaterial.searchMaterial(searchValue);
      if (response) {
        setSearchResults(response);
        setSearchValue('');
        setSortOrder({
          type  : null,
          ascending: true
        })
      }
    } catch (error) {
      console.error('Ошибка при поиске материалов:', error);
    }
  };

  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterBackgroundColor, setFilterBackgroundColor] = useState('white')
  const [filterColor, setFilterColor] = useState('#2E2E4F');
  const [sortOrder, setSortOrder] = useState({
    type: null,
    ascending: true,
  });

  const filterToggle = () => {
    setFilterBackgroundColor(filterBackgroundColor === 'white' ? '' : 'white');
    setFilterColor(filterColor === '#2E2E4F' ? 'white' : '#2E2E4F');
    setFilterIsOpen(!filterIsOpen);
  }

  const handleSortTypeChange = (e) => {
    const newSortType = e.target.value;

    setSortOrder((prevState) => {
      if (prevState.type !== newSortType) {
        console.log('новое')
        return {
          type: newSortType,
          ascending: true,
        };
      } else {
        console.log('тоже самое')
        return {
          ...prevState,
          ascending: !prevState.ascending,
        };
      }
    });
  };

  //Тут jsx разметка
  return (
    <div className={classes.container}>
      <div className={classes.MaterialsContent}>
        <h1 className={classes.title}>Найди нужный материал!</h1>
        <div className={classes.search}>
          <Button currentClass="dropwodn" onClick={filterToggle}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="transparent" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="32" height="32" rx="5" fill={filterBackgroundColor}/>
              <rect x="22" y="17" width="2" height="3" fill={filterColor}/>
              <rect x="16" y="18" width="7" height="11" rx="1" fill={filterColor}/>
              <rect x="13" y="12" width="15" height="7" rx="1" fill={filterColor}/>
              <path d="M15.0007 36.6667H25.0007C33.334 36.6667 36.6673 33.3334 36.6673 25V15C36.6673 6.66671 33.334 3.33337 25.0007 3.33337H15.0007C6.66732 3.33337 3.33398 6.66671 3.33398 15V25C3.33398 33.3334 6.66732 36.6667 15.0007 36.6667Z" stroke="white" stroke-width="3"/>
              <path d="M13.5993 11.0834H26.3827C27.4493 11.0834 28.316 11.95 28.316 13.0167V15.15C28.316 15.9334 27.8327 16.9 27.3493 17.3834L23.1827 21.0667C22.5993 21.55 22.216 22.5167 22.216 23.3V27.4667C22.216 28.05 21.8327 28.8167 21.3493 29.1167L19.9993 29.9667C18.7327 30.75 16.9993 29.8667 16.9993 28.3167V23.1834C16.9993 22.5 16.616 21.6334 16.216 21.15L12.5327 17.2667C12.0493 16.8 11.666 15.9167 11.666 15.3334V13.1167C11.666 11.95 12.5327 11.0834 13.5993 11.0834Z" stroke="#2E2E4F" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Button>
          {filterIsOpen && (
            <div>
              <label>
                Тип сортировки:
                <select value={sortOrder.type} onChange={handleSortTypeChange}>
                  <option value="name">По названию</option>
                  <option value="views_count">По просмотрам</option>
                  <option value="rating">По рейтингу</option>
                  <option value="reviews">По отзывам</option>
                </select>
              </label>
            </div>
          )}
          <form className={classes.searchBar} onSubmit={forSearch}>
            <Input
            type="text"
            placeholder=""
            required={false}
            value={searchValue}
            onChange={searchInput}
            currentClass="searchBar"
            />
            <Button
              type="submit"
              currentClass="searchBar"
              placeholder="Найти"
            />
          </form>
        </div>
      </div>
      <MostPopularMaterials searchResults={searchResults} sortOrder={sortOrder}/>
      <Button currentClass="DownloadButton" onClick={DownloadMaterial}>
        <img className={classes.ButtonIMG} src={buttonImg} alt="file download"/>
        <p className={classes.ButtonText}>Добавить учебный материал</p>
      </Button>
    </div>
  )
}

export default MaterialsContent;