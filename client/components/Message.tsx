import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

type MessageProps = {
    //timestamp: string;
    sender: string | undefined;
    //data: string | undefined;
}

const Message = ({sender}: MessageProps) => {
    return (
        <Box>
            {/* <Heading>{timestamp}</Heading> */}
            <Text>{sender}</Text>
            {/* <Text>{data}</Text> */}
        </Box>
    )
};

export default Message;