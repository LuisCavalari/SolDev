import React from 'react';
import { Link } from 'react-router-dom'
import { HeaderArea, Nav } from './styles';
import { isAuth } from '../../auth'
export default function Header() {
    const logged = isAuth()

    return (
        <HeaderArea>
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <span className="logo-text">
                            O
                        </span>
                        <span className="logo-text">
                            L
                        </span>
                        <span className="logo-text">
                            X
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

                                <li>
                                    <Link to="/">Sair</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link>Login</Link>
                                </li>
                                <li>
                                    <Link>Cadastro</Link>
                                </li>
                            </>
                        }
                    </ul>
                </Nav>
            </div>

        </HeaderArea>
    );
}
