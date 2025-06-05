import './Card.css'; 


function Card({ CardTitle, CardImg, CardDescription }: { CardTitle: string; CardImg: string; CardDescription: string }) { // 'props: any' to accept props, including children
  return ( 
    <>
      <div className='CardContainer'>
        <img className='CardImg' src={CardImg} alt='CardImg'/>
        <h3 className='CardTitle'>{CardTitle}</h3>
        <p className='CardDescription'>{CardDescription}</p>
      </div>
    </>
  );
}

export default Card;