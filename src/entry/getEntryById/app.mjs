export const lambdaHandler = async (event, _) => {
    const data = {
        id: 1,
        title: 'Base 1',
        content: 'This is the first Base entry',
    };

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            data: data
        }),
    };
    return response;
};
