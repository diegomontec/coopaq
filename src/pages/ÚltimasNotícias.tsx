import AlertTI from '../assets/Operacional TI/Warning - Manutenção.png'

// const newsItems = [
//     {
//       photo: 'path/to/photo1.jpg',
//       title: 'Notícia 1',
//       subtitle: 'Subtitle 1'
//     },
//     {
//       photo: 'path/to/photo2.jpg',
//       title: 'Notícia 2',
//       subtitle: 'Subtitle 2'
//     },
// ];

function ÚltimasNotícias() {

  return (
    <div>
      <div className='container'>
        {/* {newsItems.map((item, index) => (
          <NewsItem
            key={index}
            photo={item.photo}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))} */}
        <div className='d-flex justify-content-center'>
          <img loading='lazy' className='AlertaManuteção' src={AlertTI} alt="Manutenção" />
        </div>
      </div>
    </div>
  )
}

export default ÚltimasNotícias
