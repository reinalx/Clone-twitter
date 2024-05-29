import { Trends } from "../Trending/Trends";
import { SideHeader } from "./components/SideHeader";
import { WhoToFollow } from "./components/WhoToFollow";
import "./sidebar.css";

export function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItems">
				<div>
					<div className="header">
						<SideHeader />
					</div>
					<div className="content">
						<aside className="elem-premium">
							<h3 className="title">Suscribe to Premium</h3>
							<p className="subtitle">
								Subscribe to unlock new features and if eligible, receive a
								share of ads revenue.
							</p>
							<a className="bt" href="https://twitter.com/i/premium">
								<span className="bt-content">Subscribe</span>
							</a>
						</aside>
						<div className="elem">
							<WhoToFollow />
						</div>
						<div className="elem">
							<Trends />
						</div>
						<footer className="sidebar-footer"></footer>
					</div>
				</div>
			</div>
		</div>
	);
}
