import { useContext } from "react";
import { UserInfoContext } from "../contexts/userInfo";
import { MoreWhite } from "../icons/MoreWhite";

export function User() {
	const { imgUser, name, userName } = useContext(UserInfoContext);

	return (
		<div className="card-user">
			<img className="img-user" src={imgUser} alt="foto usuario" />
			<div className="names-user">
				<span className="userName">{name} </span>
				<span className="subUserName">@{userName} </span>
			</div>
			<span className="more-user">
				<MoreWhite />
			</span>
		</div>
	);
}
