interface Props {
  title: string;
  handel: string;
  imageSrc: string;
}
const profileCard = ({ title, handel, imageSrc }: Props) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <img className="w-full " src={imageSrc} alt="Pda Logo" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{handel}</p>
        </div>
      </div>
    </>
  );
};

export default profileCard;
