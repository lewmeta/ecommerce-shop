import { Billboard as BillboardType }
    from "@/types";

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {

    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden relative">
            <div className="w-full h-full z-10 relative">
                <div
                    className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${data?.imageUrl})` }}
                >
                    <div className="absolute top-0 left-0 bottom-0 bg-black right-0 inset-0 opacity-20 rounded-xl z-10" />
                    <div className="h-full w-full flex flex-col justify-center items-center gap-y-8 text-white text-center ">
                        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs z-20">
                            {data?.label}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard;