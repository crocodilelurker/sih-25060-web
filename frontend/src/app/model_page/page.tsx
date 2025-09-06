import Link from "next/link";

export default function ModelPage() 
{
    return (
        <div>
            Model Page
            <br/>
            <Link href = "/waste_management">
            <span> Waste Management Page</span>
            </Link>
        </div>
    )
}