import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        src={"/avatar.png"}
        alt=""
        width={737}
        height={678}
        className="translate-z-0 w-full h-full "
      />
    </div>
  );
};

export default Avatar;
