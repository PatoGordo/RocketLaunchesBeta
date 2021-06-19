import styled from "styled-components";
import { ChevronForwardOutline } from 'react-ionicons'

export const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const ListItem_ = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    text-align: start;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: .65rem;
  }
`

interface ListItemPropsTypes {
  imgUrl: string;
  rocketName: string;
  rocketLaunchDate: string;
}

export function ListItem(props: ListItemPropsTypes) {
  return (
    <ListItem_>
      <img src={props.imgUrl} alt="🚀" />
      <div>
        <h4>{props.rocketName}</h4>
        <small>{props.rocketLaunchDate}</small>
      </div>
      <ChevronForwardOutline width="24px" height="24px" color="#ffffff" onClick={() => alert('not working yet')} />
    </ListItem_>
  )
}