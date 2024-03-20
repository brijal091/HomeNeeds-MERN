import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"

interface Props {
  value: number;
  text: string;
}

export default function Review({value, text}: Props) {
  return (
    <div>
      <div className="rating">
        {/* <FaStar />, <FaRegStar />, <FaStarHalfAlt /> */}
      <span>
        {value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
      </span>
      <span>
        {value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
      </span>
      <span>
        {value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
      </span>
      <span>
        {value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
      </span>
      <span>
        {value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt/> : <FaRegStar/>}
      </span>
      <span className="mx-2"> {text && text} reviews</span>
      </div>
    </div>
  )
}
