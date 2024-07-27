import { AppearFadeIn } from "@components/Animation";
import clsx from "clsx";

interface ScreenCardProps {
  className?: string;
  cardClassName?: string;
  children: React.ReactNode;
  displayName: string;
}
const ScreenCard = (props: ScreenCardProps) => {
  const { className, cardClassName, children, displayName } = props;

  return (
    <div className={`h-full px-8 pb-6 flex flex-col ${className}`}>
      <AppearFadeIn direction="bottom" className="m-auto pb-2">
        <span className="text-lg">{displayName}</span>
      </AppearFadeIn>
      <AppearFadeIn
        direction="bottom"
        delay={0.3}
        className={clsx(
          "pt-2 px-6 bg-zinc-800/20 border border-zinc-900/30 rounded h-full max-h-[85vh] overflow-y-scroll",
          cardClassName
        )}
      >
        {children}
      </AppearFadeIn>
    </div>
  );
};

export default ScreenCard;
