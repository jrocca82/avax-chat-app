import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

type ChatCardProps = {
    getMessages: (key: string) => Promise<void>;
    name: string;
    publicKey: string;
}

const ChatCard = ({getMessages, name, publicKey} : ChatCardProps) => {
	return (
		<Box onClick={() => getMessages}>
            <Heading>{name}</Heading>
            <Text>{" "}
            {publicKey.length > 20
              ? publicKey.substring(0, 20) + " ..."
              : publicKey}{" "}</Text>
        </Box>
	);
};

export default ChatCard