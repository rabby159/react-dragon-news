import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindOnUs = () => {
    return (
        <div className='p-4'>
            <h2 className="text-2xl font-semibold">Find Us On</h2>
            <div className='my-3 p-3 '>
                <a className='flex items-center gap-2 border rounded-t-lg p-4' href="https://www.facebook.com/" target='blank'>
                    <FaFacebookF></FaFacebookF>
                    Facebook
                </a>
                <a className='flex items-center gap-2 border-x-2 p-4' href="https://twitter.com/" target='blank'>
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='flex items-center gap-2 border rounded-b-lg p-4' href="https://www.instagram.com/" target='blank'>
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
        </div>
    );
};

export default FindOnUs;