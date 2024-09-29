import { ReactNode } from "react";

interface HeaderProps {
  title: ReactNode;
}

const Header = ({ title }: HeaderProps) => <h1>{title}</h1>;

export default Header;
