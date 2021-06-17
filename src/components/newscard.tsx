import { Newspaper } from 'react-ionicons'
import { NewsCard } from '../styles/cards'

interface PropsTypes {
  website: string;
  publishedAt: number;
  articleName: string;
  articleDescription: string;
}

export default function NewsCard_(props: PropsTypes) {
  return (
    <NewsCard>
      <div className="top">
        <Newspaper cssClasses="icon" height="30px" width="30px" color="#ffffff" />
        <div>
          <h3>{props.website}</h3>
          <small>{new Date(props.publishedAt).toLocaleString('en-us', { timeZoneName: 'short' })}</small>
        </div>
      </div>

      <div className="body">
        <div className="article_details">
          <h3>{props.articleName}</h3>
          <p>{props.articleDescription}</p>
        </div>
      </div>
    </NewsCard>
  )
}