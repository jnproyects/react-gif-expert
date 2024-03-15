import { useState } from 'react';
import ProtoTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        // se está cambiando el estado directamente desde este componente - no es recomendado
        // setCategories( (currentCategories) => [ inputValue, ...currentCategories ] );

        // emite el evento que se encargará de cambiar el estado 
        // este evento pertenece al componente GifExpertApp 
        onNewCategory( inputValue.trim() );

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )

}

AddCategory.propTypes = {
    onNewCategory: ProtoTypes.func.isRequired
//     setCategories: ProtoTypes.func.isRequired
}
