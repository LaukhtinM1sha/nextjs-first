import Link from "next/link";

export default function Header(){
    return(
        <header className="logotype flex items-center justify-center">
            <div><img src="https://sun1-98.userapi.com/s/v1/ig2/iWBTneYT78BPP31LX8fS13-WdosDIHmknR21wBimoKyJAuAvW4gsFRLQfZsd2W8wtjZ97KUe3TAtX_ZiXevN6gpT.jpg?size=200x200&quality=95&crop=0,0,640,640&ava=1"alt="" /></div>
            <div className="flex">
                <Link href="/users">Users</Link>
                <Link href="/users/profile">Products</Link>
            </div>
        </header>
    )
}