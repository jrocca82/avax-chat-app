import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	useDisclosure,
} from "@chakra-ui/react";

type NewChatProps = {
	addHandler: (name: string, publicKey: string) => Promise<void>;
};

const AddNewChat = ({ addHandler }: NewChatProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				border="none"
				color="white"
				m="20px"
				padding="10px"
				borderRadius="30px"
				onClick={onOpen}
				colorScheme="blue"
			>
				+ New Chat
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
				<ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
				<ModalContent>
					<ModalCloseButton />
					<ModalHeader>Add New Friend</ModalHeader>
					<ModalBody>
						<Input placeholder="Enter friend's public key" my="10px"/>
						<Input placeholder="Enter friend's name" my="10px"/>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" onClick={() => addHandler}>
							Add Friend
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddNewChat;
