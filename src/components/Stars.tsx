import "./Stars.css"

const Star = () => {
  return (
    <li>
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    </li>
  )
}

type TStarCount = 0 | 1 | 2 | 3 | 4 | 5;

type TStarCountProps = {
  count: TStarCount;
}

export default function Stars({count=0}: TStarCountProps ) {
    const stars: number[] = Array.from(Array(5).keys()).map(i => i + 1);
  if (count < 1 || count > 5) {
    return null;}
  return (
    <ul className="card-body-stars clearfix">
    {stars.map((i: number) => { return <Star key={i}/>})
    } 
    </ul>
  )
}

