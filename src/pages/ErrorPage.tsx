import { Flex, Text } from "@mantine/core"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
            <Flex direction='column'
            justify='center'
            align='center'
            mt='lg'>
                <Text component='h2'>{error.status}</Text>
                <Text component='h3'>{error.statusText}</Text>
            </Flex>
        )
    }
    throw error

}

export { ErrorPage }