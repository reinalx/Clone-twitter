import { listUsers } from "../../const";

export function WhoToFollow() {
	return (
		<div className="whoFollow">
			<h3>Who to follow</h3>
			{listUsers.map((user) => (
				<div className="user">
					<img src={user.imgUser} alt="user" />
					<div className="user-info">
						<span>{user.userName}</span>
						<span>{user.subUserName}</span>
					</div>
				</div>
			))}
		</div>
	);
}
