import { SideHeader } from "./SideHeader";
import { WhoToFollow } from "./SidebarHome/WhoToFollow";
import { Trends } from "./Trending/Trends";

export function Sidebar() {
	return (
		<div className="sidebar">
			<SideHeader />
			<div className="sidebar-content">
				<aside className="sidebar-premium">
					<h3 className="title">Suscribe to Premium</h3>
					<p className="subtitle">
						Subscribe to unlock new features and if eligible, receive a share of
						ads revenue.
					</p>
					<a className="bt" href="https://twitter.com/i/premium">
						<span className="bt-content">Subscribe</span>
					</a>
				</aside>
				<div className="sidebar-elem">
					<WhoToFollow />
				</div>
				<div className="sidebar-elem">
					<Trends />
				</div>
				<footer className="sidebar-footer"></footer>
			</div>
		</div>
	);
}
