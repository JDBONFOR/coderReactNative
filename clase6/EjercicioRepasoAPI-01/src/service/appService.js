export const _getData = async (token) => {

    let result = await fetch('https://59f43db4-45ee-46fc-be0f-f13120391343.mock.pstmn.io/test?auto=chevrolet', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    let json = await result.json();
    return json
}


export const _postData = async (token, data) => {

    let result = await fetch('https://59f43db4-45ee-46fc-be0f-f13120391343.mock.pstmn.io/test2', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })

    let json = await result;
    return json.status
}