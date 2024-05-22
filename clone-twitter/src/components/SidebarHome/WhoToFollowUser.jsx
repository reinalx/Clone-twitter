import { useState } from "react";
import { Verified } from "../../icons/Verified";

export function WhoToFollowUser({ user }) {
	const [isFollowed, setIsFollowed] = useState(user.isFollowed);
	const [mouseOver, setMouseOver] = useState(false);

	const handleMouseOver = () => {
		setMouseOver(true);
	};

	const handleMouseLeave = () => {
		setMouseOver(false);
	};

	const handleOnClick = () => {
		setIsFollowed(!isFollowed);
	};
	return (
		<div className="card-userToFollow">
			<div>
				<img className="img-user2" src={user.imgUser} alt="foto usuario" />
				<div className="names-user">
					<div className="ali-center">
						<span className="userName">{user.userName}</span>
						<span>{user.isVerified && <Verified size={20} />}</span>
					</div>
					<span className="subUserName">{user.subUserName} </span>
				</div>
			</div>
			{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				onClick={handleOnClick}
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
				onFocus={handleMouseOver}
				onBlur={handleMouseLeave}
				className={isFollowed ? "bt-unFollow" : "bt-follow"}
			>
				{isFollowed ? (
					<span>{mouseOver ? <>UnFollow</> : <>Following</>}</span>
				) : (
					<span>Follow</span>
				)}
			</button>
		</div>
	);
}
