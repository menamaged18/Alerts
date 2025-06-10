import { CircleX } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";

interface Iprops {
  type: string,
  title: string,
  icon: ReactNode,
  description: string,
  onC: (type:string) => void
}

function alert({type, title, icon, description, onC}: Iprops) {
  return (
    <div className={type}>
      <div className="header">
        <div className="header">
          {icon}
          {title}          
        </div>
        <button className="close-icon" onClick={()=>{onC(type)}}>
          <CircleX />                 
        </button>
      </div>

      <p>
        {description}
      </p>
    </div>
  )
}

export default alert