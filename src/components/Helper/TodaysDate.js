class TodaysDate{
     getDate() {
        const today = new Date();
        // const month = today.getMonth() + 1;
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Adds leading 0 if needed
        const year = today.getFullYear();
        // const date = today.getDate();
        const date = String(today.getDate()).padStart(2, '0'); // Adds leading 0 if needed
        return `${year}-${month}-${date}`;
      }
}
const myInstance = new TodaysDate();
export default myInstance;
