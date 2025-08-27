import "./butten.css";

export default function Button(props: any) {
  return (
    <button className={`button
      ${props.name === "Friend" && "bg_green"}
      ${props.name === "Teacher" && "bg_blue"}
      ${props.name === "Student" && "bg_purple"}
      `} type="submit">click</button>
  )
}
