import { listUsers } from "../../const";
import { WhoToFollowUser } from "./WhoToFollowUser";

export function WhoToFollow() {
	return (
		<div className="whoFollow">
			<h3 className="title">Who to follow</h3>
			<div className="content">
				{listUsers.map((user) => (
					<WhoToFollowUser user={user} />
				))}
			</div>
		</div>
	);
}
