import Link from "next/link";
export const metadata = {
    title:"Ai Model 🤖",
    description:"AI Page for Waste Management"
}

export default function ModelPage() 
{
    return (
        <div>
            Model Page
            <br/>
            <Link href = "model_page/waste_management">
            <span> Waste Management Page</span>
            </Link>
            //swagatsahu556
        </div>
    )
}