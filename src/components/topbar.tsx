import { EllipsisVertical, MenuOutline, NotificationsOutline } from 'react-ionicons'
import { TopBar } from '../styles/navbar'

export default function TopBar_() {
  return (
    <TopBar>
      <div style={{display: 'flex'}}>
        <MenuOutline width="24px" height="24px" color="#ffffff" onClick={() => alert('Not working yet!')} />
        <h2>Home</h2>
      </div>
      <div style={{display: 'flex'}}>
        <NotificationsOutline width="24px" height="24px" color="#ffffff" onClick={() => alert('Not working yet!')} />
        <EllipsisVertical width="24px" height="24px" color="#ffffff" cssClasses="config" onClick={() => alert('Not working yet!')} />
      </div>
    </TopBar>
  )
}