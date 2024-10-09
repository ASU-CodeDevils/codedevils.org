import { cn } from "~/src/app/utils/cn";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={cn(
        "mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#20232a] p-2 shadow-2xl md:h-[40rem] md:p-6",
        className
      )}
    >
      <div className="bg-gray-100 h-full  w-full overflow-hidden rounded-2xl dark:bg-zinc-900 md:rounded-2xl">
        {children}
      </div>
    </div>
  );
};
