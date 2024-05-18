import { useContext } from "react";
import { pubs } from "../const";
import { UserInfoContext } from "../contexts/userInfo";
import { HeaderHome } from "./FeedHome/HeaderHome";
import { DoPost } from "./utils/DoPost";
import { Pubs } from "./utils/Pubs";

//Hacer una lista de objetos, cada objeto con el contenido de la pubs, y el nombre del usuario
export function Feed() {
	const { imgUser, userName, subUserName, isVerified, pubDate } =
		useContext(UserInfoContext);

	return (
		<>
			<header className="feed-header">
				<HeaderHome />
			</header>
			<div className="feed">
				<div className="feed-element">
					<DoPost imgUser={imgUser} />
				</div>
				{pubs.map((pub) => (
					<div className="feed-element">
						<Pubs
							imgUser={pub.imgUser}
							userName={pub.userName}
							subUserName={pub.subUserName}
							isVerified={pub.isVerified}
							pubDate={pub.pubDate}
							imgPub={"./images/almeida.jpeg"}
							commentPub={
								"Hilo con todos los BALONAZOS del Alcalde de Madrid, Jose Luis Martínez-Almeida "
							}
							numComments={pub.numComments}
							numLikes={pub.numLikes}
							numRetweets={pub.numRetweets}
							numViews={pub.numViews}
						/>
					</div>
				))}
			</div>
		</>
	);
}
