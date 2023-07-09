import Link   from "next/link";

import {RiLinkedinLine ,RiGithubLine } from  'react-icons/ri'
const Socials = () => {
  return <div className="flex items-center text-lg gap-x-5">

    <Link href={''} className='hover:text-accent transition-all duration-300'> 
    <RiLinkedinLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'> 
    <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
