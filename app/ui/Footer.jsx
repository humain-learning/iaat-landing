import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <div className="w-full bg-[#124477] py-5 px-10 flex flex-col justify-between items-center">
            <div className="grid grid-cols-2 text-white text-md w-full md:max-w-[70%]">
                <div className="flex flex-col gap-2 text-start">
                    <a href="https://www.iamateacher.in/terms-conditions.php" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Use</a>
                    <a href="https://www.iamateacher.in/privacy-policy.php" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
                    <a href="https://example.com/about" target="_blank" rel="noopener noreferrer" className="hover:underline">About Us</a>
                </div>
                <div className="flex flex-col gap-2 text-end">
                    <a href="https://example.com/team" target="_blank" rel="noopener noreferrer" className="hover:underline">Team</a>
                    <a href="https://example.com/advisory" target="_blank" rel="noopener noreferrer" className="hover:underline">Advisory Board</a>
                    <a href="https://example.com/faqs" target="_blank" rel="noopener noreferrer" className="hover:underline">FAQs</a>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center py-5 w-full">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={28} color="white" />
                </a>
                <a href="mailto:info@example.com" aria-label="Email">
                    <MdEmail size={28} color="white" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF size={28} color="white" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={28} color="white" />
                </a>
            </div>
        </div>
    );
};