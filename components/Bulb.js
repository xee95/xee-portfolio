import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge 
  animate-pulse duration-75 z-30 w-[200px] xl:w-[250px]
  "
    >
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
