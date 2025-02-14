import classNames from "classnames";
import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "secondary" | "accent" | "error";
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  as: Tag = "h1",
  color = "primary",
  align = "left",
  children,
}) => {
  const titleClass = classNames(styles.title, styles[color], styles[align]);
  return <Tag className={titleClass}>{children}</Tag>;
};

export default Title;
