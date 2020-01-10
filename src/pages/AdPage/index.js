import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Container, Loading, PageArea, OthersArea, BreadCrumb } from './styles';
import { Slide } from "react-slideshow-image";
import AdItem from '../../components/AdItem'
import api from '../../api'

export default function AdPage() {
    const [loading, setLoading] = useState(true)
    const [adData, setAdData] = useState({})
    const { id: adId } = useParams()

    function formatDate(date) {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        let formatedDate = new Date(date)
        const day = formatedDate.getDay()
        const month = months[(formatedDate.getMonth())]
        const hour = formatedDate.getHours()
        return `${day} de ${month} as ${hour} h `
    }

    useEffect(() => {
        async function loadAdData() {
            const response = await api.get(`/ad/item?id=${adId}&other=true`)
            setAdData(response.data)
            setLoading(false)
        }
        loadAdData()

    }, [adId])

    return (
        <>
            <Container>
                {adData.category &&
                    <BreadCrumb>



                        <Link to="/">
                            Home
                        </Link>
                        /
                        <Link to={`/ads?state=${adData.stateName}`}>
                            {adData.stateName}
                        </Link>
                        /
                        <Link to={`/ads?state=${adData.stateName}&cat=${adData.category.name}`}>
                            {adData.category.name}
                        </Link>
                        /
                        <Link to="">
                            {adData.title}
                        </Link>


                    </BreadCrumb>
                }
                <PageArea>
                    <div className="left-side">
                        <div className="box">
                            <div className="ad-image">
                                {loading && <Loading height="300" />}
                                {adData.images &&
                                    <Slide>
                                        {adData.images.map((image, index) =>
                                            <div key={index} className="each-slide">
                                                <img src={image} alt="Product" />
                                            </div>
                                        )}
                                    </Slide>
                                }
                            </div>
                            <div className="ad-info">
                                <div className="ad-name">
                                    {loading && <Loading height="20" />}
                                    {adData.images && <h2>{adData.title}</h2>}
                                </div>
                                <div className="ad-description">
                                    {loading && <Loading height="100" />}
                                    {adData.dateCreated && formatDate(adData.dateCreated)}
                                    {adData.description && <p>
                                        {adData.description}
                                    </p>
                                    }
                                    <hr />
                                    {adData.views && <small>
                                        Visualizações {adData.views}
                                    </small>}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="box box--padding">
                            {loading && <Loading height="20" />}
                            {adData.priceNegotiable && "Preço negociavel"}
                            {adData.priceNegotiable ||
                                <div className="price">
                                    Preço <span>{`R$ ${adData.price}`}</span>
                                </div>
                            }
                        </div>
                        {loading && <Loading height="20" />}
                        {adData.userInfo &&
                            <>
                                <div className="box contact-box">
                                    <a href={`mailto${adData.userInfo.email}`}>Contate o vendedor</a>
                                </div>
                                <div className="box box--padding ">
                                    <div className="user-info">
                                        Criado por:
                            <strong> {adData.userInfo.name}</strong>
                                        <small>Email: {adData.userInfo.email}</small>
                                        <small>Estado: {adData.stateName}</small>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </PageArea>
                <OthersArea>
                    <h2>Outras ofertas do vendedor</h2>
                    {adData.others &&
                        <div className="list">

                            {adData.others.map((ad, index) =>
                                <AdItem data={ad} />

                            )}
                        </div>
                    }
                </OthersArea>
            </Container>
            <div className="other">
            </div>
        </>

    );
}
