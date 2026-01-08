import Link from 'next/link';

interface ButtonProps {
    text: string;
    href: string;
    external?: boolean; // Opens in new tab if true
    variant?: 'primary' | 'outline';
    className?: string;
}

export const Button = ({ 
    text, 
    href, 
    external = false, 
    variant = 'primary',
    className = '' 
}: ButtonProps) => {
    const baseClasses = "rounded-lg p-2 font-medium transition-colors duration-200";
    
    const variantClasses = {
        primary: "bg-[#124477] border-white border-2 text-white text-center hover:bg-[#1a5575]",
        outline: "bg-transparent border-[#124477] border-2 text-[#124477] hover:bg-[#124477] hover:text-white"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (external) {
        return (
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={combinedClasses}
            >
                {text}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedClasses}>
            {text}
        </Link>
    );
};
