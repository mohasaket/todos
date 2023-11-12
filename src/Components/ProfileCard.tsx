interface Props {
  title: string;
  handel: string;
}
const profileCard = ({ title, handel }: Props) => {
  return (
    <>
      <div>Title IS{title}</div>
      <div>Handel Is{handel}</div>
    </>
  );
};

export default profileCard;
