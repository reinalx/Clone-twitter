import { BookMark } from "../../icons/BookMark";
import { Comment } from "../../icons/Comment";
import { Like } from "../../icons/Like";
import { More } from "../../icons/More";
import { Retweet } from "../../icons/Retweet";
import { Share } from "../../icons/Share";
import { Verified } from "../../icons/Verified";

export function Pubs({
	imgUser,
	userName,
	subUserName,
	isVerified,
	pubDate,
	commentPub,
	imgPub,
	numComments,
	numLikes,
	numRetweets,
	numViews,
}) {
	return (
		<div className="pubs">
			<div className="container">
				<img className="img-user" src={imgUser} alt="foto del usuario" />
			</div>
			<div className="pubs-content">
				<header className="pubs-header">
					<div className="pubs-user">
						<span className="userName">{userName}</span>
						{isVerified && <Verified />}
						<span className="subUserName">
							{subUserName}·{pubDate}
						</span>
					</div>
					<span className="more-user">
						<More />
					</span>
				</header>
				<div className="pubs-comment">{commentPub}</div>
				<div className="pubs-img">
					{imgPub && (
						<img
							className="img-pub"
							src={imgPub}
							alt="foto de almeida cabron"
						/>
					)}
				</div>
				<footer className="pubs-footer">
					<div className="pubs-footer-element">
						<Comment />
						<span> {numComments}</span>
					</div>
					<div className="pubs-footer-element">
						<Retweet />
						<span> {numRetweets}</span>
					</div>
					<div className="pubs-footer-element">
						<Like />
						<span> {numLikes}</span>
					</div>
					<div className="pubs-footer-element">
						<span>icon</span>
						<span> {numViews}</span>
					</div>
					<div className="pubs-footer-element">
						<BookMark />
						<Share />
					</div>
				</footer>
			</div>
		</div>
	);
}
