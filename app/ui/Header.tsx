export const Header = () => {
    return (
        <div className="w-full h-[10vh] flex items-center justify-between shadow-xl p-3 bg-background z-99 sticky top-0 " id='site-header'>
            {/* Left logo */}
            <img 
                src="/logos/iaat-logo.svg" 
                alt="Logo" 
                className="h-full object-contain"
            />
            
            {/* Right endorsement */}
                <img 
                    src="/logos/uni-mel-logo.svg" 
                    alt="Endorsement logo" 
                    className="h-full object-contain"
                />
        </div>
    )
};
