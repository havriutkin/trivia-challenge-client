/* ---------- Statistics ---------- */
export const requestStatistics = async (userId) => {
    const url = `http://localhost:4000/api/user/statistics/${userId}`;

    try {
        const response = await fetch(url).then(res => res.json())
                        .catch(err => {throw new Error('Server Error.')});
        return response.data;
    } catch(err) {
        return {}
    }
}
