import { useState } from 'react'
import { Avatar, Popper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, NotificationsNone } from '@mui/icons-material'
import './_header.scss'

const Header = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }
  const dropdown =
  <div className='dropdown'>
    <p onClick={() => navigate('/login')}>Login</p>
  </div>
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
        <div>
          <div onClick={(e: any) => handleClick(e)} className='avatar'>
            <Avatar className='icon'/>
            <div className='name'>
              <strong>Jane Pearson</strong>
              <small>Administrator</small>
            </div>
          </div>
          <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} sx={{p:'1rem'}}>
            {dropdown}
          </Popper>
        </div>
      </div>
    </div>
  )
}

export default Header