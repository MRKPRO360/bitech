import { FaWandMagicSparkles } from 'react-icons/fa6';

function WandWithText({ text }: { text: string }) {
  return (
    <div className="flex items-center  mb-4 gap-2 ">
      <FaWandMagicSparkles
        strokeWidth={2.5}
        className="w-7 h-7 md:w-10 md:h-10 text-primary"
      />
      <span className="text-primary font-bold text-base md:text-lg uppercase tracking-wide inline-block">
        {text}
      </span>
    </div>
  );
}
export default WandWithText;
