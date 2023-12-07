import '../stylesheets/Testimony.css'

function Testimony (props) {
  
  const ParagraphParts = props.testimony.split(props.bold);
  return(
    <div className='container-testimony'>
      <img className='img-testimony' 
        src={require(`../img/testimony-${props.img}.jpg`)}
        alt={`Foto de ${props.img}`}
      />

      <div className='container-text-testimony'>
        <strong>
          <p className='name-testimony'>{props.name} en {props.country}</p>
        </strong>
        <p className='charge-testimony'>
          {props.charge} - <strong>{props.company}</strong>
          </p>
        <p className='text-testimony'>
          {ParagraphParts[0]}
          <strong>{props.bold}</strong>
          {ParagraphParts[1]}
        </p>
      </div>
    </div>
  );
}

export default Testimony;