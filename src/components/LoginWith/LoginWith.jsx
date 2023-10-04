import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginWith = () => {
    return (
        <div className='p-4'>
            <h2 className="text-2xl font-semibold">LogIn With</h2>
            <div className='my-3'>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className='btn btn-outline w-full mt-3'>
                    <FaGithub></FaGithub>
                    GitHub
                </button>
            </div>
        </div>
    );
};

export default LoginWith;