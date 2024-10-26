import { ButtonProps } from "../Interfaces/interfaces"

const Square = ({value, onSquareClick}: ButtonProps) => {
    return (
      <button 
        className='square'
        onClick={onSquareClick}
        >
        {value}
      </button>
    )
  }

  export default Square