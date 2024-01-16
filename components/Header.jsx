import Link from "next/link";

export default function Header(){
    return(
        <header className="logotype">
            <div>Logo</div>
            <div className="flex">
                <Link href="/users">Users</Link>
                <Link href="/users/profile">Products</Link>
            </div>
        </header>
    )
}