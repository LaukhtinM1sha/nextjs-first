import Link from "next/link"
import getUsers from "../libs/getUsers"


export default async function users(){
    const users = await getUsers()
    return (
        <ul className="flex flex-wrap gap-y-8 justify-center"> 
            {
                users.map((user) => (
                    <li key={user.id} className="mb-5 border w-1/5 mx-2 p-5 hover:text-white hover:bg-yellow-500 transition-all">
                        <Link href={`/users/${user.id}`}>
                        <p>{user.name}</p> 
                        </Link>
                    </li>
                    )
                )
            }
        </ul>
    )
}