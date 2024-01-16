import getUsersById from "@/app/libs/getUsersById"
import Username from "@/components/username"

export default async function UserPage({params: {id}}){
    const user = await getUsersById(id)
    return(
        <div className="flex flex-col text-xl w-fit mx-auto gap-y-8 mt-48">
            <p className="border text-blue-600">Name: {user.name}</p>
            <p className="border text-blue-600">Email: {user.email}</p>
            <p className="border text-blue-600">Username: {user.username}</p>
            <p className="border text-blue-600">Phone: {user.phone}</p>
        <Username username={user.name}/>
        </div>
    )
}
