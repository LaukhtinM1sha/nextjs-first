export const metadata = {
    title: 'Users Page'
}

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return res.json()
}

export default async function Page() {
    const data = await getData()
    return <h1>{data.title}</h1>
}