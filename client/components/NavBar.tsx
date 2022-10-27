import React from "react";
import { Button, Text, Flex } from "@chakra-ui/react";

type NavBarProps = {
	login: () => Promise<void>;
	username?: string;
};

const NavBar = ({ login, username }: NavBarProps) => {
	return (
		<Flex w="100%" justify="flex-end" padding="30px">
			{username ? (
				<Text>Signed in as {username}</Text>
			) : (
				<Button padding="10px" borderRadius="30px" border="none" bgColor="orange" onClick={login}>Connect to Metamask</Button>
			)}
		</Flex>
	);
};

export default NavBar;
