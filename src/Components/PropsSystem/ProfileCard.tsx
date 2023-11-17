interface Props {
  title: string;
  handle: string;
  imageSrc: string;
}
const profileCard = ({ title, handle, imageSrc }: Props) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img className="w-full " src={imageSrc} alt="Pda Logo" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{handle}</p>
        </div>
      </div>
    </>
  );
};

export default profileCard;
