import { Container, MovieHeader, TagSection, MovieDetails, Content } from './styles'

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { Tag } from '../../components/Tag'

import { api } from '../../services/api'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams();

  function test(){
    console.log(data)
  }

  function starCount(rating) {
    let stars = [
      <AiOutlineStar key={1} />,
      <AiOutlineStar key={2} />,
      <AiOutlineStar key={3} />,
      <AiOutlineStar key={4} />,
      <AiOutlineStar key={5} />
    ];


    for (let index = 0; index < rating; index++) {
      stars[index] = <AiFillStar key={index} />
      
    }
    
    return stars

  }

  useEffect(() => {
    async function fetchDetails() {

      const response = await api.get(`/movie?id=${params.id}`)
      setData(response.data)

    }

    fetchDetails()
  }, []);


  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <div className="btn-back">
              <TextButton title="Voltar" icon={FiArrowLeft} to="/" />
            </div>

            <MovieHeader>
              <div className="title-stars">
                <h1>{ data.title }</h1>
                {/* this Star thing should be a component */}
                { starCount(data.rating) } 
              </div>
              <div className="creator-time">
                <img src="http://github.com/wellserrano.png" alt="User picture" />
                <p>Por { data.user_name }</p>
                <FiClock onClick={test}/>
                <p>{ data.updated_at }</p>
              </div>
            </MovieHeader>

            <TagSection>
              {
                data.tags.map((tag, index) => (
                  <Tag key={index++} title={tag} />
                ))
              }
            </TagSection>

            <p>
              { data.description }
            </p>
          </Content>
        </main>
      }
      
    </Container>
  )
}