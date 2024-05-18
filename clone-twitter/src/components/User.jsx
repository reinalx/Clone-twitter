import { useContext } from "react";
import { UserInfoContext } from "../contexts/userInfo";
import { More } from "../icons/More";

export function User() {
	const { imgUser, name, userName } = useContext(UserInfoContext);

	return (
		<div className="card-user">
			<img className="img-user" src={imgUser} alt="foto usuario" />
			<div className="names-user">
				<span className="firstName-user">{name} </span>
				<span className="userName-user">@{userName} </span>
			</div>
			<span className="more-user">
				<More />
			</span>
		</div>
	);
}
