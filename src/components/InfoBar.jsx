function InfoBar() {
    return (
            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                    <span className="font-medium text-lg">6.90%</span>
                    <span className="text-stone-600">Alcohol</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-lg">Cheongju</span>
                    <span className="text-stone-600">Type</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-lg">$22</span>
                    <span className="text-stone-600">Price</span>
                </div>
            </div>
    )
}

export default InfoBar;