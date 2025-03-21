import css from './header.module.css'
import { ShoppingCart, User } from 'lucide-react'

export default function Header() {
    return(
        <div className={css.container}>
            <ShoppingCart  className={css.icon}/>
            <p>Logo aqui</p>
            <User className={css.icon}/>
        </div>
    )
}