import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../api'
import AdItem from '../../components/AdItem'
import { Container, SearchArea, CategoriesArea, CategorieIcon, NewsAds } from './styles'

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([])
  const [stateList, setStateList] = useState([])
  const [newsAds, setNewsAds] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories')
      const { categories } = response.data
      setCategoriesList(categories)
    }

    loadCategories()
  }, [])

  useEffect(() => {
    async function loadStates() {
      const response = await api.get('/states')
      const { states } = response.data
      setStateList(states)
    }

    loadStates()
  }, [])


  useEffect(() => {
    async function loadNewsAds() {
      const response = await api.get('/ad/list?limit=3&sort=desc')

      const { ads } = response.data

      setNewsAds(ads)

    }

    loadNewsAds()


  }, [])
  
  return (
    <>
      <Container>
        <SearchArea>
          <input
            type="text"
            placeholder="O que deseja procurar ?"
          />
          <select >
            {stateList.map(state =>
              <option value={state.name}>
                {state.name}
              </option>

            )}
          </select>
          <button>Pesquisar</button>
        </SearchArea>
        <CategoriesArea>
          {categoriesList.map(categorie =>
            <Link
              to={`/ads?cat=${categorie.slug}`}
              key={categorie._id}
            >
              <CategorieIcon >
                <img src={categorie.img} alt="" />
                <span>
                  {categorie.name}
                </span>
              </CategorieIcon>
            </Link>
          )}
        </CategoriesArea>
      </Container>
      <NewsAds>
        <Container>
          <div className="recent-ads">
            <h2>Anuncios recentes</h2>
            <div className="recent-ads-list">
              {newsAds.map((ads,index)=>
                <AdItem key={index} data={ads} />
              )}
            </div>
          </div>
      </Container>
      </NewsAds>
    </>
  );
}
