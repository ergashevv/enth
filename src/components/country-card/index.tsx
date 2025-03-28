import Image from "next/image";

interface CountryCardProps {
  name: string;
  flag: string;
}

export function CountryCard({ name, flag }: CountryCardProps) {
  return (
    <div className="bg-white rounded-xl px-4 py-3 sm:px-4 sm:py-4 flex items-center gap-3 shadow-sm">
      <Image
        src={flag || "/placeholder.svg"}
        alt={`Flag of ${name}`}
        width={24}
        height={24}
        className="rounded-sm min-w-[24px]"
      />
      <span className="text-gray-900 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </span>
    </div>
  );
}