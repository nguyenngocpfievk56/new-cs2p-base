export const lambdaHandler = async (event, _) => {
    const data = {
        id: 1,
        title: 'Base 1 version 2',
        content: 'This is the first Base entry',
    };

    const response = {
        data: data
    };
    return response;
};
