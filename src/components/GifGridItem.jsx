import PropType from "prop-types";


export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropType.string.isRequired,
  url: PropType.string.isRequired
}

