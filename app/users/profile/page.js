export default async function Page() {
    const data = await getData()
    return <h1>{data.body}</h1>
}

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return res.json()
}

export const metadata = {
    title: 'Profile Page'
}

