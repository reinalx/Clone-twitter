import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserInfoProvider } from "./contexts/userInfo.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserInfoProvider>
			<App />
		</UserInfoProvider>
	</React.StrictMode>,
);
