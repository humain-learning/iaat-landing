import Link from 'next/link';

interface ButtonProps {
    text: string;
    href: string;
    external?: boolean; // Opens in new tab if true
    variant?: 'primary' | 'outline';
    className?: string;
    icon?: React.ReactNode; // Optional icon element
    download?: boolean; // If true, adds download attribute
}

export const PrimaryButton = ({ 
    text, 
    href, 
    external = false, 
    variant = 'primary',
    className = '',
    icon,
    download = false
}: ButtonProps) => {
    const baseClasses = "rounded-lg p-2 font-medium transition-colors duration-200";
    
    const variantClasses = {
        primary: "bg-[#124477] text-white text-center hover:bg-[#1a5575]",
        outline: "bg-transparent border-[#124477] text-[#124477] hover:bg-[#124477] hover:text-white"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (external || download) {
        return (
            <a 
                href={href} 
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={combinedClasses}
                download={download ? true : undefined}
            >
                {icon ? (
                    <span className="flex items-center justify-center gap-2">
                        {text}
                        {icon}
                    </span>
                ) : (
                    text
                )}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedClasses}>
            {icon ? (
                <span className="flex items-center justify-center gap-2">
                    {text}
                    {icon}
                </span>
            ) : (
                text
            )}
        </Link>
    );
};
