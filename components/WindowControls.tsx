import useWindowStore from "@/store/window";

const WindowControls = ({ target }: { target: string }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div className="flex gap-2">
      <button
        className="size-3.5 cursor-pointer rounded-full bg-[#ff6157] hover:bg-[#ff4d42] focus:outline-none focus:ring-2 focus:ring-[#ff6157] focus:ring-offset-1"
        aria-label="Close window"
        onClick={() => closeWindow(target)}
      />
      <div className="size-3.5 rounded-full bg-[#ffc030]" />
      <div className="size-3.5 rounded-full bg-[#2acb42]" />
    </div>
  );
};

export default WindowControls;
