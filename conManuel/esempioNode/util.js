async function getBook(endpoint) {
    try {
        const response = await fetch(endpoint)
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (e) {
        console.error(e);
    }
}

module.exports = getBook;