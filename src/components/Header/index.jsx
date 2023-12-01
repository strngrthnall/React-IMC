import {
  container,
  titleContainer,
  titleText,
  githubContainer,
  githubIcon,
  gridContainer1,
  gridContainer2
} from './Header.module.css'

const githubIconLink = 'https://raw.githubusercontent.com/strngrthnall/React-IMC/main/src/assets/github.svg'
const githubIconPath = '../../assets/github.svg'

const Header = () => {
  return (
    <div className={container}>
      <div>
      </div>
      <div className={gridContainer1}>
        <div className={titleContainer}>
          <h1 className={ titleText }>IMC</h1>
        </div>
      </div>
      <div className={gridContainer2}>
        <div className={ githubContainer }>
          <a href="https://github.com/strngrthnall/React-IMC">
            <img
            src={ githubIconPath }
            srcSet={ githubIconLink  }
            className={ githubIcon }
          />
          </a>
        </div>
      </div>  
    </div>
  )
}

export default Header