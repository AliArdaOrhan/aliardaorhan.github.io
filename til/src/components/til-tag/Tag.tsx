interface TILTagProps {
  tag: string;
}

const TILTag: React.FC<TILTagProps> = ({ tag }) => (
  <span className="text-sm bg-red-500 text-white px-2 py-1 rounded mr-3">
    {tag}
  </span>
);

export default TILTag;