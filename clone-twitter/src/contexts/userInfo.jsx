import { createContext } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
	/*
    aqui obtendríamos los datos, por ejemplo de un reducer o accediendo 
    directamenete a la local Storag, hay varias formas, pero como es una 
    clonación de la UI, no es necesario una implementación
    */
	const imgUser = "./images/andres.jpeg";
	const name = "Andrés Reinaldo Cid";
	const userName = "PacoElButanero";
	const subUserName = "PacoButanero_21";
	const isVerified = true;
	const pubDate = "10h";

	return (
		<UserInfoContext.Provider
			value={{
				imgUser,
				name,
				userName,
				subUserName,
				isVerified,
				pubDate,
			}}
		>
			{children}
		</UserInfoContext.Provider>
	);
}
