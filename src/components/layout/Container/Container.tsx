import classNames from "classnames";
import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  clear?: boolean;
}

const Container = ({
  children,
  fullWidth = false,
  clear = false,
}: ContainerProps) => {
  const containerClass = classNames(styles.container, {
    [styles.fluid]: fullWidth,
    [styles.narrow]: !fullWidth,
    [styles.clear]: clear,
  });
  return <div className={containerClass}>{children}</div>;
};

export default Container;
