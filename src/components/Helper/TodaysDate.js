class TodaysDate{
     getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
      }
}
const myInstance = new TodaysDate();
export default myInstance;
