import Image from "next/image";
import dayjs from "dayjs";
import { navIcons, navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 px-5 text-sm text-white select-none">
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={14}
          height={14}
          className="w-3.5"
        />

        <p className="font-bold">Omer&apos;s Portfolio</p>

        <ul className="flex items-center gap-5 max-sm:hidden">
          {navLinks.map(({ name, id }) => (
            <li key={id} className="font-semibold">
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4.5">
        <ul className="flex items-center gap-4.5">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                alt="nav icon"
                width={14}
                height={14}
                className="w-4"
              />
            </li>
          ))}
        </ul>

        <time className="font-medium">{dayjs().format("ddd MMM D HH:mm")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
