
export const fetchData = async() =>
{
    try{
            const respons=await fetch("https://jsonplaceholder.typicode.com/todos");
            const data=await respons.json();
            return data;
    }catch(e)
    {
        console.log(e);
    }
}