const Separator = ({ text }) => {
  return (
    <div className="flex items-center w-full my-8">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && (
        <div className="px-4 text-sm text-blue-500 uppercase tracking-wider font-medium">
          {text}
        </div>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Separator;
