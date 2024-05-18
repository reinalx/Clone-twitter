import { useState } from "react";
import "./App.css";
import { Feed } from "./components/Feed";
import { MenuList } from "./components/Menu/MenuList";
import { User } from "./components/User";

function App() {
	const [count, setCount] = useState(0);

	// Tengo que abstraer el menu a un componente aparte, para que pueda ser reutilizado
	return (
		<body>
			<header className="twitter-header">
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
						<button className="bt-post">Post</button>
					</div>
					<footer className="footer-list">
						<User />
					</footer>
				</div>
			</header>
			<main className="twitter-main">
				<section className="main-content">
					<div className="main-feed">
						<Feed />
					</div>
				</section>
			</main>
		</body>
	);
}

//<div className="feed-element"><DoPost imgUser={imgUser} /></div>

export default App;
