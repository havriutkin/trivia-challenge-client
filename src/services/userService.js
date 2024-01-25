const baseUrl = process.env.REACT_APP_BASE_API;

/* ---------- Statistics ---------- */
export const requestStatistics = async (userId) => {
    const url = `${baseUrl}/user/statistics/${userId}`;

    try {
        const response = await fetch(url).then(res => res.json())
                        .catch(err => {throw new Error('Server Error.')});
        return response.data;
    } catch(err) {
        return {}
    }
}
