import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <div className="w-full bg-[#124477] py-5 px-10 flex flex-col justify-between items-center">
            <div className="grid grid-cols-2 text-white text-md w-full md:max-w-[70%]">
                <div className="flex flex-col gap-2 text-start">
                    <a href="https://www.iamateacher.in/terms-conditions.php" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Use</a>
                    <a href="https://www.iamateacher.in/privacy-policy.php" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
                    <a href="https://www.iamateacher.in/About-Us-Our-Vison-and-Approach.html" target="_blank" rel="noopener noreferrer"className="hover:underline">About Us</a>
                </div>
                <div className="flex flex-col gap-2 text-end">
                    <a href="https://www.iamateacher.in/About-Us-Our-Team.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Team</a>
                    <a href="https://www.iamateacher.in/About-Us-Our-Team.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Advisory Board</a>
                    <a href="#overview" className="hover:underline">FAQs</a>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center py-5 w-full">
                <a href="https://www.instagram.com/iamateacher.india/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={28} color="white" />
                </a>
                <a href="mailto:info@iamateacher.in" aria-label="Email">
                    <MdEmail size={28} color="white" />
                </a>
                <a href="https://www.facebook.com/iamateacher.india" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF size={28} color="white" />
                </a>
                <a href="https://www.linkedin.com/company/i-am-a-teacher" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={28} color="white" />
                </a>
            </div>
        </div>
    );
};