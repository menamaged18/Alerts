'use client'
import { useState } from "react";
import Alert from "../../components/alert/Alert";
import { BellRing, CircleAlert, Check, ShieldAlert, Info} from "lucide-react";

export default function Home() {
  const [alerts, setAlerts] = useState({
    "alert": 1,
    "warning": 1,
    "success": 1,
    "error": 1,
    "info": 1,
    "fixed-warning": 0,
  });

  const removeAlert = (type:string) => {
    if (type === "alert"){
      setAlerts(perv => ({
        ...perv, 
        ["fixed-warning"]: 1
      }));    
    }else{
      setAlerts(perv => ({
        ...perv, 
        [type]: 0
      }));
    }
  }

  return (
    <div className="flex flex-col justify-self-center p-10 pl-20 pr-20 gap-7 w-full">
      {alerts["fixed-warning"] == 1 && 
        <Alert type="fixed-warning" title="Warning" icon={<CircleAlert />} 
          description={"Can not remove this Alert!!!!"} 
          onC={removeAlert}
        />
      }
      {alerts.alert == 1 && <Alert type="alert" title="alert" icon={<BellRing />} description={"Alert Discription"} onC={removeAlert}/>}
      {alerts.warning == 1 && <Alert type="warning" title="warning" icon={<CircleAlert /> } description={"warning Discription"} onC={removeAlert} />}
      {alerts.success == 1 && <Alert type="success" title="success" icon={<Check />} description={"success Discription"} onC={removeAlert} />}
      {alerts.error == 1 && <Alert type="error" title="error" icon={<ShieldAlert />} description={"error Discription"} onC={removeAlert} />}
      {alerts.info == 1 && <Alert type="info" title="info" icon={<Info />} description={"info Discription"} onC={removeAlert} />}      
    </div>
  );
}
