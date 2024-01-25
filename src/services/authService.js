const baseUrl = process.env.REACT_APP_BASE_API;

/* ---------- Auth ---------- */
export const createAccount = async (userData) => {
    const url = `${baseUrl}/auth/register`;
    const json = JSON.stringify(userData);

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    }

    await fetch(url, settings)
        .then(res => res.json())
        .catch(err => {throw new Error('Server Error.')});
}

export const login = async (userData) => {
    const url = `${baseUrl}/auth/login`;
    const json = JSON.stringify(userData)

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: json
    }

    const response = await fetch(url, settings)
        .catch(err => {throw new Error('Server Error.')});
    const data = await response.json();

    if (response.status === 200){
        return data
    } else {
        throw new Error(data.message);
    }
}

export const logout = async () => {
    const url = `${baseUrl}/auth/logout`;
    const res = await fetch(url, {method: 'POST', credentials: "include"})
                        .catch(err => {throw new Error('Server Error.')});
    return res.ok;
}

export const validateAuth = async () => {
    const url = `${baseUrl}/auth/validate`;
    try {
        const response = await fetch(url, {credentials: "include"})
                                .catch(err => {throw new Error('Server Error.')});
        return [response.ok, await response.json()];
    } catch(err){

    }
}
