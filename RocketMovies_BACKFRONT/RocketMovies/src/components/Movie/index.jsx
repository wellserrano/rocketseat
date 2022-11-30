import { Container } from "./styles";

import { AiOutlineStar, AiFillStar} from 'react-icons/ai'

import { Tag } from "../Tag"

export function Movie({ data, ...rest }) {
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


  return (
    <Container {...rest}>
      <h2>{ data.title }</h2>

      {
        starCount(data.rate)
      }

      <div className="description-container">
        <span> 
          { data.description }
        </span>
      </div>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(
              (tag, index) => <Tag key={ index++ } title={ tag } />
            )
          }
        </footer>
      }

    </Container>
  )
}