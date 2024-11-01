import { slider } from './sliderData'
import { SliderData } from '../../../interface/slider'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import './_slider.scss'

const Slider = () => {
  return (
    <div className='slider'>
      <h2>Dashboard</h2>
      <div className='sliders'>
        {
          slider.map((slide: SliderData, i: number) => (
            <div key={i} className='slide'>
              <span>
                <strong>{slide.count}</strong>
                <span>{slide.title}</span>
              </span>
              <small className={`${slide.trend && 'up'}`}>
                {slide.trend ? '+' : '-'}
                {slide.percentage}%
                {slide.trend ? <KeyboardArrowUp fontSize='small'/> : <KeyboardArrowDown fontSize='small'/>}
              </small>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Slider