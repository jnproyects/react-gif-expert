import { useEffect, useState } from "react";

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs =  ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading ] = useState( true );

    const getImages = async () => {
        const newGifs = await getGifs( category );
        setImages( newGifs );
        setIsLoading( false );
    }
    
    // '[]' indica que la func 'getGifs' sólo se ejecutará la primera vez que se cargue este componente 'GifGrid'
    useEffect( () => { getImages(); }, [] );

    return {
        images,
        isLoading
    }
}
