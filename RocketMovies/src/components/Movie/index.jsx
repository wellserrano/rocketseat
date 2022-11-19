import { Container } from "./styles";

import { AiOutlineStar, AiFillStar} from 'react-icons/ai'

import { Tag } from "../Tag"

export function Movie({ data }) {
  return (
    <Container>
      <h2>{ data.title }</h2>

      <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
      
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