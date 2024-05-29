import { listUsers } from "../../../const";
import { WhoToFollowItem } from "./WhoToFollowItem";

export function WhoToFollow() {
	return (
		<div className="whoFollow">
			<h3 className="title">Who to follow</h3>
			<div className="content">
				{listUsers.map((user) => (
					<WhoToFollowItem user={user} />
				))}
			</div>
		</div>
	);
}
