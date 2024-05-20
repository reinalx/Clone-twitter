import { SideHeader } from "./SideHeader";
import { WhoToFollow } from "./SidebarHome/WhoToFollow";

export function Sidebar() {
	return (
		<div className="sidebar">
			<SideHeader />
			<div className="sidebar-content">
				<aside className="sidebar-premium">
					<h3>Suscribe to Premium</h3>
					<p>
						Subscribe to unlock new features and if eligible, receive a share of
						ads revenue.
					</p>
					<a href="https://twitter.com/i/premium">Suscribe</a>
				</aside>
				<div className="sidebar-elem">
					<WhoToFollow />
				</div>
				<div className="sidebar-elem"></div>
				<footer className="sidebar-footer"></footer>
			</div>
		</div>
	);
}
