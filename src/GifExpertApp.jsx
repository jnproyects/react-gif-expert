import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Avatar' ]);

    const onAddCategory = ( newCategory ) => {

        // console.log( newCategory );
        if ( categories.includes( newCategory ) ) return;
        
        // el push es utilizado para MUTAR un objeto y la idea es NO mutar el estado,
        // setCategories(  (currentCategories) => currentCategories.push('One Piece') ); // no funciona

        // estas 2 formas funcionan
        // Lo que debemos hacer es hacer una COPIA del estado anterior y generar un NUEVO estado
        setCategories( [ newCategory, ...categories ] );
        // setCategories(  (currentCategories) => [ 'One Piece', ...currentCategories ] );

    }

    return (
    <>
        <h1>GifExpert App</h1>

        <AddCategory onNewCategory={ ( newCateg ) => onAddCategory(newCateg) } />

        { categories.map( (category) => 
                <GifGrid key={ category } category={ category } />
            )
        }

    </>
    );
}
