import './Zodiac.css';

export default function ZodiacCard(props) {
  return (
    <div className="zodiac">
      <img src={`${process.env.PUBLIC_URL}/zodiac-img/${props.name}.png`}/>
      <p className="name">{props.name}</p>
      <p>{props.dates}</p>
    </div>
  );
}