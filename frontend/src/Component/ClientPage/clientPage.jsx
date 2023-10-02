import React from "react";
import { Link } from "react-router-dom";
import cs from "./clientPage.module.css"
import { useMediaQuery } from 'react-responsive'; // хук для адаптивной верстки

const ClientPage = () => {

    const isDesctop = useMediaQuery({
        query: "(min-width: 1224px)" // устанавливаем начальные параметры
    });

    return(
        <div>
            {isDesctop?
             <header>
             <span className={cs.divLink}>
                 <Link className={cs.link} to="/users" >Users</Link>
             </span>
             <span className={cs.divLink}>
                 <Link className={cs.link} to="/dateSelection" >dateSelection</Link>
             </span>
             <span className={cs.divLink}>
                 <Link className={cs.link} to="/" >Отзывы </Link>
             </span>
             <span className={cs.divLink}>
                 <Link className={cs.link} to="/" >Новости </Link>
             </span> 
             <span className={cs.divLink}>
                 <a className={cs.link} href="http://104.154.140.254:8080/swagger-ui/index.html" >Swagger </a>
             </span>  
             <span className={cs.divLink}>
                 <a className={cs.link} href="https://www.youtube.com/watch?v=yYq0rWESsNY&t=147s" >полезная ссылка </a>
             </span>              
         </header>  : 
         <header>
         <span className={cs.divLink}>
             <Link className={cs.link} to="/users" >Users</Link>
         </span>
         <span className={cs.divLink}>
             <Link className={cs.link} to="/" >Отзывы </Link>
         </span>
         <span className={cs.divLink}>
             <Link className={cs.link} to="/" >Новости </Link>
         </span>     
     </header>
        }
                     
        </div>
    )
};

export default ClientPage;