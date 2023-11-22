import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.jpg"
      width={30}
      height={30}
      alt="avatar"
    />
  );
};

export default Avatar;
