export const Header = () => {
    return (
        <div className="w-full max-h-[10vh] flex items-center justify-between p-6 bg-background shadow-xl z-100 sticky top-0 ">
            {/* Left logo */}
            <img 
                src="/logos/iaat-logo.svg" 
                alt="Logo" 
                className="max-h-full object-contain"
            />
            
            {/* Right endorsement */}
            <div className="flex items-center gap-3">
                <img 
                    src="/logos/uni-mel-logo.svg" 
                    alt="Endorsement logo" 
                    className="max-h-full object-contain"
                />
            </div>
        </div>
    )
};
