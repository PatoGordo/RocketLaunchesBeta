import { List, ListItem } from '../styles/rockets-page'
import { ChevronForwardOutline } from "react-ionicons";

export default function Rockets() {
  return (
    <div style={{marginTop: '50px'}}>
      <h1>Know the rockets</h1>
      <List>
        <ListItem 
          imgUrl="https://blogs.nasa.gov/commercialcrew/wp-content/uploads/sites/230/2020/05/NHQ202005210007.jpg"
          rocketName="Falcon 9"
          rocketLaunchDate="First test June 4, 2010."
        />
      </List>
    </div>
  )
}