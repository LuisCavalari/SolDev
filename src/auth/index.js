export const isAuth = ()=> localStorage.getItem('olx-c@token')

export const login = token => localStorage.setItem('olx-c@token',token)

export const logout = ()=> localStorage.removeItem('olx-c@token') 