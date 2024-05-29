import { useState } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { MenuList } from "./components/Menu/MenuList";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { User } from "./components/User";

function App() {
	const [count, setCount] = useState(0);

	// Tengo que abstraer el menu a un componente aparte, para que pueda ser reutilizado
	return (
		<body className="body-twitter">
			<header className="twitter-header">
				<div>
					<div className="twitter-header-content">
						<div className="twitter-menu">
							<div>
								<div className="logo">
									<img
										width={46}
										src="https://graffica.ams3.digitaloceanspaces.com/2023/07/F1ySdm9WYAIbjHo-1024x1024.jpeg"
										alt="logo twitter"
									/>
								</div>
								<div className="menu-list">
									<MenuList />
								</div>
								{/* rome-ignore lint/a11y/useButtonType: <explanation> */}
								<button className="bt-post">Post</button>
							</div>
							<footer className="footer-list">
								<User />
							</footer>
						</div>
					</div>
				</div>
			</header>
			<main className="twitter-main">
				<section className="main-content">
					<div>
						<div className="main-feed">
							<Feed />
						</div>
						<div className="main-sidebar">
							<Sidebar />
						</div>
					</div>
				</section>
			</main>
		</body>
	);
}

//<div className="feed-element"><DoPost imgUser={imgUser} /></div>

export default App;
