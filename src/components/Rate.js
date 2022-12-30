import StarOn from '../assets/images/star-on.png';
import StarOff from '../assets/images/star-off.png';

function Rate(props) {
  let stars = [];
  const range = 5;
  const {value} = props;

  for(let i=0;i<range;i++) {
    let starType = StarOff;

    if(value >= i+1)
      starType = StarOn;

    stars.push(<img alt='star' key={i} src={starType} className='h-5'/>);
  }

  return (
    <div className='flex items-center gap-2'>
      <h3>{value}</h3>
      <div {...props}>
        {[...stars]}
      </div>
    </div>
  )
}

export default Rate;