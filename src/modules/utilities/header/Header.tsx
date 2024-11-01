import { Avatar } from '@mui/material'
import { ChevronRight, NotificationsNone } from '@mui/icons-material'
import './_header.scss'

const Header = () => {
  return (
    <div className='header'>
      <figure>
        <span>
          <ChevronRight fontSize='large'/> <small>-</small>
        </span>
        tabler
      </figure>
      <div className='profile'>
        <button>Source code</button>
        <span>
          <NotificationsNone fontSize='large'/>
          <small></small>
        </span>
        <div className='avatar'>
          <Avatar className='icon'/>
          <div className='name'>
            <strong>Jane Pearson</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header