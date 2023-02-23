

export const DataApi = async() => {
    const respons = await fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"})
  const resjson=await respons.json();
  return resjson;
}
export const myfatchpost = async(data) => {
    const respons = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }

    )
  const resjson=await respons.json();
  return resjson;
}
// export default DataApi

