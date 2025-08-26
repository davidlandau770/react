import Button from "./Button";

export default function ProfilCard(props: any) {
    return (
        <div className="card">
            <img src='https://mashuhome.co.il/wp-content/uploads/2024/06/%D7%9E%D7%A8%D7%90%D7%94-%D7%A2%D7%92%D7%95%D7%9C%D7%94-%D7%A2%D7%A5-%D7%98%D7%91%D7%A2%D7%99-scaled.jpeg' className="img" />
            <h3 className="h3">{props.name}</h3>
            <p className="p">david is good men. nice to work with him.</p>
            <Button name={props.name} />
        </div>
    )
}
