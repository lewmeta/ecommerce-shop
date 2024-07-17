"use client"

import qs from "query-string"
import { Color, Size } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation';
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FiltersProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string
}

const Filters: React.FC<FiltersProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });

        router.push(url);
    }
    return (
        <div className='mb-8'>
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <Button key={filter.id}
                        className={cn("rounded-md text-sm text-gray-800 p-2 bg-white border border-e-gray-300", selectedValue === filter.id && "text-white bg-black")}
                        onClick={() => onClick(filter.id)}
                    >{filter.name}</Button>
                ))}
            </div>
        </div>
    )
}

export default Filters