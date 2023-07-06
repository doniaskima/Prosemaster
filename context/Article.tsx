'use client';


import { createContext, useState } from 'react';

type ArticleCtx = {
    article:string;
    setArticle:React.Dispatch<React.SetStateAction<string>>;
}

type Props = {
    children:React.ReactNode;
}

export const ArticleContext = createContext<ArticleCtx>({} as ArticleCtx);


export const ArticleProvider =({children} : Props)=>{
    const [article, setArticle] = useState('');
    
    return(
     <ArticleContext.Provider value={{ article, setArticle }}>
        {children}
      </ArticleContext.Provider>
    )
}
