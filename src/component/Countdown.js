import countdown from "countdown";
import { useEffect, useState } from "react";

export default function Countdown(props) {
  const dueDate = props.dueDate;
  const [timeSpan, setTimeSpan] = useState(countdown(dueDate));
  useEffect(() => {
    setInterval(() => {
      setTimeSpan(countdown(dueDate));
    }, 1000);
  });
  console.log(dueDate);
  return (
    <div className="flex">
      <p>{timeSpan.hours}h</p>
      <p>{timeSpan.minutes}m</p>
      <p>{timeSpan.seconds}s</p>
    </div>
  );
}
