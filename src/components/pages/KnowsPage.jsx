import React from 'react'
import Container from 'react-bootstrap/Container';
import { AppContext } from '../../App';

const KnowsPage = () => {
  const KnowsPageContext = React.useContext(AppContext);
  return (
    <div>
      {[...KnowsPageContext.articles].map((obj,i)=>{
        return <div>
          {console.log('что прошло')}
          <div className='bg-secondary py-4'>
            <Container className='knows_page_article_header'>
              <span>Статья {obj.number} {obj.title}</span>
            </Container>
          </div>
            <Container className=''>
              <p className='knows_page_p'>{obj.text}</p>
            </Container>
        </div>
      })}
    </div>
  )
}

export default KnowsPage