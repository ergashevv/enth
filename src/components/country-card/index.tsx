import Image from "next/image"

interface CountryCardProps {
    name: string
    flag: string
}

export function CountryCard({ name, flag }: CountryCardProps) {
    return (
        <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <Image src={flag || "/placeholder.svg"} alt={`Flag of ${name}`} width={24} height={24} className="rounded-sm" />
            <span className="text-gray-900">{name}</span>
        </div>
    )
}