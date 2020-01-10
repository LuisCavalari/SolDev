import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { HeaderArea, Nav } from './styles';
import { isAuth, logout } from '../../auth'
export default function Header() {

    const [logged,setLogged] = useState(false)

    useEffect(() => {
        setLogged(isAuth)
    }, [])

    function endSession() {
        logout()
        window.location.reload()
    }

    return (
        <HeaderArea>
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <span className="logo-text">
                            S
                        </span>
                        <span className="logo-text">
                            D
                        </span>
                        <span className="logo-text">
                            V
                        </span>
                    </div>
                </Link>
                <Nav>
                    <ul>
                        <li className="bg-orange">
                            <Link to={logged ? '/ads' : '/login'}>
                                Poste um anuncio
                            </Link>
                        </li>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/">Minha conta</Link>
                                </li>

                                <li onClick={endSession}>
                                    <Link to="/">Sair</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastro</Link>
                                </li>
                            </>
                        }
                    </ul>
                </Nav>
            </div>

        </HeaderArea>
    );
}
