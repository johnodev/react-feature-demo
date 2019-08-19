export const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:3001/albums");
        const dataList = await response.json();
        return dataList;
    } catch (e) {
        console.log(e);
    }
};