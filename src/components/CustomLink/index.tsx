import type { ReactNode } from "react"
import { NavLink, } from "react-router-dom"
import style from './CustomLink.module.css'
type customLinkProps={
to: string,
children:(props : {isActive:boolean, isPending:boolean})=>ReactNode,

}

const CustomLink: React.FC<customLinkProps> = ({children,to,})=>{
    

    return(
        <NavLink to={to}  className={style.noDecorate}>
            {(childrenProps)=>children(childrenProps)}
        </NavLink>
    )
}

export {CustomLink}